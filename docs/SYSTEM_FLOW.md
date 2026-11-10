# Alur Sistem & Diagram Proses (System Flow Document)
## Project: SCIVING - Digital Wedding Invitation Platform

Dokumen ini mendokumentasikan seluruh diagram alur kerja (*system workflows*), diagram status (*state diagrams*), serta penanganan kondisi khusus (*edge cases*) pada platform **SCIVING**.

---

## 1. Alur Makro Sistem (High-Level System Lifecycle)

Alur operasional sistem menghubungkan tiga entitas utama: **Pengunjung Publik**, **Calon Mempelai (Kreator)**, dan **Tamu Undangan**.

```mermaid
flowchart TD
    Start([Mulai]) --> A[Pengunjung Mengakses Landing Page]
    A --> B{Aktivitas Pengunjung}
    B -->|Lihat Katalog| C[Eksplorasi Tema & Demo Undangan]
    B -->|Kelola Acara| D[Masuk ke Studio Pengantin /dashboard]

    subgraph StudioFlow [Alur Studio Pengantin]
        D --> E[Isi Data Mempelai, Acara, Galeri & Rekening]
        E --> F[Kelola Daftar Tamu Undangan]
        F --> G[Generate Link Personal ?to=Nama]
        G --> H[Kirim Undangan via WhatsApp 1-Klik]
    end

    subgraph GuestFlow [Alur Tamu Undangan]
        H --> I[Tamu Menerima Pesan & Link di WhatsApp]
        I --> J[Buka Undangan /invite/:slug?to=Nama]
        J --> K[Layar Cover: Sapaan Nama Personal]
        K --> L[Klik 'Buka Undangan' -> Audio Berputar]
        L --> M[Eksplorasi Acara, Peta, Galeri, Kisah Cinta]
        M --> N{Aksi Tamu}
        N -->|Kirim Hadiah| O[Salin No. Rekening / Scan QRIS]
        N -->|Konfirmasi Kehadiran| P[Kirim Form RSVP & Doa Restu]
    end

    P --> Q[Data RSVP & Doa Masuk ke Dashboard]
    Q --> R[Pengantin Memantau Rekap Kehadiran Real-time]
    R --> End([Selesai])
```

---

## 2. Alur Rinci per Modul (Detailed Module Flows)

### Flow 1: Alur Halaman Depan & Katalog Tema (Discovery Flow)

```mermaid
flowchart LR
    Landing[Halaman Depan /] --> Showcase[Showcase Tema]
    Showcase --> PreviewModal{Pilih Aksi}
    PreviewModal -->|Preview Tema| LiveDemo["Live Demo Undangan (/invite/raditya-dan-sekar)"]
    PreviewModal -->|Coba Sekarang| Dashboard["Dashboard Pengantin (/dashboard)"]
    LiveDemo --> BukaCover[Interaksi Demo Buka Cover]
```

* **Tujuan:** Mengonversi pengunjung umum menjadi pengguna aktif.
* **Titik Keputusan:** Pengunjung dapat mencoba demo undangan secara langsung dengan parameter simulasi nama tamu untuk merasakan sensasi penerima undangan.

---

### Flow 2: Alur Studio Pengantin & Manajemen Tamu (Creator Studio Flow)

```mermaid
sequenceDiagram
    autonumber
    actor Pengantin as Calon Mempelai
    participant Dash as Dashboard (/dashboard)
    participant Engine as Invitation Engine
    actor Tamu as Tamu Undangan

    Pengantin->>Dash: Input data tamu (Nama: 'Budi Santoso', Kategori: 'VIP', No: '08123...')
    Dash->>Dash: Validasi data & simpan ke daftar tamu
    Dash->>Dash: Format URL personalisasi (/invite/slug?to=Budi+Santoso)
    Dash->>Dash: Susun draf teks pesan sopan WhatsApp
    Pengantin->>Dash: Klik tombol 'Kirim WA'
    Dash->>Tamu: Membuka WhatsApp Web / Aplikasi dengan draf siap kirim
    Pengantin->>Tamu: Tekan Send di WhatsApp
```

---

### Flow 3: Siklus Hidup Halaman Undangan Tamu (Guest Viewer State Machine)

Halaman `/invite/[slug]` dikendalikan oleh mesin status (*state machine*) untuk memastikan kesesuaian kebijakan pemblokiran audio otomatis browser:

```mermaid
stateDiagram-v2
    [*] --> CoverLocked: Halaman Dimuat (URL ?to=Nama)
    
    state CoverLocked {
        [*] --> SapaanTamuTampil
        SapaanTamuTampil --> MenungguKlikBuka: Audio Siap (Muted)
    }

    CoverLocked --> InvitationOpen: Tamu Klik Tombol 'Buka Undangan'
    
    state InvitationOpen {
        [*] --> PlayAudio: Pemicu Gestur Pengguna Memulai Musik
        PlayAudio --> RenderKontenUtama: Animasi Cover Slide-Up
        RenderKontenUtama --> FloatingNavActive: Bottom Dock & Music Disc Muncul
    }

    InvitationOpen --> SubmittingRSVP: Tamu Mengisi Form RSVP
    SubmittingRSVP --> ConfettiSuccess: Validasi Lolos -> Ledakan Konfeti
    ConfettiSuccess --> AppendWishesFeed: Pesan Ditambahkan ke Buku Doa
```

---

### Flow 4: Alur Amplop Digital & Hadiah Cashless

```mermaid
flowchart TD
    A[Seksi Tanda Kasih & Kado] --> B{Pilihan Tamu}
    
    B -->|Transfer Bank| C[Pilih Kartu Rekening: BCA / Mandiri]
    C --> D[Klik 'Salin Rekening']
    D --> E[Teks Tersalin ke Clipboard]
    E --> F[Feedback Visual: 'Tersalin!' selama 2.5 detik]
    
    B -->|Scan QRIS| G[Klik Ikon Barcode QRIS]
    G --> H[Modal Pop-up QRIS Muncul di Layar]
    H --> I[Tamu Scan via E-Wallet / Mobile Banking]
    I --> J[Tutup Modal]
    
    B -->|Kirim Kado Fisik| K[Lihat Alamat Pengiriman Parcel]
    K --> L[Klik 'Salin Alamat Lengkap']
    L --> E
```

---

### Flow 5: Alur Konfirmasi Kehadiran (RSVP) & Moderasi Pesan

```mermaid
flowchart TD
    FormStart[Tamu Berada di Seksi RSVP] --> InputData[Isi Nama, Hubungan, Kehadiran, Jumlah Tamu, Pesan]
    InputData --> Validate{Validasi Input?}
    
    Validate -->|Nama atau Pesan Kosong| ShowError[Tampilkan Peringatan Wajib Diisi]
    ShowError --> InputData
    
    Validate -->|Valid| TriggerConfetti[Ledakan Animasi Konfeti Canvas]
    TriggerConfetti --> CreateWishObject[Buat Objek Ucapan Baru: id, waktu, attendance]
    CreateWishObject --> PrependList[Sisipkan ke Posisi Teratas Daftar Doa]
    PrependList --> ShowSuccess[Tampilkan Kartu 'Terima Kasih Banyak!']
    ShowSuccess --> UpdateStats[Perbarui Statistik Total Tamu Hadir di Dashboard]
```

---

## 3. Penanganan Kondisi Khusus (Edge Cases & Fallback Matrix)

| Skenario (*Edge Case*) | Dampak Potensial | Mekanisme Penanganan Otomatis (*Fallback*) |
| :--- | :--- | :--- |
| **Parameter `?to=` tidak ada di URL** | Cover akan menampilkan teks kosong atau rusak. | Otomatis menampilkan teks *fallback* sopan: `"Bapak/Ibu/Saudara/i"` di cover undangan. |
| **Kebijakan Autoplay Browser Sangat Ketat (iOS)** | Audio gagal berputar saat tombol Buka diklik. | *Promise catch* menangani error tanpa menghentikan animasi pembuka; tombol mengambang *Music Controller* tetap tersedia agar tamu dapat menekan *Play* secara manual. |
| **Tamu Mengakses via Browser Desktop Lebar** | Tampilan mobile bisa terlihat terlalu renggang (*stretched*). | Tata letak menggunakan *container max-w-xl* dan *max-w-4xl* terpusat (*auto margins*) dengan latar bergradasi elegan, menjaga proporsi visual tetap premium. |
| **Koneksi Internet Tamu Lambat** | Foto galeri berat membutuhkan waktu muat lama. | Komponen `Next/Image` menerapkan *lazy loading*, format WebP otomatis, dan rasio dimensi terreservasi untuk mencegah lonjakan pergeseran tata letak (*Cumulative Layout Shift / CLS*). |
| **Nomor WhatsApp Tamu Mengandung Karakter Non-Angka** | Tautan `wa.me` rusak jika ada spasi, strip, atau tanda plus. | Sistem menerapkan pembersihan regex otomatis: `.replace(/[^0-9]/g, "")` sebelum dimasukkan ke dalam skema URL WhatsApp. |
