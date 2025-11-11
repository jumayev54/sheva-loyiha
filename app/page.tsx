"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedWords } from "@/components/featured-words"
import { WordsTable } from "@/components/words-table"
import { WordDetails } from "@/components/word-details"
import { AboutPage } from "@/components/about-page"
import { Footer } from "@/components/footer"

type PageType = "home" | "words" | "contact" | "about" | "details"

interface SelectedWord {
  id?: string
  [key: string]: any
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const [selectedWord, setSelectedWord] = useState<SelectedWord | null>(null)

  const handleWordSelect = (word: SelectedWord) => {
    setSelectedWord(word)
    setCurrentPage("details")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page)
    setSelectedWord(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Xabar yuborildi!")
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === "home" && (
          <>
            <HeroCarousel />
            <FeaturedWords onSelectWord={handleWordSelect} />
          </>
        )}
        {currentPage === "words" && <WordsTable onSelectWord={handleWordSelect} />}
        {currentPage === "details" && selectedWord && (
          <WordDetails word={selectedWord} onBack={() => setCurrentPage("words")} />
        )}
        {currentPage === "contact" && (
          <div className="min-h-screen bg-background">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">Aloqa</h1>
              <p className="text-muted-foreground mb-8">Biz bilan bog'lanish uchun ushbu formani to'ldiring.</p>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ism</label>
                  <input
                    type="text"
                    required
                    placeholder="Ismingizni kiriting"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Familiya</label>
                  <input
                    type="text"
                    required
                    placeholder="Familiyangizni kiriting"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Email manzilingiz"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Xabar</label>
                  <textarea
                    required
                    placeholder="Siz nima haqida yozmoqchisiz?"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        )}
        {currentPage === "about" && <AboutPage />}
      </main>

      <Footer />
    </div>
  )
}
