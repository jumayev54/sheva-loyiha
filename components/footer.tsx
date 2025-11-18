export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/50 to-muted/30 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Foydali Havolalar</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://dialect.uz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Dialect.uz
                </a>
              </li>
              <li>
                <a href="https://uzbekcorpus.uz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  O'zbek Korpusi
                </a>
              </li>
              <li>
                <a href="https://uzschoolcorpara.uz/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  UzSchool Korpora
                </a>
              </li>
              <li>
                <a href="http://v1.alishernavoycorpus.uz/korpus_haqida/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Alisher Navoiy Korpusi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Muallif Maqolalari</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/docs/maqola-1.pdf"
                  download
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Maqola 1 (PDF)
                </a>
              </li>
              <li>
                <a
                  href="/docs/maqola-2.docx"
                  download
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Maqola 2 (DOCX)
                </a>
              </li>
              <li>
                <a
                  href="/docs/maqola-3.docx"
                  download
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Maqola 3 (DOCX)
                </a>
              </li>
              <li>
                <a
                  href="/docs/maqola-4.docx"
                  download
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Maqola 4 (DOCX)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Aloqa</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:muqaddasxushboqova375@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  muqaddasxushboqova375@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">+998912320109</li>
              <li className="text-muted-foreground">Termiz, Uzbekistan</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
