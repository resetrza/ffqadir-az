import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Outlet } from "react-router-dom";

const WHATSAPP = "https://wa.me/+994519537672";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-[#0a080f] text-white flex flex-col relative overflow-hidden">
      {/* gradient glow background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#00a3ff]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ffbf47]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b border-white/5 backdrop-blur-sm bg-[#0a080f]/60 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00a3ff] to-[#0077cc] flex items-center justify-center shadow-lg shadow-[#00a3ff]/20 group-hover:scale-105 transition-transform">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">FFQADIR.AZ</span>
            </Link>

            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/70">
              <Link to="/" className="hover:text-white transition-colors">OYUNLAR</Link>
              <Link to="/#about" className="hover:text-white transition-colors">HAQQIMIZDA</Link>
              <Link to="/#contact" className="hover:text-white transition-colors">ƏLAQƏ</Link>
              <Link to="/#help" className="hover:text-white transition-colors">KÖMƏK</Link>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3 text-white/50">
                <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                <MessageCircle className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              </div>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="bg-[#00a3ff] hover:bg-[#00b8ff] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Sifariş Et
              </a>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00a3ff] to-[#0077cc] flex items-center justify-center">
                <Gamepad2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span>© 2025 FFQADIR.AZ — Bütün hüquqlar qorunur</span>
            </div>
            <div className="flex items-center gap-5">
              <Link to="/#about" className="hover:text-white transition-colors">Haqqımızda</Link>
              <Link to="/#help" className="hover:text-white transition-colors">Kömək</Link>
              <Link to="/#contact" className="hover:text-white transition-colors">Əlaqə</Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp */}
      


      
    </div>);

}