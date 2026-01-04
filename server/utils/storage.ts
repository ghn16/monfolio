import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'server/data')

// Utilitaire pour lire un fichier JSON
export function readJSON(filename: string): any[] {
  try {
    const filePath = path.join(DATA_DIR, filename)
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // Si le fichier n'existe pas, retourne un tableau vide
    return []
  }
}

// Utilitaire pour écrire dans un fichier JSON
export function writeJSON(filename: string, data: any[]): boolean {
  try {
    const filePath = path.join(DATA_DIR, filename)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
    return true
  } catch (error) {
    console.error('Erreur lors de l\'écriture:', error)
    return false
  }
}

// Générer un ID unique simple
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}