"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Gift, Copy, Check, QrCode, MapPin, X } from "lucide-react";
import { BankAccount, PhysicalGiftAddress } from "@/types/invitation";

interface DigitalEnvelopeProps {
  bankAccounts: BankAccount[];
  physicalGift?: PhysicalGiftAddress;
}

export const DigitalEnvelope: React.FC<DigitalEnvelopeProps> = ({
  bankAccounts,
  physicalGift,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeQris, setActiveQris] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="gift" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <div className="space-y-3 mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#ba9567] font-medium">
          TANDA KASIH
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
          Amplop Digital &amp; Kado
        </h2>
        <p className="text-xs sm:text-sm text-[#735e51] max-w-md mx-auto leading-relaxed">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih secara digital, Anda dapat melalui:
        </p>
      </div>

      {/* Bank Account Cards */}
      <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-8">
        {bankAccounts.map((bank) => (
          <div
            key={bank.id}
            className="p-6 rounded-2xl glass-card border border-[#ba9567]/35 shadow-sm text-left flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-lg text-[#3b2e25]">
                {bank.bankName}
              </span>
              <Gift className="w-5 h-5 text-[#ba9567]" />
            </div>

            <div>
              <p className="text-xs text-[#866342] font-medium">Nomor Rekening</p>
              <p className="font-mono text-base font-semibold text-[#3b2e25] tracking-wider mt-0.5">
                {bank.accountNumber}
              </p>
              <p className="text-xs text-[#735e51] mt-0.5">
                a.n. {bank.accountHolder}
              </p>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => handleCopy(bank.accountNumber, bank.id)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#ba9567] text-[#251e19] text-xs font-medium hover:bg-[#a67f53] transition shadow-xs"
              >
                {copiedId === bank.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-950" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Rekening</span>
                  </>
                )}
              </button>

              {bank.qrisImage && (
                <button
                  onClick={() => setActiveQris(bank.qrisImage!)}
                  className="py-2 px-3 rounded-xl border border-[#ba9567]/50 text-[#866342] hover:bg-[#ba9567]/10 text-xs font-medium transition"
                  title="Tampilkan QRIS"
                >
                  <QrCode className="w-4 h-4 text-[#ba9567]" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Physical Gift Mailing Option */}
      {physicalGift && (
        <div className="p-6 rounded-2xl glass-card border border-[#ba9567]/30 max-w-2xl mx-auto text-left space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#3b2e25]">
            <MapPin className="w-4 h-4 text-[#ba9567]" />
            <span>Kirim Kado Fisik</span>
          </div>
          <p className="text-xs text-[#735e51] leading-relaxed">
            {physicalGift.fullAddress}
          </p>
          <p className="text-xs text-[#866342]">
            Penerima: <strong className="text-[#3b2e25]">{physicalGift.recipientName}</strong> ({physicalGift.phoneNumber})
          </p>
          <button
            onClick={() => handleCopy(physicalGift.fullAddress, "physical-addr")}
            className="inline-flex items-center gap-1.5 text-xs text-[#ba9567] font-medium hover:underline pt-1"
          >
            {copiedId === "physical-addr" ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-700" />
                <span>Alamat Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Alamat Lengkap</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* QRIS Modal */}
      {activeQris && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveQris(null)}
        >
          <div
            className="relative bg-white p-6 rounded-2xl max-w-xs w-full text-center space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveQris(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full text-gray-500 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-lg font-semibold text-gray-800">
              Scan QRIS
            </h3>
            <div className="relative w-52 h-52 mx-auto border border-gray-200 rounded-xl overflow-hidden p-2">
              <Image
                src={activeQris}
                alt="QRIS Undangan"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-[11px] text-gray-500">
              Mendukung semua e-wallet (GoPay, OVO, ShopeePay, DANA) &amp; Mobile Banking.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

