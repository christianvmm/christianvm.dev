type Env = 'development' | 'production'
export const ENV = process.env.NODE_ENV as Env
export const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN as string
export const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string
export const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET as string
