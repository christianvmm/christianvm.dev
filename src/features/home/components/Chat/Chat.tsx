import { Portal } from '@/components/Portal'
import { CheckCircledIcon, PaperPlaneIcon } from '@/icons'
import { cn } from '@/utils/cn'
import { supabase } from '@/utils/supabase'
import { Tables } from '@/utils/supabase/types'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { FINAL_MESSAGE_ID, INITIAL_MESSAGE, REPLY } from './consts'
import { flushSync } from 'react-dom'
import Image from 'next/image'

export type Message = {
   id: number
   body: string
   createdAt: Date
   sentByUser?: boolean
   error?: boolean
}

function formatTime(date: Date) {
   return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
   })
}

export function Chat({
   open,
   setOpen,
}: {
   open: boolean
   setOpen: (v: boolean) => void
}) {
   const inputRef = useRef<HTMLInputElement>(null)
   const savedMsgRef = useRef(0)
   const messagesListRef = useRef<HTMLUListElement>(null)
   const conversation = useRef<Tables<'conversation'> | null>(null)
   const [loading, setLoading] = useState(false)
   const [body, setBody] = useState('')
   const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
   const final = messages.at(-1)?.id === FINAL_MESSAGE_ID

   function scrollToLastMessage() {
      if (!messagesListRef.current) return
      const lastChild = messagesListRef.current.lastElementChild
      lastChild?.scrollIntoView({ behavior: 'smooth' })
   }

   function addMessages(messages: Message[]) {
      flushSync(() => setMessages((prev) => [...prev, ...messages]))
      scrollToLastMessage()
   }

   async function onSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()
      if (!body || loading || final) return

      setBody('')
      const id = Math.max(...messages.map((m) => m.id)) + 1

      addMessages([
         {
            id,
            body,
            sentByUser: true,
            createdAt: new Date(),
         },
      ])

      setLoading(true)

      try {
         if (!conversation.current) {
            const { data, error } = await supabase
               .from('conversation')
               .insert({})
               .select()

            if (error || !data[0]) {
               throw new Error("Couldn't create conversation")
            }

            conversation.current = data[0]
         }

         if (!conversation.current) return

         const { error } = await supabase.from('messages').insert({
            conversation_id: conversation.current.id,
            body,
         })

         if (error) {
            throw new Error("Couldn't create message")
         }

         const reply = REPLY[savedMsgRef.current]

         if (reply) {
            addMessages(reply)
         }

         savedMsgRef.current += 1
      } catch (err) {
         if (err instanceof Error) {
            console.log(err.message)
         }

         setMessages((prev) =>
            prev.map((msg) => {
               if (msg.id !== id) return msg

               return {
                  ...msg,
                  error: true,
               }
            })
         )
      } finally {
         setLoading(false)

         if (inputRef.current) {
            inputRef.current.focus()
         }
      }
   }

   useEffect(() => {
      if (typeof window === 'undefined') return

      if (open) {
         document.body.style.overflow = 'hidden'
      } else {
         document.body.style.overflow = 'auto'
      }
   }, [open])

   return (
      <Portal>
         <dialog
            open={open}
            className={
               'fixed bg-blue-500 bg-transparent inset-0 h-screen w-full px-6 flex items-center justify-center backdrop-brightness-50 transition-all ' +
               (open ? 'opacity-100 z-[200]' : 'opacity-0 z-[-1]')
            }
            onClick={(e) => {
               if (e.target === e.currentTarget) {
                  setOpen(false)
               }
            }}
         >
            <div
               onClick={(e) => {
                  e.stopPropagation()
               }}
               className={cn(
                  'py-4 border rounded-2xl pointer-events-auto w-full max-w-lg max-h-[80vh] overflow-y-auto h-[550px] transition-transform duration-200 shadow-xl shadow-zinc-500/5 flex flex-col',
                  'bg-white  border-zinc-200',
                  'dark:bg-zinc-950 dark:border-zinc-900',
                  open ? 'scale-100' : 'scale-50'
               )}
            >
               <header
                  className='w-full pl-4  sticky top-0 pb-4 pr-4 flex items-center gap-4 border-b
                  
                  border-zinc-100 dark:border-zinc-900'
               >
                  <Image
                     alt="Christian Velez Medina's profile image"
                     width='640'
                     height='640'
                     quality={100}
                     src={`https://github.com/christianvmm.png`}
                     className='rounded-full  h-10 w-10'
                  />

                  <p className='dark:text-white text-lg font-medium'>
                     Christian
                  </p>
               </header>

               <ul
                  className='w-full h-full gap-6 pl-4  flex flex-col py-5 px-2 flex-1 overflow-y-auto'
                  ref={messagesListRef}
                  style={{
                     scrollbarGutter: 'stable',
                  }}
               >
                  {messages.map((message, i) => {
                     const nextMsg = messages[i + 1]
                     const displayTime = nextMsg
                        ? nextMsg.sentByUser !== message.sentByUser
                        : true

                     return (
                        <ChatBubble
                           message={message}
                           key={message.id}
                           displayTime={displayTime}
                        />
                     )
                  })}
               </ul>

               <form onSubmit={onSubmit} className='px-4 pt-4'>
                  <div className='w-full relative'>
                     <input
                        name='body'
                        ref={inputRef}
                        value={body}
                        disabled={final}
                        placeholder={
                           final
                              ? 'Your message was sent.'
                              : 'Type a message...'
                        }
                        className={cn(
                           'w-full placeholder:text-zinc-400 disabled:cursor-not-allowed outline-0 outline-zinc-500/0 transition-all',
                           'focus:border-zinc-300',
                           ' outline-offset-1 px-4 py-2 rounded-full bg-white border dark:bg-zinc-800 dark:placeholder:text-zinc-500  dark:focus:outline-none',
                           final
                              ? 'border-green-500'
                              : 'border-zinc-200 dark:border-zinc-700/50 dark:focus:border-zinc-700'
                        )}
                        onChange={(e) => setBody(e.target.value)}
                     />

                     <button
                        title='Send message'
                        type='submit'
                        disabled={loading}
                        className={cn(
                           'absolute right-4 top-1/2 -translate-y-1/2 text-blue-500',
                           'disabled:text-zinc-600 disabled:cursor-not-allowed',
                           final && 'text-green-500'
                        )}
                     >
                        {final ? <CheckCircledIcon /> : <PaperPlaneIcon />}
                     </button>
                  </div>
               </form>
            </div>
         </dialog>
      </Portal>
   )
}

function ChatBubble({
   message,
   displayTime,
}: {
   message: Message
   displayTime: boolean
}) {
   return (
      <li
         key={message.id}
         className={cn(
            'flex flex-col',
            message.sentByUser ? 'items-end' : 'items-start'
         )}
      >
         <div className={cn('max-w-[70%] w-auto')}>
            <div
               className={cn(
                  'w-full px-4 py-2 rounded-2xl transition-colors',
                  message.sentByUser ? 'rounded-br-none' : 'rounded-bl-none',

                  message.sentByUser
                     ? 'bg-blue-500 text-white'
                     : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-white',

                  message.error && 'bg-red-500 text-white'
               )}
            >
               <p className='break-words'>{message.body}</p>
            </div>
         </div>

         {displayTime && (
            <p
               className={cn(
                  'text-zinc-400 text-xs mt-1.5',
                  message.sentByUser && 'text-end'
               )}
            >
               {formatTime(message.createdAt)}
               {message.error && ' · Error'}
            </p>
         )}
      </li>
   )
}
