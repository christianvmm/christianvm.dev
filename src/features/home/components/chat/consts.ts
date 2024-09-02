import type { Message } from './chat'

export const INITIAL_MESSAGE: Message = {
   id: -1,
   body: 'Interested in work together? Feel free to drop me a message here.',
   createdAt: new Date(),
}

export const REPLY: Record<number, Message[]> = {
   0: [
      {
         id: -2,
         body: "What's your name?",
         createdAt: new Date(),
      },
   ],
   1: [
      {
         id: -3,
         body: "What's your email?",
         createdAt: new Date(),
      },
   ],
   2: [
      {
         id: -4,
         body: 'Could you tell me about your project? What is it about?',
         createdAt: new Date(),
      },
   ],
   3: [
      {
         id: -5,
         body: 'Anything else you would like to add?',
         createdAt: new Date(),
      },
   ],
   4: [
      {
         id: -6,
         body: 'Got it, thanks! 🙌',
         createdAt: new Date(),
      },
      {
         id: -7,
         body: 'I will reply ASAP! 💬',
         createdAt: new Date(),
      },
      {
         id: -8,
         body: 'Catch up soon! ✨',
         createdAt: new Date(),
      },
   ],
}

export const FINAL_MESSAGE_ID = -8
