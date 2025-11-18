"use client"

export function TranscriptionPage() {
  const transcriptionData = [
    {
      id: 1,
      kirill: "А а",
      lotin: "A a", 
      asos: "а",
      lotinYozuv: "A a",
      yunikod: "0041/0061",
      izoh: "Orqa qator, quyi keng, lablanmagan unlini ifodalaydi",
      misol: "Toshkent, Toshkent, Taskan"
    },
    {
      id: 2,
      kirill: "А а",
      lotin: "A a",
      asos: "а",
      lotinYozuv: "Ä ä", 
      yunikod: "00C4/00E4",
      izoh: "Old qator, quyi keng, lablanmagan unlini ifodalaydi",
      misol: "apna, arna, ärnä"
    },
    {
      id: 3,
      kirill: "А а",
      lotin: "A a",
      asos: "а",
      lotinYozuv: "Ā ā",
      yunikod: "0100/0101", 
      izoh: "Orqa qator, quyi keng, qisman lablangan unlini ifodalaydi",
      misol: "daraxt, daraxt, Āyaė"
    },
    {
      id: 4,
      kirill: "Э э",
      lotin: "E e",
      asos: "е",
      lotinYozuv: "E e",
      yunikod: "0045/0065",
      izoh: "Old qator, o'rta keng, lablanmagan unlini ifodalaydi", 
      misol: "Эгин, Egin, Iyin"
    },
    {
      id: 5,
      kirill: "И и",
      lotin: "I i",
      asos: "и",
      lotinYozuv: "I i",
      yunikod: "0049/0069",
      izoh: "Old qator, yuqori-tor, lablanmagan unlini, singarmonizmli shevalarda qisqa, shahar shevalarda oraliq tovushni",
      misol: "кичик, kichik, kiėči"
    },
    {
      id: 6,
      kirill: "И и", 
      lotin: "I i",
      asos: "и",
      lotinYozuv: "Ī ī",
      yunikod: "0208/0209",
      izoh: "Orqa qator, yuqori-tor, lablanmagan unlini, singarmonizmli shevalarda qisqa, shahar shevalarda oraliq tovushni ifodalaydi",
      misol: "кичик, qiliq, qiliy"
    },
    {
      id: 7,
      kirill: "У у",
      lotin: "U u",
      asos: "у", 
      lotinYozuv: "U u",
      yunikod: "0055/0075",
      izoh: "Orqa qator, yuqori-tor, lablangan unlini ifodalaydi",
      misol: "Худо, Xudo, Xudaj"
    },
    {
      id: 8,
      kirill: "У у",
      lotin: "U u",
      asos: "у",
      lotinYozuv: "Ü ü", 
      yunikod: "0170/0171",
      izoh: "Old qator, yuqori-tor, lablangan unlini ifodalaydi",
      misol: "Урүқ, urchuq, u rčüy"
    },
    {
      id: 9,
      kirill: "Ў ў",
      lotin: "O' o'",
      asos: "ў",
      lotinYozuv: "O o",
      yunikod: "004F/006F", 
      izoh: "Orqa qator, o'rta keng, lablangan unli",
      misol: "Тўўпик, ro'piq, ro'piy"
    },
    {
      id: 10,
      kirill: "Ў ў",
      lotin: "O' o'",
      asos: "ў",
      lotinYozuv: "Ö ö",
      yunikod: "00D6/00F6",
      izoh: "Old qator, o'rta keng, lablangan unli", 
      misol: "Ёстик, yostiq, lölabo'lis"
    },
    {
      id: 11,
      kirill: "",
      lotin: "",
      asos: "",
      lotinYozuv: "ε",
      yunikod: "03F5",
      izoh: "Old qator, o'rta keng, lablanmagan. Boysun shevasida uchramaydi, Namangan shahar shevasida mavjud",
      misol: "Икки, ikki, εkki"
    },
    {
      id: 12,
      kirill: "Б б",
      lotin: "B b",
      asos: "б",
      lotinYozuv: "B b", 
      yunikod: "0042/0062",
      izoh: "Lab-lab, portlovchi, jarangli, sof undosh",
      misol: "бу ёк, bu yo'q"
    },
    {
      id: 13,
      kirill: "Д д",
      lotin: "D d",
      asos: "д",
      lotinYozuv: "D d",
      yunikod: "0044/0064",
      izoh: "Til oldi, portlovchi, jarangli, sof undosh",
      misol: "Dokarуmoq, dokaro'mol, däkarömal"
    },
    {
      id: 14,
      kirill: "Ф ф", 
      lotin: "F f",
      asos: "ф",
      lotinYozuv: "F f",
      yunikod: "0046/0066",
      izoh: "Lab-tish, sirg'aluvehi, jarangsiz, sof undoshi Boysun shevasida f шр ga ko'chishi kuzatiladi.",
      misol: "пўта (белбог), po'ta, pöta"
    },
    {
      id: 15,
      kirill: "Г г",
      lotin: "G g",
      asos: "г",
      lotinYozuv: "G g", 
      yunikod: "0047/0067",
      izoh: "Til orqa, portlovchi, jarangli, sof undosh",
      misol: "галдир (довдир), galdir, gäldir"
    },
    {
      id: 16,
      kirill: "Х х",
      lotin: "H h",
      asos: "х",
      lotinYozuv: "H h",
      yunikod: "0048/0068",
      izoh: "Bo'giz, sirg'aluvehi, jarangsiz,sof undosh",
      misol: "хаворлamoq (тексилamoq), havorlavoq, havarlämaq"
    },
    {
      id: 17,
      kirill: "К к",
      lotin: "K k",
      asos: "к",
      lotinYozuv: "K k",
      yunikod: "004B/006B",
      izoh: "Til orqa, portlovchi, jarangsiz, sof undosh",
      misol: "кўмакай (тағи билан), ko'makay, kömakäj"
    },
    {
      id: 18,
      kirill: "Л л",
      lotin: "L l",
      asos: "л", 
      lotinYozuv: "L l",
      yunikod: "004C/006C",
      izoh: "Til oldi, sirg'aluvehi, jarangli, sof undош",
      misol: "силкинmoq, silkinmoq, lo'xčimaq"
    },
    {
      id: 19,
      kirill: "М м",
      lotin: "M m",
      asos: "м",
      lotinYozuv: "M m",
      yunikod: "004D/006D",
      izoh: "Lablangin, portlovchi, jarangli, sof undosh",
      misol: "Ўмган, o'mgan, ömgäk"
    },
    {
      id: 20,
      kirill: "Н н",
      lotin: "N n",
      asos: "н",
      lotinYozuv: "N n", 
      yunikod: "004E/006E",
      izoh: "Til oldi, portlovchi, jarangli, sof undosh",
      misol: "нop, nor, när"
    },
    {
      id: 21,
      kirill: "П п",
      lotin: "P p",
      asos: "п",
      lotinYozuv: "P p",
      yunikod: "0050/0070",
      izoh: "Lab-lab, portlovchi, jarangsiz, sof undosh",
      misol: "Шофёр, shofyor, šopir"
    },
    {
      id: 22,
      kirill: "Қ қ",
      lotin: "Q q",
      asos: "қ",
      lotinYozuv: "Q q",
      yunikod: "0051/0071", 
      izoh: "Chuqur til orqa, portlovchi, jarangsiz, sof undosh",
      misol: "тўсатдан, to'satdan, tujqus"
    },
    {
      id: 23,
      kirill: "Р р",
      lotin: "R r",
      asos: "р",
      lotinYozuv: "R r",
      yunikod: "0052/0072",
      izoh: "Til oldi, sirg'aluvehi, jarangli, ovo'zdor, sof undosh",
      misol: "рав (тўғри), rav, rav"
    },
    {
      id: 24,
      kirill: "С с",
      lotin: "S s",
      asos: "с",
      lotinYozuv: "S s", 
      yunikod: "0053/0073",
      izoh: "Til oldi, sirg'aluvehi, jarangsiz, sof undosh",
      misol: "сиғаламoq (мўраламoq), sig'alamoq, siyälamaq"
    },
    {
      id: 25,
      kirill: "Т т",
      lotin: "T t",
      asos: "т",
      lotinYozuv: "T t",
      yunikod: "0054/0074",
      izoh: "Til oldi, portlovchi, jarangsiz, sof undosh",
      misol: "Tайту (tapaнг), taytu, täjtu"
    },
    {
      id: 26,
      kirill: "В в",
      lotin: "V v",
      asos: "в",
      lotinYozuv: "V v",
      yunikod: "0056/0076", 
      izoh: "Lab-tish, sirg'aluvehi, jarangli, ovo'zdor, sof undosh",
      misol: "васса, vassa, vässä"
    },
    {
      id: 27,
      kirill: "Х х",
      lotin: "X x",
      asos: "х", 
      lotinYozuv: "X x",
      yunikod: "0058/0078",
      izoh: "Chuqur til orqa, sirg'aluvehi,",
      misol: "хасмол (тирноқ)"
    },
    {
      id: 28,
      kirill: "З з",
      lotin: "Z z",
      asos: "з",
      lotinYozuv: "Z z",
      yunikod: "005A/007A",
      izoh: "Til oldi, sirg'aluvehi, jarangsiz, sof undosh",
      misol: "зовур, zovur, zäbir"
    },
    {
      id: 29,
      kirill: "Ғ ғ",
      lotin: "G' g'",
      asos: "ғ",
      lotinYozuv: "γ γ", 
      yunikod: "03B3/03B3",
      izoh: "Chuqur til orqa, sirg'aluvehi, jarangli, sof undosh",
      misol: "daraxt, yog'och, jäyaė"
    },
    {
      id: 30,
      kirill: "Ш ш",
      lotin: "Sh sh",
      asos: "ш",
      lotinYozuv: "Š š",
      yunikod: "0160/0161",
      izoh: "Til oldi, sirg'aluvehi, jarangsiz, sof undosh",
      misol: "шўх, sho'x, šäläjim"
    },
    {
      id: 31,
      kirill: "Ч ч",
      lotin: "Ch ch",
      asos: "ч",
      lotinYozuv: "Č č", 
      yunikod: "010C/010D",
      izoh: "Til oldi, qorishiq, jarangsiz",
      misol: "чақимчи, chaqimchi, čüyülči"
    },
    {
      id: 32,
      kirill: "Й й",
      lotin: "Y y",
      asos: "й",
      lotinYozuv: "J j",
      yunikod: "004A/006A",
      izoh: "Til oldi, sirg'aluvehi, jarangli, sof undosh",
      misol: "Oтин oйи, otin oyi, ätinäji"
    },
    {
      id: 33,
      kirill: "Нг нг",
      lotin: "Ng ng",
      asos: "нг",
      lotinYozuv: "Ŋ ŋ",
      yunikod: "014A/014B", 
      izoh: "Til orqa, portlovchi, jarangli, sof undosh",
      misol: "мангла̄й, manglay, mäŋläj"
    },
    {
      id: 34,
      kirill: "Ж ж",
      lotin: "J j",
      asos: "ж",
      lotinYozuv: "Ž ž",
      yunikod: "017D/017E",
      izoh: "Til oldi, portlovchi, jarangli, sof undosh",
      misol: "югурдаk, yugurdak, žökkärči"
    },
    {
      id: 35,
      kirill: "",
      lotin: "",
      asos: "",
      lotinYozuv: "'",
      yunikod: "036E", 
      izoh: "diftong",
      misol: "'ön"
    },
    {
      id: 36,
      kirill: "",
      lotin: "",
      asos: "",
      lotinYozuv: "ˮ",
      yunikod: "0367",
      izoh: "diftong", 
      misol: "'o'rta"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Fonetik Transkripsiya Jadvali
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Surxondaryo shevalari uchun fonetik yozuv belgilari va ularning izohlari
          </p>
        </div>

        {/* Transcription Table */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-bold text-primary min-w-[50px]">T/r</th>
                <th className="text-left p-4 font-bold text-primary min-w-[100px]">Kirill Yozuv</th>
                <th className="text-left p-4 font-bold text-primary min-w-[100px]">Lotin Yozuv</th>
                <th className="text-left p-4 font-bold text-primary min-w-[100px]">Lotin yozuv asos</th>
                <th className="text-left p-4 font-bold text-primary min-w-[80px]">Yunikod</th>
                <th className="text-left p-4 font-bold text-primary min-w-[300px]">Izoh</th>
                <th className="text-left p-4 font-bold text-primary min-w-[200px]">Misol</th>
              </tr>
            </thead>
            <tbody>
              {transcriptionData.map((item, index) => (
                <tr key={item.id} className={`border-b border-border/50 hover:bg-muted/30 transition-colors ${index % 2 === 0 ? 'bg-muted/10' : ''}`}>
                  <td className="p-4 font-medium">{item.id}.</td>
                  <td className="p-4 font-mono text-lg">{item.kirill}</td>
                  <td className="p-4 font-mono text-lg">{item.lotin}</td>
                  <td className="p-4 font-mono text-lg text-primary font-bold">{item.lotinYozuv}</td>
                  <td className="p-4 font-mono text-xs text-muted-foreground">{item.yunikod}</td>
                  <td className="p-4 text-sm leading-relaxed">{item.izoh}</td>
                  <td className="p-4 font-mono text-sm text-primary">{item.misol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Belgilar va Qisqartmalar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><span className="font-mono font-bold">Kirill Yozuv</span> - Kirill alifbosidagi yozilishi</p>
              <p><span className="font-mono font-bold">Lotin Yozuv</span> - Lotin alifbosidagi yozilishi</p>
              <p><span className="font-mono font-bold">Lotin yozuv asos</span> - Fonetik transkripsiya belgisi</p>
            </div>
            <div>
              <p><span className="font-mono font-bold">Yunikod</span> - Unicode kodlari</p>
              <p><span className="font-bold">Izoh</span> - Tovushning fonetik xususiyatlari</p>
              <p><span className="font-bold">Misol</span> - Shevadagi ishlatilish namunalari</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}