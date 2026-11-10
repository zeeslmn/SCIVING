export interface CoupleInfo {
  name: string;
  fullName: string;
  childOrder: string;
  fatherName: string;
  motherName: string;
  instagram?: string;
  photo: string;
}

export interface EventDetail {
  id: string;
  title: string; // e.g. "Akad Nikah" or "Pemberkatan"
  date: string; // ISO date string e.g. "2026-12-20"
  time: string; // e.g. "08.00 - 10.00 WIB"
  venueName: string;
  venueAddress: string;
  mapsUrl: string;
  calendarTitle: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrisImage?: string;
}

export interface PhysicalGiftAddress {
  recipientName: string;
  phoneNumber: string;
  fullAddress: string;
}

export interface WishMessage {
  id: string;
  name: string;
  relationship: string; // e.g. "Sahabat Mempelai", "Keluarga"
  message: string;
  attendance: "hadir" | "tidak_hadir" | "ragu";
  createdAt: string;
}

export interface GuestItem {
  id: string;
  name: string;
  phone?: string;
  category: "VIP" | "Keluarga" | "Teman" | "Rekan Kerja";
  status: "Belum Dikirim" | "Terkirim" | "Terkonfirmasi";
}

export interface InvitationData {
  id: string;
  slug: string;
  title: string;
  theme: "editorial" | "sealed-luxury" | "sekar-floral";
  musicUrl: string;
  musicTitle: string;
  quote: {
    verse: string;
    source: string;
  };
  groom: CoupleInfo;
  bride: CoupleInfo;
  events: EventDetail[];
  story: StoryMilestone[];
  gallery: {
    url: string;
    caption?: string;
  }[];
  streamingUrl?: string;
  bankAccounts: BankAccount[];
  physicalGift?: PhysicalGiftAddress;
  wishes: WishMessage[];
}

