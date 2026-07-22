import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/+994519537672";

const products = [
  { name: "Telefon Soyuducu Fan (Universal)", price: 25, img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Maşın Telefon Qoşucusu", price: 35, img: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Kablosuz Qulaqlıq (TWS)", price: 45, img: "https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Fast Charge Kablosu", price: 12, img: "https://images.pexels.com/photos/4526467/pexels-photo-4526467.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Telefon Qabı (Şok absorber)", price: 18, img: "https://images.pexels.com/photos/4059487/pexels-photo-4059487.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Power Bank 20000mAh", price: 55, img: "https://images.pexels.com/photos/4059662/pexels-photo-4059662.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

export default function FanPage() {
  const [cart, setCart] = useState({});
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const total = products.reduce((s, p, i) => s + (cart[i] || 0) * p.price, 0);

  const add = (i) => setCart((c) => ({ ...c, [i]: (c[i] || 0) + 1 }));
  const remove = (i) => setCart((c) => ({ ...c, [i]: Math.max(0, (c[i] || 0) - 1) }));

  const submit = () => {
    const chosen = products.map((p, i) => ({ ...p, n: cart[i] || 0 })).filter((p) => p.n > 0);
    if (!chosen.length || !contact) return;
    const msg = encodeURIComponent(
      `Mobil Aksesuar Sifariş\n\nAd: ${name || "-"}\nƏlaqə: ${contact}\n\n${chosen
        .map((p) => `${p.name} x${p.n} - ${(p.price * p.n).toFixed(2)} AZN`)
        .join("\n")}\n\nCəmi: ${total.toFixed(2)} AZN`
    );
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
    setDone(true);
  };

  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h1 className="text-2xl font-bold mb-3">Sifarişiniz qəbul edildi!</h1>
        <p className="text-white/50 mb-8">WhatsApp vasitəsilə əlaqə saxlanılacaq və ödəniş təlimatları veriləcək.</p>
        <Link to="/" className="inline-flex items-center gap-2 text-[#ffbf47] hover:text-[#ffd07a] font-medium">
          <ArrowLeft className="w-4 h-4" /> Ana səhifə
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Geri
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Telefon <span className="text-[#ffbf47]">FANLAR</span></h1>
        <p className="text-white/50">Mobil aksesuarlar və telefon fanları müxtəlif kategoriyalarda.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {products.map((p, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-[#1a1624]/40 overflow-hidden hover:border-white/20 transition-colors">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-2 leading-snug">{p.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-[#ffbf47] font-bold">{p.price} AZN</span>
                {cart[i] ? (
                  <div className="flex items-center gap-2">
                    <button onClick={() => remove(i)} className="w-7 h-7 rounded-lg border border-white/10 hover:border-[#ffbf47]/50 flex items-center justify-center transition-colors">−</button>
                    <span className="w-5 text-center text-sm">{cart[i]}</span>
                    <button onClick={() => add(i)} className="w-7 h-7 rounded-lg bg-[#ffbf47] hover:bg-[#ffd07a] text-black flex items-center justify-center transition-colors">+</button>
                  </div>
                ) : (
                  <button onClick={() => add(i)} className="text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#ffbf47]/50 hover:text-[#ffbf47] transition-colors">
                    Səbətə at
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <input
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Adınız (isteğe bağlı)"
          className="bg-[#1a1624]/40 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:border-[#ffbf47]/50 focus:outline-none transition-colors"
        />
        <input
          value={contact} onChange={(e) => setContact(e.target.value)}
          placeholder="WhatsApp nömrəniz *"
          className="bg-[#1a1624]/40 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:border-[#ffbf47]/50 focus:outline-none transition-colors"
        />
      </div>

      {total > 0 && (
        <div className="flex items-center justify-between mb-6 px-4 py-3 rounded-xl bg-[#ffbf47]/10 border border-[#ffbf47]/20">
          <span className="text-white/60 text-sm">Cəmi</span>
          <span className="text-xl font-bold text-[#ffbf47]">{total.toFixed(2)} AZN</span>
        </div>
      )}

      <button
        onClick={submit}
        disabled={total === 0 || !contact}
        className="w-full bg-[#ffbf47] hover:bg-[#ffd07a] disabled:opacity-30 disabled:cursor-not-allowed text-black font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
        <ShoppingCart className="w-4 h-4" />
        Seçilənləri Sifariş Et
      </button>
    </div>
  );
}