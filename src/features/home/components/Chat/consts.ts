import { Message } from './Chat'

export const INITIAL_MESSAGE: Message = {
   id: -1,
   body: 'Interested in work together? Feel free to drop me a message here (serfiously, I mean it).',
   createdAt: new Date(),
}

export const ASK_NAME: Message = {
   id: -2,
   body: "What's your name?",
   createdAt: new Date(),
}

export const ASK_EMAIL: Message = {
   id: -3,
   body: "What's your email?",
   createdAt: new Date(),
}
