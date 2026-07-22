import { Link } from "react-router-dom";
import { Zap, ShieldCheck, Headphones, ArrowRight, MessageCircle, Gamepad2 } from "lucide-react";

const WHATSAPP = "https://wa.me/+994519537672";

const games = [
  {
    title: "Pubg Mobile UC",
    desc: "PUBG Mobile UC dərhal yüklənir. Ən sərfəli qiymətlər.",
    img: "https://images.pexels.com/photos/7941819/pexels-photo-7941819.jpeg?auto=compress&cs=tinysrgb&w=800",
    to: "/pubg",
    accent: "from-[#00a3ff]/20 to-transparent",
    glow: "#00a3ff"
  },
  {
    title: "TikTok Jeton",
    desc: "TikTok jetonlarını sürətli və təhlükəsiz şəkildə al.",
    img: "https://images.pexels.com/photos/3166882/pexels-photo-3166882.jpeg?auto=compress&cs=tinysrgb&w=800",
    to: "/tiktok",
    accent: "from-pink-600/20 to-transparent",
    glow: "#ec4899"
  },
  {
    title: "Telefon FANLAR",
    desc: "Mobil aksesuarlar və telefon fanları müxtəlif kategoriyalarda.",
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
    to: "/fan",
    accent: "from-[#ffbf47]/20 to-transparent",
    glow: "#ffbf47"
  }
];

const features = [
  { icon: Zap, title: "Sürətli xidmət", desc: "Aldığınız məhsullar ən sürətli şəkildə sizə çatdırılır.", color: "text-[#00a3ff]" },
  { icon: ShieldCheck, title: "Təhlükəsizlik", desc: "Ödənişlərinizi ən təhlükəsiz üsullarla həyata keçiririk.", color: "text-[#ffbf47]" },
  { icon: Headphones, title: "7/24 Dəstək", desc: "Hər zaman sizinləyik. Sualınız yaranarsa əlaqə saxlayın.", color: "text-purple-400" }
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00a3ff]/10 border border-[#00a3ff]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00a3ff] animate-pulse" />
            <span className="text-sm text-[#4d6f8f] font-medium">Azərbaycanın №1 Oyun Ödəniş Platforması</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Sevimli oyunlarına{" "}
            <span className="text-[#00a3ff]">sürətlə</span>{" "}
            <span className="bg-gradient-to-r from-[#ffbf47] to-[#ff8c42] bg-clip-text text-transparent">ödəniş</span> et
          </h1>

          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            PUBG Mobile UC, TikTok Jeton və mobil aksesuarları ən sərfəli qiymətə, təhlükəsiz və dərhal al.
            <br />
            <span className="text-white/40">İş saatlarımız: 11:00 - 04:30</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/pubg"
              className="group bg-[#00a3ff] hover:bg-[#00b8ff] text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#00a3ff]/30 flex items-center gap-2">
              İndi Sifariş Et
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3.5 rounded-xl transition-all hover:bg-white/5 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp ilə əlaqə
            </a>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Oyunlar</h2>
            <p className="text-white/40">Sərfəli qiymətə, dərhal çatdırılma</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((g) => (
              <Link key={g.title} to={g.to}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1624]/40 hover:border-white/20 transition-all hover:-translate-y-1.5 hover:shadow-2xl"
                style={{ boxShadow: `0 0 0 0 ${g.glow}` }}>
                <div className={`absolute inset-0 bg-gradient-to-b ${g.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={g.img} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a080f] via-[#0a080f]/30 to-transparent" />
                </div>
                <div className="relative p-6">
                  <h3 className="text-xl font-bold mb-2">{g.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{g.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#00a3ff] font-medium text-sm group-hover:gap-2.5 transition-all">
                    Sifariş et <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/5 bg-[#1a1624]/40 p-7 text-center hover:border-white/10 transition-colors">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}