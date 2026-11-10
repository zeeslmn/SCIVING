import { InvitationData } from "@/types/invitation";

export const initialInvitationData: InvitationData = {
  id: "inv-001",
  slug: "raditya-dan-sekar",
  title: "The Wedding of Raditya & Sekar",
  theme: "sealed-luxury",
  musicUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-piano-113576.mp3",
  musicTitle: "Romantic Piano - A Thousand Years Melody",
  quote: {
    verse: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
  },
  groom: {
    name: "Raditya",
    fullName: "Raditya Pratama, S.T.",
    childOrder: "Putra pertama dari",
    fatherName: "Bpk. Bambang Wijaya",
    motherName: "Ibu Sri Rahayu",
    instagram: "radityapratama",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  bride: {
    name: "Sekar",
    fullName: "Sekar Ayu Larasati, S.Ds.",
    childOrder: "Putri bungsu dari",
    fatherName: "Bpk. Hendra Gunawan",
    motherName: "Ibu Dewi Anggraini",
    instagram: "sekayularasati",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  events: [
    {
      id: "event-1",
      title: "Akad Nikah",
      date: "2026-12-20",
      time: "08.00 - 10.00 WIB",
      venueName: "Masjid Raya Al-Insan",
      venueAddress: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan",
      mapsUrl: "https://maps.google.com/?q=Jakarta",
      calendarTitle: "Akad Nikah Raditya & Sekar",
    },
    {
      id: "event-2",
      title: "Resepsi Pernikahan",
      date: "2026-12-20",
      time: "11.30 - 14.30 WIB",
      venueName: "The Glass House Garden Hall",
      venueAddress: "Jl. Wijaya Timur I No. 18, Kebayoran Baru, Jakarta Selatan",
      mapsUrl: "https://maps.google.com/?q=Jakarta",
      calendarTitle: "Resepsi Pernikahan Raditya & Sekar",
    },
  ],
  story: [
    {
      year: "2019",
      title: "Pertemuan Pertama",
      description: "Takdir mempertemukan kami di sebuah workshop desain di Bandung. Dari percakapan singkat tentang seni, terjalin kehangatan yang tak disangka.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2022",
      title: "Memulai Komitmen",
      description: "Setelah bertahun-tahun saling mendukung impian masing-masing, kami memutuskan untuk melangkah bersama dalam ikatan yang lebih serius.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop",
    },
    {
      year: "2025",
      title: "Lamaran & Menuju Babak Baru",
      description: "Di hadapan keluarga tercinta, kami mengikat janji suci dan memohon restu untuk melangkah menuju pelaminan.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    },
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
      caption: "Momen kehangatan di awal musim semi",
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      caption: "Senyuman yang selalu menenangkan",
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop",
      caption: "Langkah bersama menuju masa depan",
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      caption: "Genggaman tangan yang takkan terlepas",
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
      caption: "Janji suci di bawah langit teduh",
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
      caption: "Cinta yang terus tumbuh setiap hari",
    },
  ],
  streamingUrl: "https://youtube.com/live",
  bankAccounts: [
    {
      id: "bank-1",
      bankName: "BCA",
      accountNumber: "8415291033",
      accountHolder: "Raditya Pratama",
      qrisImage: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=00020101021126570011ID.WEDA.WWW01189360000201100000005204581253033605802ID5915RADITYA+PRATAMA6007JAKARTA6304ABCD",
    },
    {
      id: "bank-2",
      bankName: "Bank Mandiri",
      accountNumber: "1370019284712",
      accountHolder: "Sekar Ayu Larasati",
    },
  ],
  physicalGift: {
    recipientName: "Sekar & Raditya",
    phoneNumber: "0812-3456-7890",
    fullAddress: "Apartemen Senopati Suites Tower 2 Unit 15B, Jl. Senopati No. 41, Jakarta Selatan 12190",
  },
  wishes: [
    {
      id: "wish-1",
      name: "Dimas Anggara & Istri",
      relationship: "Sahabat Kuliah",
      message: "Selamat ya Radit & Sekar! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Lancar sampai hari H!",
      attendance: "hadir",
      createdAt: "10 menit yang lalu",
    },
    {
      id: "wish-2",
      name: "Tante Rina & Om Agus",
      relationship: "Keluarga Besar Gunawan",
      message: "Barakallah Sekar sayang. Doa terbaik dari kami sekeluarga di Surabaya. Semoga bahagia selalu mengiringi langkah kalian berdua.",
      attendance: "hadir",
      createdAt: "1 jam yang lalu",
    },
    {
      id: "wish-3",
      name: "Anissa Putri",
      relationship: "Rekan Kantor Sekar",
      message: "Congratulation Sekar & Raditya! Maaf banget belum bisa hadir langsung karena masih dinas luar kota, tapi doa tulus selalu untuk kalian berdua ya!",
      attendance: "tidak_hadir",
      createdAt: "3 jam yang lalu",
    },
  ],
};

