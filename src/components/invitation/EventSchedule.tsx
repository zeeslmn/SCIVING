import React from "react";
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from "lucide-react";
import { InvitationData } from "@/types/invitation";

interface EventScheduleProps {
  data: InvitationData;
}

export const EventSchedule: React.FC<EventScheduleProps> = ({ data }) => {
  const getGoogleCalendarUrl = (title: string, date: string, venue: string) => {
    // Format YYYYMMDD
    const cleanDate = date.replace(/-/g, "");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${cleanDate}T080000Z/${cleanDate}T140000Z&details=${encodeURIComponent(
      "Pernikahan " + data.groom.name + " & " + data.bride.name
    )}&location=${encodeURIComponent(venue)}`;
  };

  return (
    <section id="event" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <div className="space-y-3 mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#ba9567] font-medium">
          RANGKAIAN ACARA
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#3b2e25] font-medium">
          Waktu &amp; Tempat
        </h2>
        <p className="text-xs sm:text-sm text-[#735e51] max-w-md mx-auto">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir di acara kami:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {data.events.map((event) => (
          <div
            key={event.id}
            className="p-8 rounded-2xl glass-card border border-[#ba9567]/35 shadow-md flex flex-col justify-between text-center relative overflow-hidden"
          >
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#ba9567]/15 text-[#866342] text-xs font-semibold uppercase tracking-wider">
                {event.title}
              </span>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-center gap-2 text-sm text-[#5a4331]">
                  <Calendar className="w-4 h-4 text-[#ba9567]" />
                  <span className="font-medium">
                    {new Date(event.date).toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-[#5a4331]">
                  <Clock className="w-4 h-4 text-[#ba9567]" />
                  <span>{event.time}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#decbb1]/50 space-y-1">
                <h4 className="font-serif text-lg font-semibold text-[#3b2e25]">
                  {event.venueName}
                </h4>
                <p className="text-xs text-[#735e51] leading-relaxed max-w-xs mx-auto">
                  {event.venueAddress}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ba9567] text-[#251e19] text-xs font-medium hover:bg-[#a67f53] transition shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Petunjuk Arah (Maps)</span>
              </a>

              <a
                href={getGoogleCalendarUrl(event.calendarTitle, event.date, event.venueName)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#ba9567]/50 text-[#866342] hover:bg-[#ba9567]/10 text-xs font-medium transition"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-[#ba9567]" />
                <span>Simpan Kalender</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

