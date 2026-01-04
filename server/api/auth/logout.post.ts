import { readJSON, writeJSON } from '~/server/utils/storage'

interface Session {
  token: string
  userId: string
  createdAt: string
}

export default defineEventHandler(async (event) => {
  // Récupérer le token depuis le cookie
  const sessionToken = getCookie(event, 'session_token')

  if (sessionToken) {
    // Supprimer la session
    const sessions = readJSON('sessions.json') as Session[]
    const filteredSessions = sessions.filter((s) => s.token !== sessionToken)
    writeJSON('sessions.json', filteredSessions)
  }

  // Supprimer le cookie
  deleteCookie(event, 'session_token')

  return {
    message: 'Déconnexion réussie'
  }
})