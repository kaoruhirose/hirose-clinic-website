"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Users, Coins, ExternalLink } from "lucide-react";
import type { ClinicEvent } from "@/lib/events";

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

function EventCard({ ev }: { ev: ClinicEvent }) {
  return (
    <motion.li
      variants={fadeUp}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-clinic-subtle/50"
    >
      <h3 className="font-serif text-xl md:text-2xl text-clinic-blue mb-6">
        {ev.title}
      </h3>

      {/* 開催日程の一覧 */}
      <div className="mb-6">
        <p className="flex items-center gap-2 text-sm font-medium text-clinic-green mb-3">
          <CalendarDays className="w-5 h-5" />
          開催日程
        </p>
        {ev.dates.length === 0 ? (
          <p className="text-sm text-clinic-text/70 leading-relaxed">
            次回の日程は、決まり次第こちらでお知らせします。
          </p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ev.dates.map((date) => (
              <li
                key={date}
                className="px-4 py-2.5 rounded-lg bg-clinic-subtle/40 text-clinic-text font-medium text-sm"
              >
                {date}
              </li>
            ))}
          </ul>
        )}
      </div>

      <dl className="space-y-3 text-sm text-clinic-text/80 mb-5">
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

      {ev.formUrl && ev.dates.length > 0 ? (
        <div>
          <a
            href={ev.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-white bg-clinic-blue hover:bg-clinic-blue/90 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            参加を申し込む
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
          <p className="mt-3 text-xs text-clinic-text/60">
            ご希望の日程は、申込フォームの中でお選びください。
          </p>
        </div>
      ) : (
        <div>
          {/* formUrl が未設定、または日程が無い間の表示（events.ts で設定） */}
          <div className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-white bg-clinic-blue/50 rounded-full font-medium shadow-md cursor-default select-none">
            申込受付前
          </div>
          <p className="mt-3 text-xs text-clinic-text/60">
            お申し込みの受付開始まで今しばらくお待ちください。
          </p>
        </div>
      )}
    </motion.li>
  );
}

function EventSection({
  title,
  en,
  items,
  emptyText,
}: {
  title: string;
  en: string;
  items: ClinicEvent[];
  emptyText: string;
}) {
  return (
    <section className="mt-16">
      <div className="flex items-baseline gap-4 mb-8 pb-3 border-b border-clinic-subtle">
        <h2 className="font-serif text-2xl md:text-3xl text-clinic-blue">{title}</h2>
        <span className="text-clinic-green font-medium tracking-widest text-xs">{en}</span>
      </div>
      {items.length === 0 ? (
        <p className="text-clinic-text/60 leading-relaxed text-sm">{emptyText}</p>
      ) : (
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {items.map((ev) => (
            <EventCard key={ev.title} ev={ev} />
          ))}
        </motion.ul>
      )}
    </section>
  );
}

export default function EventsView({
  fieldworks,
  workshops,
}: {
  fieldworks: ClinicEvent[];
  workshops: ClinicEvent[];
}) {
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
            イベント
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <EventSection
          title="フィールドワーク"
          en="FIELDWORK"
          items={fieldworks}
          emptyText="現在、開催を予定しているフィールドワークはありません。次回の開催が決まりましたら、こちらでご案内いたします。"
        />
        <EventSection
          title="ワークショップ"
          en="WORKSHOP"
          items={workshops}
          emptyText="現在準備中です。決まり次第こちらでお知らせします。"
        />
      </div>
    </div>
  );
}
