"use client"

import { getFeaturedWords, type Word } from "@/lib/data"
import { Card } from "@/components/ui/card"

interface FeaturedWordsProps {
  onSelectWord: (word: Word) => void
}

function getTurkumColor(turkum: string): string {
  const colors: { [key: string]: string } = {
    "Fe'l": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    "Ot": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    "Sifat": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    "Ravish": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    "Olmosh": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    "Son": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    "Yuklamalar": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  }
  return colors[turkum] || "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300"
}

export function FeaturedWords({ onSelectWord }: FeaturedWordsProps) {
  const featuredWords = getFeaturedWords(6)

  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Mashxur So'zlar</h2>
        <p className="text-muted-foreground">Eng ko'p qidirilgan va ishlatiladigan so'zlar</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredWords.map((word, index) => (
          <Card
            key={index}
            className="group p-6 cursor-pointer hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-border bg-gradient-to-br from-card to-card/50 hover:border-primary/70"
            onClick={() => onSelectWord(word)}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">{word["Adabiy til"]}</h3>
              <p className="text-sm text-muted-foreground font-medium">{word.Transliteratsiya}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm text-foreground leading-relaxed">{word.Izohi}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTurkumColor(word.Turkumi)}`}>
                {word.Turkumi}
              </span>
              {word["Inglizcha tarjimasi"] && (
                <span className="text-xs text-muted-foreground">
                  {word["Inglizcha tarjimasi"]}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
