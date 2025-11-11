"use client"

import { Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { getFeaturedWords } from "@/lib/data"

export function HomePage() {
  const featuredWords = getFeaturedWords(6)

  return (
    <div className="flex-1 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Uzbek Tilini Shunoshuv</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Eng yangi va eng sod tarjima, lug'at va o'rganish platformasi
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="So'z qidirish..."
                className="pl-10 h-12 text-base rounded-lg border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </div>
        </div>

        {/* Featured Words Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Mashxur so'zlar</h2>
            <Button variant="ghost" className="text-primary">
              Barcha ko'rish <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredWords.map((item, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer bg-card border border-border"
              >
                <div className="flex items-start gap-4 mb-3">
                  {item.image && (
                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <img 
                        src={item.image} 
                        alt={item["Adabiy til"]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary">{item["Adabiy til"]}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.Transliteratsiya}</p>
                  </div>
                </div>
                <p className="text-sm mb-3">{item.Izohi}</p>
                <div className="flex items-center gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                    {item.Turkumi}
                  </span>
                  {item["Inglizcha tarjimasi"] && (
                    <span className="text-xs text-muted-foreground">
                      {item["Inglizcha tarjimasi"]}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="p-8 text-center bg-card border border-border">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">So'zlar va ibora</p>
          </Card>
          <Card className="p-8 text-center bg-card border border-border">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground">Viloyatlar</p>
          </Card>
          <Card className="p-8 text-center bg-card border border-border">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Foydalanish imkoni</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
