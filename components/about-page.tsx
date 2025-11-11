"use client"

export function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
            <div className="max-w-5xl mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Surxondaryo Shevalari Lug'ati
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Jarqo'rg'on tumani xalq og'zaki nutqida ishlatiladigan dialekt so'zlar va iboralarni saqlovchi raqamli lug'at platformasi
                    </p>
                </div>

                {/* Main Description */}
                <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-6 text-primary">Loyiha Haqida</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <strong className="text-foreground">Surxondaryo Shevalari Lug'ati</strong> - bu O'zbekistonning Surxondaryo viloyati,
                            xususan Jarqo'rg'on tumani xalqining boy og'zaki nutq an'analarini saqlab qolish va kelajak avlodlarga
                            yetkazish maqsadida yaratilgan zamonaviy raqamli lug'at platformasidir.
                        </p>
                        <p>
                            Har bir mintaqa o'zining noyob dialekt xususiyatlariga ega. Jarqo'rg'on tumani shevalari o'zbek tilining
                            boy tarixiy qatlamlarini, mahalliy madaniyat va turmush tarzining o'ziga xos jihatlarini aks ettiradi.
                            Bu lug'at orqali biz ushbu boy tilshunoslik merosni ilmiy asosda to'plab, tizimlashtirdik va keng
                            jamoatchilikka taqdim etmoqdamiz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
