const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const jsonPath = path.join(repoRoot, 'sheva.json')
const imgsDir = path.join(repoRoot, 'public', 'imgs')

function normalize(s) {
	if (!s) return ''
	return (
		s
			.toLowerCase()
			// common apostrophes and diacritics to ascii
			.replace(/[‘’‚`´ʻʼ]/g, "'")
			.replace(/[’`‘]/g, "'")
			.replace(/[”“–—‑]/g, '-')
			.replace(/[().,\/\[\]{}\":;!?]/g, '')
			.replace(/[\s]+/g, '-')
			// remove accents/diacritics
			.normalize('NFD')
			.replace(/\p{Diacritic}/gu, '')
			// replace special uz characters
			.replace(/[ʻʼ’ʼ]/g, '')
			.replace(/[’‘]/g, '')
			.replace(/[ö]/g, 'o')
			.replace(/[ó]/g, 'o')
			.replace(/[ʻʼ]/g, '')
			.replace(/[ʼ]/g, '')
			.replace(/[’]/g, '')
			.replace(/[‘]/g, '')
			.replace(/[^a-z0-9\-]/g, '')
	)
}

function stripExt(fn) {
	return fn.replace(/\.[^/.]+$/, '')
}

const imgs = fs.readdirSync(imgsDir).filter(f => !f.startsWith('.'))
const normalizedMap = new Map()
for (const f of imgs) {
	const name = stripExt(f)
	normalizedMap.set(normalize(name), f)
}

const raw = fs.readFileSync(jsonPath, 'utf8')
let data
try {
	data = JSON.parse(raw)
} catch (err) {
	console.error('Failed to parse JSON:', err)
	process.exit(1)
}

let added = 0
for (const item of data) {
	if (!item['image'] || !item['image'].trim()) {
		const word =
			item['Adabiy til'] || item['Adabiy_Til'] || item['AdabiyTil'] || ''
		const norm = normalize(word)
		if (!norm) continue
		if (normalizedMap.has(norm)) {
			const filename = normalizedMap.get(norm)
			item['image'] = '/imgs/' + filename
			added++
			// console.log('Matched', word, '->', filename)
		}
	}
}

const outPath = path.join(repoRoot, 'sheva.updated.json')
fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8')
console.log('Done. Images added:', added, 'Output:', outPath)
