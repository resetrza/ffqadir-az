import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/+994506758477";

const products = [
  { name: "60 UC", price: 1.5 },
  { name: "325 UC", price: 6.9 },
  { name: "660 UC", price: 13.5 },
  { name: "1800 UC", price: 34.9 },
  { name: "3850 UC", price: 69.9 },
  { name: "8100 UC", price: 139.9 },
  { name: "16200 UC", price: 269.9 },
  { name: "Royal Pass", price: 9.9 },
  { name: "RP Elite Bundle", price: 24.9 }
];

export default function PubgPage() {
  const [selected, setSelected] = useState({});
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [done, setDone] = useState(false);

  const total = useMemo(
    () => products.reduce((s, p, i) => s + (selected[i] ? p.price : 0), 0),
    [selected]
  );

  const toggle = (i) =>
    setSelected((s) => ({ ...s, [i]: !s[i] }));

  const submit = () => {
    const chosen = products.filter((_, i) => selected[i]);
    if (!chosen.length || !contact) return;
    const msg = encodeURIComponent(
      `PUBG Mobile UC Sifariş\n\nAd: ${name || "-"}\nƏlaqə: ${contact}\n\n${chosen
        .map((p) => `${p.name} - ${p.price} AZN`)
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
        <h1 className="text-3xl font-bold mb-2">
          PUBG Mobile <span className="text-[#00a3ff]">UC</span>
        </h1>
        <p className="text-white/50">UC dərhal yüklənir. Sərfəli qiymət, sürətli çatdırılma.</p>
      </div>

      <div className="rounded-2xl border border-white/10 overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#1a1624]/60 text-white/50 text-left">
              <th className="p-4 w-12">Seç</th>
              <th className="p-4">Məhsul Adı</th>
              <th className="p-4 text-right">Qiymət (AZN)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer"
                onClick={() => toggle(i)}>
                <td className="p-4">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${selected[i] ? "bg-[#00a3ff] border-[#00a3ff]" : "border-white/20"}`}>
                    {selected[i] && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                </td>
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-right text-white/70">{p.price.toFixed(2)} AZN</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <input
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Adınız (isteğe bağlı)"
          className="bg-[#1a1624]/40 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:border-[#00a3ff]/50 focus:outline-none transition-colors"
        />
        <input
          value={contact} onChange={(e) => setContact(e.target.value)}
          placeholder="WhatsApp nömrəniz *"
          className="bg-[#1a1624]/40 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:border-[#00a3ff]/50 focus:outline-none transition-colors"
        />
      </div>

      {total > 0 && (
        <div className="flex items-center justify-between mb-6 px-4 py-3 rounded-xl bg-[#00a3ff]/10 border border-[#00a3ff]/20">
          <span className="text-white/60 text-sm">Cəmi</span>
          <span className="text-xl font-bold text-[#00a3ff]">{total.toFixed(2)} AZN</span>
        </div>
      )}

      <button
        onClick={submit}
        disabled={!Object.values(selected).some(Boolean) || !contact}
        className="w-full bg-[#00a3ff] hover:bg-[#00b8ff] disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
        <ShoppingCart className="w-4 h-4" />
        Seçilənləri Sifariş Et
      </button>

      <p className="text-white/30 text-xs mt-6 leading-relaxed">
        3-cü şəxslərdən, oğurluq pullar atılarsa dövlət qanunvericiliyinə uyğun olaraq məsuliyyətə cəlb olunacaqsınız.
        16 yaşdan aşağı şəxslərin ödənişlərinə icazə yoxdur.
      </p>

      <div className="mt-8 text-center text-white/40 text-sm">
        <p className="mb-2">İş saatımız 11:00 - 04:30</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#00a3ff] hover:text-[#00b8ff]">
          <MessageCircle className="w-4 h-4" /> WhatsApp ilə əlaqə
        </a>
      </div>
    </div>
  );
}