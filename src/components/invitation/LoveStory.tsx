import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { StoryMilestone } from "@/types/invitation";

interface LoveStoryProps {
  stories: StoryMilestone[];
}

export const LoveStory: React.FC<LoveStoryProps> = ({ stories }) => {
  return (
    <section id="story" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <div className="space-y-3 mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-[#ba9567] font-medium">
          LOVE STORY
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
          Perjalanan Kisah Kami
        </h2>
        <p className="text-xs sm:text-sm text-[#735e51] max-w-md mx-auto">
          Setiap babak memiliki keindahan tersendiri yang mengantarkan langkah kami hingga hari ini:
        </p>
      </div>

      <div className="relative border-l-2 border-[#ba9567]/30 ml-4 sm:mx-auto sm:max-w-xl space-y-10 pl-6 sm:pl-8 text-left">
        {stories.map((story, index) => (
          <div key={index} className="relative group">
            {/* Timeline icon */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#fdfbf7] border-2 border-[#ba9567] flex items-center justify-center shadow-sm">
              <Heart className="w-2.5 h-2.5 text-[#ba9567] fill-[#ba9567]" />
            </div>

            <div className="p-5 rounded-2xl glass-card border border-[#ba9567]/25 shadow-sm space-y-3 transition duration-300 hover:shadow-md">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#ba9567]/20 text-[#866342] font-semibold text-xs">
                {story.year}
              </span>
              <h3 className="font-serif text-lg font-semibold text-[#3b2e25]">
                {story.title}
              </h3>
              <p className="text-xs text-[#735e51] leading-relaxed">
                {story.description}
              </p>
              {story.image && (
                <div className="relative w-full h-44 rounded-xl overflow-hidden mt-3">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

