"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { useState, useRef } from "react"

interface WordDetailsProps {
  word: any
  onBack: () => void
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

export function WordDetails({ word, onBack }: WordDetailsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Button onClick={onBack} variant="outline" className="mb-8 hover:bg-primary hover:text-primary-foreground transition-all">
          ← Orqaga qaytish
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Image and Audio */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-2xl overflow-hidden mb-8 shadow-lg border border-primary/20 hover:scale-105 transition-transform duration-300">
              {word.image ? (
                <img 
                  src={word.image} 
                  alt={word["Adabiy til"]}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
                  <svg className="w-24 h-24 sm:w-32 sm:h-32 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-muted-foreground text-center">Rasm mavjud emas</p>
                </div>
              )}
            </div>
            {word.audio ? (
              <>
                <audio 
                  ref={audioRef} 
                  src={word.audio}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => {
                    setIsPlaying(false)
                    console.error('Audio yuklashda xatolik:', word.audio)
                  }}
                />
                <button 
                  onClick={handlePlayAudio}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isPlaying 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  } hover:shadow-lg hover:scale-105`}
                >
                  <Volume2 size={20} className={isPlaying ? 'animate-pulse' : ''} />
                  <span>{isPlaying ? 'To\'xtatish' : 'Tinglash'}</span>
                </button>
              </>
            ) : (
              <div className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-muted text-muted-foreground rounded-lg">
                <Volume2 size={20} />
                <span className="font-medium">Audio mavjud emas</span>
              </div>
            )}
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">{word["Adabiy til"]}</h1>
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getTurkumColor(word.Turkumi)}`}>
                {word.Turkumi}
              </span>
            </div>

            {/* Writing Variants */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border border-border shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Yozuv Variantlari
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Adabiy til</p>
                  <p className="text-lg sm:text-xl font-mono font-bold">{word["Adabiy til"]}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Transliteratsiya</p>
                  <p className="text-lg sm:text-xl font-mono font-bold">{word.Transliteratsiya}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs text-muted-foreground mb-2">Transkripsiya (Unicode)</p>
                  <p className="text-lg sm:text-xl font-mono font-bold">{word.Transkripsiya}</p>
                </div>
              </div>
            </Card>

            {/* Meaning */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border border-border shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Izohi
              </h2>
              <p className="text-base leading-relaxed text-foreground">{word.Izohi}</p>
            </Card>

            {/* Example */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border border-border shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Misol
              </h2>
              <p className="text-base leading-relaxed italic text-muted-foreground">{word.Misol}</p>
            </Card>

            {/* Location Details */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border border-border shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Hudud Ma'lumotlari
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Viloyat</p>
                  <p className="font-semibold">{word["Hudud(viloyat)"]}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tuman</p>
                  <p className="font-semibold">{word["Hudud (tuman)"]}</p>
                </div>
              </div>
            </Card>

            {/* English Translation */}
            <Card className="p-6 bg-gradient-to-br from-card to-card/50 border border-border shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                Inglizcha Tarjimasi
              </h2>
              <p className="text-base font-medium">{word["Inglizcha tarjimasi"]}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
