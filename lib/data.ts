// Import main data from sheva.json
import shevaData from '@/sheva.json'

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
  // Maxsus tanlab olingan so'zlar (Unicode U+2019 apostrophe ishlatilgan)
  const featuredWordNames = [
    'Telefon',
    'Sigir',
    'Qo\u2019chqor',  // Qo'chqor
    'Ko\u2019zoynak', // Ko'zoynak
    'Choynak',
    'Velosiped'
  ]
  
  const featured = featuredWordNames
    .map(name => words.find(w => w['Adabiy til'] === name))
    .filter((w): w is Word => w !== undefined && !!w.image)
  
  return featured.slice(0, count)
}
