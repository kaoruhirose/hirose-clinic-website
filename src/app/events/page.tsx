"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Users, Coins } from "lucide-react";
import { events } from "@/lib/events";
import { buildEventFormUrl } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Events() {
  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4"
          >
            イベント・ワークショップ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-clinic-green font-medium tracking-widest text-sm"
          >
            EVENTS
          </motion.p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full">
        {events.length === 0 ? (
          <p className="text-center text-clinic-text/60 leading-relaxed">
            現在、開催を予定しているイベントはありません。<br />
            次回の開催が決まりましたら、こちらとお知らせページでご案内いたします。
          </p>
        ) : (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {events.map((ev, idx) => {
              const formUrl = buildEventFormUrl(ev.date);
              return (
                <motion.li
                  key={idx}
                  variants={fadeUp}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-clinic-subtle/50"
                >
                  <h2 className="font-serif text-xl md:text-2xl text-clinic-blue mb-4">
                    {ev.title}
                  </h2>

                  <dl className="space-y-3 text-sm text-clinic-text/80 mb-5">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                      <span>{ev.place}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Coins className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                      <span>参加費：{ev.fee}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" />
                      <span>定員：{ev.capacity}</span>
                    </div>
                  </dl>

                  <p className="text-clinic-text/80 leading-relaxed text-sm mb-6">
                    {ev.description}
                  </p>

                  {formUrl ? (
                    <a
                      href={formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-white bg-clinic-blue hover:bg-clinic-blue/90 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                    >
                      <CalendarDays className="mr-2 w-5 h-5" />
                      この日程で参加を申し込む
                    </a>
                  ) : (
                    <div>
                      {/* eventForm.baseUrl が未設定の間の表示（site.ts で設定） */}
                      <div className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-white bg-clinic-blue/50 rounded-full font-medium shadow-md cursor-default select-none">
                        <CalendarDays className="mr-2 w-5 h-5" />
                        申込フォーム準備中
                      </div>
                      <p className="mt-3 text-xs text-clinic-text/60">
                        お申し込みの受付開始まで今しばらくお待ちください。
                      </p>
                    </div>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </div>
  );
}
