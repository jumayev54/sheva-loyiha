"use client"

export function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
            <div className="max-w-5xl mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Loyiha yo'riqnomasi
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Jarqo'rg'on shevalarining onlayn bazasi haqida to'liq ma'lumot va foydalanish yo'riqnomasi
                    </p>
                </div>

                {/* Main Description */}
                <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            <strong className="text-foreground">Jarqo'r'gon shevalarining onlayn bazasi</strong> – Jarqo'rg'on tumani hududida uchrovchi 
                            shevaga xos leksemalar, ularning turkumi, izohi, transkripsiyasi, transliteratsiyasi, misoli, inglizcha tarjimasi, 
                            shevaga xos so'z rasmi va audio shaklidan iborat.
                        </p>
                        <p>
                            Loyiha bosh sahifa, so'zlar jadvali, transkripsiya, aloqa va loyiha haqida bo'limlaridan iboratdir.
                        </p>
                        <p>
                            Bosh sahifada Jarqo'rg'on minorasi, qishloqlardan birining surati va o'tovning rasmi aks etgan. 
                            Bu shevaning hududini tadqiqotchilarga bir ko'rishdanoq aniqlashga yordam beradi.
                        </p>
                        <p>
                            Eng ko'p qidirilgan so'zlar bosh sahifa qismida aks etadi. Umumiy so'zlarni biz so'zlar jadvali 
                            bo'limidan topa olamiz. So'zlar jadvali qismida izlovchiga qulay bo'lishi uchun hamma leksemaning 
                            audiosi, ayrimlarining esa rasmlari kiritilgan.
                        </p>
                        <p>
                            Aloqa bo'limidan esa savol yo'llayotgan kishi o'zi qiziqtirgan savollarini yo'llashi mumkin.
                        </p>
                        <p>
                            Loyiha haqidagi bo'limda Jarqo'rg'on shevalarining bazasi haqida ma'lumot va yo'riqnomalar 
                            ko'rsatilgan. Saytning eng pastki qismida foydali havolalar, muallif maqolalari va aloqa 
                            singari ma'lumotlar berilgan.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}