'use client'

import { Card } from '@/components/ui/card'
import { getAllWords, type Word } from '@/lib/data'
import { useState } from 'react'

function Thumbnail({ src, alt }: { src?: string; alt: string }) {
	const [error, setError] = useState(false)

	if (!src || error) {
		return (
			<div className='w-full h-full flex items-center justify-center text-muted-foreground text-2xl font-bold'>
				{alt?.charAt(0)?.toUpperCase()}
			</div>
		)
	}

	// Use a plain <img> instead of next/image here. Next's Image component
	// performs server-side validation/optimization and will surface errors
	// when the file is missing (causing the "not a valid image" logs).
	// A regular <img> lets us handle 404/broken images client-side with
	// onError and render a friendly placeholder instead.
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={src}
			alt={alt}
			className='w-full h-full object-cover'
			loading='lazy'
			onError={() => setError(true)}
		/>
	)
}

interface FeaturedWordsProps {
	onSelectWord: (word: Word) => void
}

function getTurkumColor(turkum: string): string {
	const colors: { [key: string]: string } = {
		"Fe'l": 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
		Ot: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
		Sifat:
			'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
		Ravish:
			'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
		Olmosh: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
		Son: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
		Yuklamalar: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
	}
	return (
		colors[turkum] ||
		'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
	)
}

export function FeaturedWords({ onSelectWord }: FeaturedWordsProps) {
	// Only include words that have an image. Take first 6.
	const featuredWords = getAllWords()
		.filter(w => !!w.image)
		.slice(0, 6)

	return (
		<div className='py-12 px-4 sm:px-6 max-w-7xl mx-auto'>
			<div className='mb-8'>
				<h2 className='text-3xl font-bold mb-2'>Mashhur so'zlar</h2>
				<p className='text-muted-foreground'>
					Eng ko'p qidirilgan va ishlatiladigan so'zlar
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{featuredWords.map((word, index) => (
					<Card
						key={index}
						className='group p-4 cursor-pointer hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-border bg-linear-to-br from-card to-card/50 hover:border-primary/70'
						onClick={() => onSelectWord(word)}
					>
						<div className='flex items-start gap-4'>
							<div className='w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center'>
								{/* Thumbnail with client-side fallback to placeholder when image fails to load */}
								<Thumbnail src={word.image} alt={word['Adabiy til']} />
							</div>

							<div className='flex-1'>
								<h3 className='text-lg font-bold text-primary mb-1 group-hover:text-primary/80 transition-colors'>
									{word['Adabiy til']}
								</h3>
								<p className='text-sm text-muted-foreground font-medium mb-2'>
									{word.Transliteratsiya}
								</p>
								<p className='text-sm text-foreground leading-relaxed line-clamp-3 mb-3'>
									{word.Izohi}
								</p>
								<div className='flex items-center gap-2'>
									<span
										className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTurkumColor(
											word.Turkumi
										)}`}
									>
										{word.Turkumi}
									</span>
									{word['Inglizcha tarjimasi'] && (
										<span className='text-xs text-muted-foreground'>
											{word['Inglizcha tarjimasi']}
										</span>
									)}
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}
