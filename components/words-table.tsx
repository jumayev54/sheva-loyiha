"use client"

import { useState, useMemo } from "react"
import { words } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface WordsTableProps {
  onSelectWord: (word: any) => void
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

export function WordsTable({ onSelectWord }: WordsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")

  const categories = useMemo(() => [...new Set(words.map((w) => w.Turkumi))], [])

  const filtered = useMemo(() => {
    return words.filter((word) => {
      const matchesSearch =
        word["Adabiy til"].toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.Izohi.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !filterCategory || word.Turkumi === filterCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, filterCategory])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">So'zlar Jadvali</h1>
        
        <div className="mb-8 space-y-4">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Input
              placeholder="So'z qidirish..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="bg-card w-full pl-10 h-12 border-2 focus:border-primary shadow-sm"
            />
          </div>
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="pl-10 pr-10 py-3 rounded-lg bg-card border-2 border-border text-foreground w-full sm:w-64 shadow-sm hover:border-primary transition-colors cursor-pointer appearance-none leading-tight"
              style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
            >
              <option value="" className="py-2">Barcha Turkumlari</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="py-2">
                  {cat}
                </option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-border rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50 border-b border-border">
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground">№</th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground">So'z</th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground hidden lg:table-cell">
                  Transliteratsiya
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground hidden xl:table-cell">
                  Transkripsiya
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground hidden sm:table-cell">
                  Turkumi
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground hidden md:table-cell">
                  Izohi
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground hidden lg:table-cell">
                  Misol
                </th>
                <th className="px-4 sm:px-6 py-4 text-left font-semibold text-foreground hidden xl:table-cell">
                  Inglizcha
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((word, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-primary/5 cursor-pointer transition-all hover:shadow-sm"
                  onClick={() => onSelectWord(word)}
                >
                  <td className="px-4 sm:px-6 py-4 text-sm">{word["№"]}</td>
                  <td className="px-4 sm:px-6 py-4 font-semibold">{word["Adabiy til"]}</td>
                  <td className="px-4 sm:px-6 py-4 hidden lg:table-cell text-sm">{word.Transliteratsiya}</td>
                  <td className="px-4 sm:px-6 py-4 hidden xl:table-cell text-sm font-mono">{word.Transkripsiya}</td>
                  <td className="px-4 sm:px-6 py-4 hidden sm:table-cell text-sm">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTurkumColor(word.Turkumi)}`}>
                      {word.Turkumi}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-4 hidden md:table-cell text-sm text-muted-foreground line-clamp-1">
                    {word.Izohi}
                  </td>
                  <td className="px-4 sm:px-6 py-4 hidden lg:table-cell text-sm text-muted-foreground line-clamp-1 italic">
                    {word.Misol}
                  </td>
                  <td className="px-4 sm:px-6 py-4 hidden xl:table-cell text-sm text-muted-foreground">
                    {word["Inglizcha tarjimasi"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
