import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/+994991937395";

const products = [
  { name: "65 Jeton", price: 1.8 },
  { name: "330 Jeton", price: 7.9 },
  { name: "660 Jeton", price: 15.5 },
  { name: "1321 Jeton", price: 29.9 },
  { name: "3303 Jeton", price: 69.9 },
  { name: "6607 Jeton", price: 139.9 }
];

export default function TiktokPage() {
  const [qty, setQty] = useState({});
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [done, setDone] = useState(false);

  const total = products.reduce((s, p, i) => s + (qty[i] || 0) * p.price, 0);

  const submit = () => {
    const chosen = products.map((p, i) => ({ ...p, n: qty[i] || 0 })).filter((p) => p.n > 0);
    if (!chosen.length || !contact) return;
    const msg = encodeURIComponent(
      `TikTok Jeton Sifariş\n\nAd: ${name || "-"}\nƏlaqə: ${contact}\n\n${chosen
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
        <p className="text-white/50 mb-8">Sifariş etdikdən sonra WhatsApp vasitəsilə əlaqə saxlanılacaq və ödəniş təlimatları veriləcək.</p>
        <Link to="/" className="inline-flex items-center gap-2 text-[#00a3ff] hover:text-[#00b8ff] font-medium">
          <ArrowLeft className="w-4 h-4" /> Ana səhifə
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Geri
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">TikTok <span className="text-pink-400">Jeton</span></h1>
        <p className="text-white/50">TikTok jetonlarını sürətli və təhlükəsiz şəkildə al.</p>
      </div>

      <div className="rounded-2xl border border-white/10 overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#1a1624]/60 text-white/50 text-left">
              <th className="p-4">Məhsul adı</th>
              <th className="p-4 text-right">Qiymət</th>
              <th className="p-4 text-center">Ədəd</th>
              <th className="p-4 text-right">Satın al</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-right text-white/70">{p.price.toFixed(2)} AZN</td>
                <td className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => setQty((q) => ({ ...q, [i]: Math.max(0, (q[i] || 0) - 1) }))}
                      className="w-7 h-7 rounded-lg border border-white/10 hover:border-pink-400/50 hover:text-pink-400 flex items-center justify-center transition-colors">−</button>
                    <span className="w-8 text-center">{qty[i] || 0}</span>
                    <button
                      onClick={() => setQty((q) => ({ ...q, [i]: (q[i] || 0) + 1 }))}
                      className="w-7 h-7 rounded-lg border border-white/10 hover:border-pink-400/50 hover:text-pink-400 flex items-center justify-center transition-colors">+</button>
                  </div>
                </td>
                <td className="p-4 text-right text-white/70">{((qty[i] || 0) * p.price).toFixed(2)} AZN</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <input
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Adınız (isteğe bağlı)"
          className="bg-[#1a1624]/40 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:border-pink-400/50 focus:outline-none transition-colors"
        />
        <input
          value={contact} onChange={(e) => setContact(e.target.value)}
          placeholder="WhatsApp nömrəniz *"
          className="bg-[#1a1624]/40 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:border-pink-400/50 focus:outline-none transition-colors"
        />
      </div>

      {total > 0 && (
        <div className="flex items-center justify-between mb-6 px-4 py-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
          <span className="text-white/60 text-sm">Cəmi</span>
          <span className="text-xl font-bold text-pink-400">{total.toFixed(2)} AZN</span>
        </div>
      )}

      <button
        onClick={submit}
        disabled={total === 0 || !contact}
        className="w-full bg-pink-500 hover:bg-pink-600 disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
        <ShoppingCart className="w-4 h-4" />
        Sifariş Et
      </button>

      <div className="mt-8 text-center text-white/40 text-sm">
        <p className="mb-2">Sifariş etdikdən sonra WhatsApp vasitəsilə əlaqə saxlanılacaq və ödəniş təlimatları veriləcək.</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300">
          <MessageCircle className="w-4 h-4" /> WhatsApp ilə əlaqə
        </a>
      </div>
    </div>
  );
}