"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const heroImages = [
  {
    id: 1,
    image: "/photo_1_2025-11-10_22-14-44.jpg",
    title: "O'zbek Shevalarini Kashf Eting",
    subtitle: "500+ so'z, 5+ viloyat dialektlari",
  },
  {
    id: 2,
    image: "/photo_2_2025-11-10_22-14-44.jpg",
    title: "Til va Madaniyat Xazinasi",
    subtitle: "Surxondaryo va boshqa viloyatlar shevalari",
  },
  {
    id: 3,
    image: "/photo_3_2025-11-10_22-14-44.jpg",
    title: "To'liq Lug'at va Tahlil",
    subtitle: "Har bir so'zning to'liq tahlili va misollari",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden mb-12">
      {heroImages.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center text-balance drop-shadow-2xl animate-fade-in">
              {item.title.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block animate-bounce-in"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-xl animate-slide-up">{item.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === current ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
