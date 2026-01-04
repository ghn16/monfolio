import { readJSON, writeJSON, generateId } from '~/server/utils/storage'

interface User {
  id: string
  email: string
  password: string
  username: string
  createdAt: string
}

interface Session {
  token: string
  userId: string
  createdAt: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body

  // Validation
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: 'Email et mot de passe requis'
    })
  }

  // Lire les utilisateurs
  const users = readJSON('users.json') as User[]

  // Trouver l'utilisateur
  const user = users.find((u) => u.email === email && u.password === password)

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Email ou mot de passe incorrect'
    })
  }

  // Créer une session
  const sessionToken = generateId()
  const sessions = readJSON('sessions.json') as Session[]

  const newSession: Session = {
    token: sessionToken,
    userId: user.id,
    createdAt: new Date().toISOString()
  }

  sessions.push(newSession)
  writeJSON('sessions.json', sessions)

  // Créer un cookie pour stocker le token
  setCookie(event, 'session_token', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 jours
    path: '/'
  })

  // Retourner l'utilisateur
  return {
    id: user.id,
    email: user.email,
    username: user.username
  }
})