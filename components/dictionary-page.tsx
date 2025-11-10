"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { words, getCategories } from "@/lib/data"

export function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = useMemo(() => ["all", ...getCategories()], [])

  const filteredWords = useMemo(() => {
    return words.filter((w) => {
      const matchesSearch =
        w["Adabiy til"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.Transliteratsiya.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.Izohi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w["Inglizcha tarjimasi"].toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || w.Turkumi === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-foreground">So'zlar Lug'ati</h1>
      <p className="text-muted-foreground mb-8">Eng to'liq va aniq so'z tarjimaları</p>

      {/* Search and Filter */}
      <div className="space-y-4 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="So'z qidirish..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base rounded-lg border-2 border-primary/20 focus:border-primary"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              onClick={() => setSelectedCategory(cat)}
              className="text-sm"
            >
              {cat === "all" ? "Barcha" : cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Words Table */}
      <div className="space-y-3">
        {filteredWords.length > 0 ? (
          filteredWords.map((word, index) => (
            <Card
              key={index}
              className="p-4 bg-card border border-border hover:shadow-md hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">So'z</p>
                  <p className="font-bold text-primary text-lg">{word["Adabiy til"]}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Latin</p>
                  <p className="text-foreground">{word.Transliteratsiya}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Izohi</p>
                  <p className="text-foreground text-sm">{word.Izohi}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Turkumi</p>
                  <p className="inline-block px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded">
                    {word.Turkumi}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Misol</p>
                  <p className="text-foreground text-sm italic">{word.Misol}</p>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-8 text-center bg-card border border-border">
            <p className="text-muted-foreground">Hech qanday so'z topilmadi</p>
          </Card>
        )}
      </div>
    </div>
  )
}
