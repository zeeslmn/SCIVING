import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  MailOpen,
  Smartphone,
  Gift,
  CheckCircle2,
  Share2,
  Calendar,
  Music,
  ArrowRight,
  Eye,
  Sliders,
  ShieldCheck,
  Star,
  Instagram,
  Mail,
} from "lucide-react";

export default function LandingPage() {
  const sampleSlug = "raditya-dan-sekar";

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d2621]">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/85 backdrop-blur-md border-b border-[#decbb1]/50 px-4 sm:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#3b2e25]">
              SCIVING<span className="text-[#ba9567]">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#735e51]">
            <a href="#fitur" className="hover:text-[#ba9567] transition">Fitur Unggulan</a>
            <a href="#tema" className="hover:text-[#ba9567] transition">Pilihan Desain</a>
            <a href="#harga" className="hover:text-[#ba9567] transition">Biaya</a>
            <a href="#faq" className="hover:text-[#ba9567] transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-xs font-semibold px-4 py-2 rounded-full border border-[#ba9567]/60 text-[#5a4331] hover:bg-[#ba9567]/10 transition"
            >
              Dashboard Pengantin
            </Link>
            <Link
              href={`/invite/${sampleSlug}?to=Keluarga+Besar`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#ba9567] text-[#251e19] hover:bg-[#cfad80] transition shadow-xs"
            >
              <span>Demo Undangan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ba9567]/15 border border-[#ba9567]/30 text-[#866342] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#ba9567]" />
            <span>Platform Undangan Pernikahan Digital Masa Kini</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#3b2e25] font-normal tracking-tight leading-tight">
            Bagikan Kabar Bahagia dengan <br />
            <span className="italic font-medium text-[#ba9567]">Sentuhan Eksklusif &amp; Personal</span>
          </h1>

          <p className="text-sm sm:text-base text-[#735e51] max-w-2xl mx-auto leading-relaxed">
            Buat website undangan pernikahan elegan dalam hitungan menit. Lengkap dengan sapaan nama tamu personal, konfirmasi RSVP real-time, amplop digital QRIS, dan pemutar musik otomatis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <Link
              href={`/invite/${sampleSlug}?to=Bpk.+Pratama+dan+Keluarga`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#ba9567] text-[#251e19] text-sm font-semibold shadow-lg hover:shadow-[#ba9567]/25 hover:bg-[#cfad80] transition"
            >
              <Eye className="w-4 h-4" />
              <span>Lihat Contoh Undangan Jadi</span>
            </Link>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#decbb1] text-[#4a3b32] text-sm font-semibold hover:bg-stone-50 transition shadow-xs"
            >
              <Sliders className="w-4 h-4 text-[#ba9567]" />
              <span>Coba Dashboard Pembuat</span>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-8 flex items-center justify-center gap-6 text-xs text-[#866342]">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#ba9567] text-[#ba9567]" />
              <Star className="w-3.5 h-3.5 fill-[#ba9567] text-[#ba9567]" />
              <Star className="w-3.5 h-3.5 fill-[#ba9567] text-[#ba9567]" />
              <Star className="w-3.5 h-3.5 fill-[#ba9567] text-[#ba9567]" />
              <Star className="w-3.5 h-3.5 fill-[#ba9567] text-[#ba9567]" />
              <span className="font-semibold text-[#3b2e25] ml-1">4.9 / 5.0</span>
            </div>
            <span>•</span>
            <span>100% Responsif di Semua HP</span>
            <span>•</span>
            <span>Tanpa Batasan Tamu</span>
          </div>
        </div>

        {/* Mockup Preview Card */}
        <div className="mt-14 max-w-3xl mx-auto relative">
          <div className="p-3 sm:p-5 rounded-3xl bg-white border border-[#decbb1]/80 shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop"
                alt="Contoh Undangan Pernikahan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#decbb1]">Tema Pilihan: Sealed Luxury</span>
                <h3 className="font-serif text-xl sm:text-3xl font-medium mt-1">Raditya &amp; Sekar</h3>
                <p className="text-xs text-stone-300 mt-0.5">Dilengkapi amplop buka interaktif, countdown, peta &amp; doa online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="fitur" className="py-20 px-4 sm:px-8 bg-white border-y border-[#decbb1]/40">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs tracking-[0.25em] uppercase text-[#ba9567] font-semibold">
              FITUR LENGKAP
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
              Segala yang Anda Butuhkan untuk Momen Istimewa
            </h2>
            <p className="text-xs sm:text-sm text-[#735e51] max-w-lg mx-auto">
              Dirancang khusus untuk memudahkan calon mempelai dan memanjakan para tamu undangan.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Share2,
                title: "Personalisasi Nama Tamu",
                desc: "Setiap tautan memiliki nama tamu masing-masing. Tamu merasa sangat dihargai saat membuka undangan.",
              },
              {
                icon: Gift,
                title: "Amplop Digital & QRIS",
                desc: "Kemudahan bagi kerabat untuk mengirimkan tanda kasih langsung ke rekening bank atau QRIS hanya dengan 1 klik salin.",
              },
              {
                icon: CheckCircle2,
                title: "RSVP & Rekap Kehadiran",
                desc: "Tamu mengonfirmasi kehadiran langsung di web. Pantau perkiraan jumlah katering secara akurat dari dashboard.",
              },
              {
                icon: Music,
                title: "Musik Latar Favorit",
                desc: "Putar lagu kenangan berdua secara otomatis saat tamu menekan tombol buka undangan.",
              },
              {
                icon: Calendar,
                title: "Petunjuk Arah & Kalender",
                desc: "Tamu tidak akan tersesat dengan integrasi langsung Google Maps dan tombol simpan jadwal ke Google Calendar.",
              },
              {
                icon: Smartphone,
                title: "Buku Tamu & Ucapan",
                desc: "Wadah interaktif bagi keluarga dan sahabat untuk meninggalkan doa restu tulus yang tersimpan abadi.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#faf8f5] border border-[#decbb1]/60 hover:border-[#ba9567] hover:shadow-md transition duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#ba9567]/15 flex items-center justify-center text-[#ba9567]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#3b2e25]">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#735e51] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Template Showcase */}
      <section id="tema" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="text-xs tracking-[0.25em] uppercase text-[#ba9567] font-semibold">
            KOLEKSI TEMA
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
            Desain Elegan yang Memikat
          </h2>
          <p className="text-xs sm:text-sm text-[#735e51] max-w-md mx-auto">
            Pilih gaya desain yang paling mencerminkan karakter pernikahan impian Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sealed Luxury",
              tag: "Paling Populer",
              img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
              desc: "Cover segel lilin klasik dengan nuansa champagne gold yang mewah.",
            },
            {
              name: "Editorial Vogue",
              tag: "Modern & Minimalis",
              img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
              desc: "Tipografi modern ala majalah fashion dengan layout bersih dan berani.",
            },
            {
              name: "Sekar Floral",
              tag: "Romantis",
              img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop",
              desc: "Sentuhan bunga pastel lembut yang memberikan keteduhan dan kehangatan.",
            },
          ].map((theme, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white border border-[#decbb1]/70 overflow-hidden shadow-xs hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={theme.img}
                    alt={theme.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium tracking-wide">
                    {theme.tag}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-xl font-semibold text-[#3b2e25]">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-[#735e51] leading-relaxed">
                    {theme.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/invite/${sampleSlug}?to=Nama+Tamu`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-[#ba9567] text-[#866342] text-xs font-semibold hover:bg-[#ba9567] hover:text-[#251e19] transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Preview Tema</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-20 px-4 sm:px-8 bg-white border-t border-[#decbb1]/40">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.25em] uppercase text-[#ba9567] font-semibold">
              HARGA TRANSPARAN
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
              Satu Harga, Akses Penuh Selamanya
            </h2>
            <p className="text-xs sm:text-sm text-[#735e51]">
              Tanpa biaya langganan bulanan tersembunyi.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl glass-card border-2 border-[#ba9567] shadow-xl text-center space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-[#ba9567] text-[#251e19] text-xs font-bold uppercase tracking-wider">
              Paket Eksklusif
            </span>

            <div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm font-semibold text-[#866342]">Rp</span>
                <span className="font-serif text-5xl font-bold text-[#3b2e25]">99.000</span>
              </div>
              <p className="text-xs text-stone-500 mt-1">Sekali bayar untuk 1 website undangan aktif</p>
            </div>

            <ul className="text-left text-xs space-y-3 py-4 border-y border-[#decbb1]/60 text-[#5a4331]">
              {[
                "Bebas sebar ke jumlah tamu tanpa batas",
                "Fitur Nama Tamu Personal (?to=Nama)",
                "Generator pesan broadcast WhatsApp otomatis",
                "Amplop digital & QRIS instan",
                "RSVP online & live wishes counter",
                "Pemutar lagu romantis latar",
                "Masa aktif undangan 1 tahun",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ba9567] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/dashboard"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#ba9567] text-[#251e19] text-sm font-semibold hover:bg-[#cfad80] transition shadow-md"
            >
              <span>Mulai Buat Undangan Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 px-4 sm:px-8 border-t border-[#decbb1]/60 text-center space-y-6 bg-white/60">
        <div className="max-w-4xl mx-auto space-y-3">
          <Link href="/" className="font-serif text-3xl font-bold text-[#3b2e25]">
            SCIVING<span className="text-[#ba9567]">.</span>
          </Link>
          <p className="text-xs text-[#866342] max-w-md mx-auto">
            Platform pembuatan website undangan digital elegan dan eksklusif. Solusi cerdas membagikan momen bahagia kepada seluruh kerabat.
          </p>
        </div>

        {/* Contact Person Box */}
        <div className="max-w-lg mx-auto p-5 rounded-2xl glass-card border border-[#ba9567]/40 shadow-xs space-y-3 text-left">
          <p className="text-[11px] font-semibold text-[#866342] uppercase tracking-wider text-center">
            Hubungi Kami / Customer Support
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs pt-1">
            <a
              href="https://instagram.com/Solusicerdasinfratech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-[#decbb1]/60 text-[#3b2e25] hover:text-[#ba9567] hover:border-[#ba9567] transition shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center text-white shrink-0">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[10px] text-stone-500 font-medium">Instagram</p>
                <p className="font-semibold text-[11px] truncate">@Solusicerdasinfratech</p>
              </div>
            </a>

            <a
              href="mailto:SolusicerdasInfrastructureTechnology@gmail.com"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/80 border border-[#decbb1]/60 text-[#3b2e25] hover:text-[#ba9567] hover:border-[#ba9567] transition shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-rose-600 flex items-center justify-center text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[10px] text-stone-500 font-medium">Email Support</p>
                <p className="font-semibold text-[11px] truncate">SolusicerdasInfrastructureTechnology@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <p className="text-[11px] text-stone-400 pt-2">
          &copy; 2026 SCIVING (Solusi Cerdas Infratech). Seluruh hak cipta dilindungi.
        </p>
      </footer>
    </div>
  );
}

