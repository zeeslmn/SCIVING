# Architecture Decision Records (ADR)
## Project: Vowly - Digital Wedding Invitation Platform

---

### ADR-001: Pemilihan Next.js 14 App Router untuk Engine Undangan
- **Status:** Diterima (*Accepted*)
- **Konteks:** Undangan digital disebarkan melalui tautan WhatsApp, di mana pratinjau tautan (*Open Graph link preview: gambar thumbnail, judul, dan deskripsi*) sangat krusial bagi impresi pertama tamu. Jika menggunakan arsitektur Client-Side Rendering (CSR murni seperti Create React App atau Vite SPA biasa), bot WhatsApp tidak dapat mengeksekusi JavaScript untuk membaca meta tag dinamis per pasangan.
- **Keputusan:** Menggunakan Next.js 14 dengan App Router dan Server Components.
- **Konsekuensi:**
  - *Positif:* Bot WhatsApp dan Facebook dapat langsung membaca tag Open Graph dinamis secara instan. Waktu muat awal (*Initial Page Load*) sangat kencang karena HTML awal sudah terkompilasi dari server.
  - *Negatif:* Memerlukan lingkungan runtime Node.js atau Edge runtime saat deployment (dapat di-host secara efisien di Vercel, Netlify, atau Cloudflare Pages).

---

### ADR-002: Mekanisme Personalisasi Nama Tamu via Parameter URL (`?to=...`)
- **Status:** Diterima (*Accepted*)
- **Konteks:** Pasangan pengantin sering kali ingin mengundang ratusan hingga ribuan tamu dengan nama masing-masing di cover undangan tanpa harus membuat ratusan halaman statis terpisah di database.
- **Keputusan:** Menggunakan parameter query URL dinamis: `https://domain.com/invite/slug?to=Nama+Tamu`.
- **Konsekuensi:**
  - *Positif:* Skalabilitas tak terbatas. Satu halaman undangan dapat melayani ribuan nama tamu berbeda secara instan tanpa menambah beban *row database* atau proses rendering ulang server. Pasangan bisa menambah tamu secara spontan tanpa menunggu sinkronisasi database.
  - *Negatif:* Jika parameter diubah manual oleh tamu di browser URL, nama di cover akan berubah sesuai input URL tersebut. Hal ini dapat diatasi dengan verifikasi token opsional di masa mendatang jika dibutuhkan privasi lebih ketat.

---

### ADR-003: Solusi Audio Autoplay Sesuai Kebijakan Browser Modern
- **Status:** Diterima (*Accepted*)
- **Konteks:** Sebagian besar browser modern (Chrome, Safari iOS, Android WebView) memblokir pemutaran audio otomatis (*autoplay audio*) tanpa adanya interaksi gestur pengguna sebelumnya (*user gesture*) untuk mencegah pengalaman pengguna yang mengganggu.
- **Keputusan:** Mengimplementasikan konsep **"Cover Buka Undangan" (Envelope Unseal Screen)**. Halaman undangan dimulai dalam keadaan cover tertutup. Saat tamu menekan tombol *"Buka Undangan"*, interaksi klik tersebut secara resmi memenuhi syarat gestur pengguna browser, sehingga `audio.play()` dapat dipicu seketika secara sah dan mulus tanpa diblokir oleh browser.
- **Konsekuensi:**
  - *Positif:* Menghadirkan tingkat keberhasilan pemutaran musik 100% di semua perangkat iOS dan Android, sekaligus memberikan efek dramatis dan personal yang elegan kepada tamu.
  - *Negatif:* Tamu harus melakukan satu klik awal untuk melihat isi undangan. Namun dalam tradisi undangan Indonesia, membuka amplop adalah ritual wajar yang justru dinilai sopan dan menarik.

