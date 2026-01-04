import { readJSON, writeJSON, generateId } from '~/server/utils/storage'

interface User {
  id: string
  email: string
  password: string
  username: string
  createdAt: string
}

export default defineEventHandler(async (event) => {
  // Lire les données du formulaire
  const body = await readBody(event)
  const { email, password, username } = body

  // Validation basique
  if (!email || !password || !username) {
    throw createError({
      statusCode: 400,
      message: 'Email, mot de passe et nom d\'utilisateur requis'
    })
  }

  // Lire les utilisateurs existants
  const users = readJSON('users.json') as User[]

  // Vérifier si l'email existe déjà
  const existingUser = users.find((u) => u.email === email)
  if (existingUser) {
    throw createError({
      statusCode: 409,
      message: 'Cet email est déjà utilisé'
    })
  }

  // Vérifier si le username existe déjà
  const existingUsername = users.find((u) => u.username === username)
  if (existingUsername) {
    throw createError({
      statusCode: 409,
      message: 'Ce nom d\'utilisateur est déjà pris'
    })
  }

  // Créer le nouvel utilisateur
  const newUser: User = {
    id: generateId(),
    email,
    password, // ⚠️ En Phase 1 on ne hash pas encore (on le fera en Phase 5)
    username,
    createdAt: new Date().toISOString()
  }

  // Ajouter l'utilisateur
  users.push(newUser)
  writeJSON('users.json', users)

  // Retourner l'utilisateur (sans le mot de passe)
  return {
    id: newUser.id,
    email: newUser.email,
    username: newUser.username,
    createdAt: newUser.createdAt
  }
})