import { readJSON } from '~/server/utils/storage'

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
  // Récupérer le token depuis le cookie
  const sessionToken = getCookie(event, 'session_token')

  if (!sessionToken) {
    throw createError({
      statusCode: 401,
      message: 'Non authentifié'
    })
  }

  // Trouver la session
  const sessions = readJSON('sessions.json') as Session[]
  const session = sessions.find((s) => s.token === sessionToken)

  if (!session) {
    throw createError({
      statusCode: 401,
      message: 'Session invalide'
    })
  }

  // Trouver l'utilisateur
  const users = readJSON('users.json') as User[]
  const user = users.find((u) => u.id === session.userId)

  if (!user) {
    throw createError({
      statusCode: 404,
      message: 'Utilisateur non trouvé'
    })
  }

  // Retourner l'utilisateur sans le mot de passe
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    createdAt: user.createdAt
  }
})