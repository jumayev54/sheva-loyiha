'use client'

import type React from 'react'

import { AboutPage } from '@/components/about-page'
import { FeaturedWords } from '@/components/featured-words'
import { Footer } from '@/components/footer'
import { HeroCarousel } from '@/components/hero-carousel'
import { Navigation } from '@/components/navigation'
import { WordDetails } from '@/components/word-details'
import { WordsTable } from '@/components/words-table'
import { useState } from 'react'

type PageType = 'home' | 'words' | 'contact' | 'about' | 'details'

interface SelectedWord {
	id?: string
	[key: string]: any
}

export default function Page() {
	const [currentPage, setCurrentPage] = useState<PageType>('home')
	const [selectedWord, setSelectedWord] = useState<SelectedWord | null>(null)

	const handleWordSelect = (word: SelectedWord) => {
		setSelectedWord(word)
		setCurrentPage('details')
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const handleNavigate = (page: PageType) => {
		setCurrentPage(page)
		setSelectedWord(null)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const handleContactSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		alert('Xabar yuborildi!')
	}

	return (
		<div className='flex flex-col min-h-screen bg-background text-foreground'>
			<Navigation currentPage={currentPage} onNavigate={handleNavigate} />

			<main className='flex-1'>
				{currentPage === 'home' && (
					<>
						<HeroCarousel />
						<FeaturedWords onSelectWord={handleWordSelect} />
					</>
				)}
				{currentPage === 'words' && (
					<WordsTable onSelectWord={handleWordSelect} />
				)}
				{currentPage === 'details' && selectedWord && (
					<WordDetails
						word={selectedWord}
						onBack={() => setCurrentPage('words')}
					/>
				)}
				{currentPage === 'contact' && (
					<div className='min-h-screen bg-background'>
						<div className='max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16'>
							<h1 className='text-3xl sm:text-4xl font-bold mb-3'>Aloqa</h1>
							<p className='text-muted-foreground mb-8'>
								Biz bilan bog'lanish uchun ushbu formani to'ldiring.
							</p>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch'>
								{/* Left: mail image/icon */}
								<div className='flex items-center justify-center'>
									<div className='w-full h-full max-w-md rounded-xl bg-card flex items-center justify-center overflow-hidden p-6'>
										{/* envelope image from public folder (fills available space) */}
										<img
											src='/envelope.png'
											alt='Envelope'
											className='max-w-full max-h-full object-contain'
										/>
									</div>
								</div>

								{/* Right: form with combined name, email and message */}
								<div className='h-full'>
									<form
										onSubmit={handleContactSubmit}
										className='space-y-4 h-full flex flex-col justify-between'
									>
										<div>
											<label className='block text-sm font-semibold mb-2'>
												Ism va familiya
											</label>
											<input
												type='text'
												name='fullname'
												required
												placeholder='Ism va familiyangizni kiriting'
												className='w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary'
											/>
										</div>

										<div>
											<label className='block text-sm font-semibold mb-2'>
												Email
											</label>
											<input
												type='email'
												name='email'
												required
												placeholder='Email manzilingiz'
												className='w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary'
											/>
										</div>

										<div>
											<label className='block text-sm font-semibold mb-2'>
												Xabar
											</label>
											<textarea
												name='message'
												required
												placeholder='Siz nima haqida yozmoqchisiz?'
												rows={6}
												className='w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none'
											/>
										</div>

										<div>
											<button
												type='submit'
												className='w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors'
											>
												Yuborish
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				)}
				{currentPage === 'about' && <AboutPage />}
			</main>

			<Footer />
		</div>
	)
}
