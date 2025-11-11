// Prefer updated mapping if present (script output). If you want to revert, change this import
// back to '@/sheva.json'.
import shevaData from '@/sheva.updated.json'

export interface Word {
  "№": string
  "Adabiy til": string
  "Turkumi": string
  "Transliteratsiya": string
  "Transkripsiya": string
  "Izohi": string
  "Misol": string
  "Hudud(viloyat)": string
  "Hudud (tuman)": string
  "Inglizcha tarjimasi": string
  audio?: string
  image?: string
}

// @ts-ignore - JSON fayl to'g'ri formatda
export const words: Word[] = shevaData

export function getAllWords(): Word[] {
  return words
}

export function getWordsByCategory(category: string): Word[] {
  if (category === 'all') return words
  return words.filter(word => word.Turkumi === category)
}

export function searchWords(query: string): Word[] {
  const lowerQuery = query.toLowerCase()
  return words.filter(word => 
    word["Adabiy til"].toLowerCase().includes(lowerQuery) ||
    word.Transliteratsiya.toLowerCase().includes(lowerQuery) ||
    word.Izohi.toLowerCase().includes(lowerQuery) ||
    word["Inglizcha tarjimasi"].toLowerCase().includes(lowerQuery)
  )
}

export function getCategories(): string[] {
  const categories = new Set(words.map(word => word.Turkumi))
  return Array.from(categories)
}

export function getFeaturedWords(count: number = 6): Word[] {
  // Birinchi so'zlarni qaytaradi (server va client uchun bir xil)
  return words.slice(0, count)
}
