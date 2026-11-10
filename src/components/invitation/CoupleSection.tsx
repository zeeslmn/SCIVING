import React from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { InvitationData } from "@/types/invitation";

interface CoupleSectionProps {
  data: InvitationData;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ data }) => {
  return (
    <section id="couple" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <div className="space-y-3 mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-[#ba9567] font-medium">
          MEMPELAI
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
          Dua Insan yang Berbahagia
        </h2>
        <p className="text-xs sm:text-sm text-[#735e51] max-w-md mx-auto leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan kami:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 sm:gap-8 items-center max-w-3xl mx-auto">
        {/* Groom */}
        <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl glass-card border border-[#ba9567]/30 shadow-sm transition hover:shadow-md">
          <div className="relative w-44 h-52 sm:w-52 sm:h-64 rounded-full overflow-hidden border-4 border-[#ba9567]/40 shadow-inner">
            <Image
              src={data.groom.photo}
              alt={data.groom.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-[#3b2e25] font-medium">
              {data.groom.fullName}
            </h3>
            <p className="text-xs text-[#866342] font-light">
              {data.groom.childOrder}
            </p>
            <p className="text-xs font-medium text-[#4a3b32]">
              {data.groom.fatherName} &amp; {data.groom.motherName}
            </p>
          </div>
          {data.groom.instagram && (
            <a
              href={`https://instagram.com/${data.groom.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#ba9567] hover:text-[#866342] transition pt-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{data.groom.instagram}</span>
            </a>
          )}
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl glass-card border border-[#ba9567]/30 shadow-sm transition hover:shadow-md">
          <div className="relative w-44 h-52 sm:w-52 sm:h-64 rounded-full overflow-hidden border-4 border-[#ba9567]/40 shadow-inner">
            <Image
              src={data.bride.photo}
              alt={data.bride.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl text-[#3b2e25] font-medium">
              {data.bride.fullName}
            </h3>
            <p className="text-xs text-[#866342] font-light">
              {data.bride.childOrder}
            </p>
            <p className="text-xs font-medium text-[#4a3b32]">
              {data.bride.fatherName} &amp; {data.bride.motherName}
            </p>
          </div>
          {data.bride.instagram && (
            <a
              href={`https://instagram.com/${data.bride.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#ba9567] hover:text-[#866342] transition pt-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{data.bride.instagram}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

