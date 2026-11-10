"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface GallerySectionProps {
  gallery: {
    url: string;
    caption?: string;
  }[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    caption?: string;
  } | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <div className="space-y-3 mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#ba9567] font-medium">
          MOMEN KEBERSAMAAN
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
          Galeri Foto
        </h2>
        <p className="text-xs sm:text-sm text-[#735e51] max-w-md mx-auto">
          Momen-momen manis yang terabadikan dalam lembaran kisah kami:
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {gallery.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedPhoto(item)}
            className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 border border-[#decbb1]/50"
          >
            <Image
              src={item.url}
              alt={item.caption || `Foto ke-${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-white">
              <ZoomIn className="w-6 h-6 drop-shadow-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-2xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedPhoto.url}
                alt={selectedPhoto.caption || "Foto Undangan"}
                fill
                className="object-contain"
              />
            </div>
            {selectedPhoto.caption && (
              <p className="mt-4 text-xs sm:text-sm text-[#eaddd7] font-light italic text-center">
                {selectedPhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

