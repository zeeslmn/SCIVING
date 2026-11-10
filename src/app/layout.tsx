import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCIVING - Platform Undangan Pernikahan Digital Elegan",
  description: "Solusi cerdas pembuatan website undangan pernikahan eksklusif dengan nama tamu personal, amplop digital, RSVP real-time, dan desain estetik dalam hitungan menit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen bg-[#faf8f5] text-[#2d2621]">
        {children}
      </body>
    </html>
  );
}

