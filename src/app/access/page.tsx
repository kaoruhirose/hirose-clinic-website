"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CalendarDays } from "lucide-react";
import { site, phoneDisplay } from "@/lib/site";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Access() {
  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-clinic-subtle/50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-clinic-blue mb-4"
          >
            アクセス・ご予約
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-clinic-green font-medium tracking-widest text-sm"
          >
            ACCESS & RESERVATION
          </motion.p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Reservation Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <div>
              <h2 className="font-serif text-2xl text-clinic-blue mb-6 border-b border-clinic-subtle pb-4">
                初診の方へ
              </h2>
              <p className="text-clinic-text/80 leading-relaxed mb-6">
                当院は完全予約制のプライベートクリニックです。<br />
                他の方と顔を合わせることなく、ゆったりとした時間の中で診療をお受けいただけます。<br />
                ご予約は下記の外部予約システム（STORES予約）より承っております。
              </p>
              {site.reservationUrl ? (
                <a
                  href={site.reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 text-white bg-clinic-blue hover:bg-clinic-blue/90 rounded-full font-medium transition-all shadow-md hover:shadow-lg text-lg"
                >
                  <CalendarDays className="mr-2 w-5 h-5" />
                  WEB予約はこちらへ
                </a>
              ) : (
                <div>
                  {/* 予約システムのURLが確定するまでの準備中表示（site.ts で設定） */}
                  <div className="inline-flex w-full sm:w-auto items-center justify-center px-10 py-4 text-white bg-clinic-blue/50 rounded-full font-medium shadow-md text-lg cursor-default select-none">
                    <CalendarDays className="mr-2 w-5 h-5" />
                    WEB予約（準備中）
                  </div>
                  <p className="mt-3 text-sm text-clinic-text/60">
                    WEB予約の受付開始まで今しばらくお待ちください。
                  </p>
                </div>
              )}
            </div>

            <div>
              <h2 className="font-serif text-2xl text-clinic-blue mb-6 border-b border-clinic-subtle pb-4">
                診療時間のご案内
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-clinic-subtle/50 mb-4">
                <table className="w-full text-center text-sm md:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-clinic-subtle">
                      <th className="py-3 px-2 text-left font-medium text-clinic-text/70">診療時間</th>
                      <th className="py-3 px-2 font-medium">月</th>
                      <th className="py-3 px-2 font-medium">火</th>
                      <th className="py-3 px-2 font-medium">水</th>
                      <th className="py-3 px-2 font-medium">木</th>
                      <th className="py-3 px-2 font-medium">金</th>
                      <th className="py-3 px-2 font-medium">土</th>
                      <th className="py-3 px-2 font-medium text-red-500">日</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clinic-subtle/50 text-clinic-text/80">
                    <tr>
                      <td className="py-4 px-2 text-left whitespace-nowrap">09:00 - 13:00</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-red-400 font-bold">休</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-red-400 font-bold">休</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2 text-left whitespace-nowrap">15:00 - 18:30</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-red-400 font-bold">休</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-clinic-blue">●</td>
                      <td className="py-4 px-2 text-clinic-green font-medium">△※</td>
                      <td className="py-4 px-2 text-red-400 font-bold">休</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="text-sm text-clinic-text/60 space-y-1 list-disc list-inside">
                <li>休診日：水曜・日曜・祝日</li>
                <li>△※ 土曜午後は予約診療（自費診療のみ）となります。</li>
              </ul>
            </div>
          </motion.div>

          {/* Access Info & Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <div>
              <h2 className="font-serif text-2xl text-clinic-blue mb-6 border-b border-clinic-subtle pb-4">
                アクセス情報
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-clinic-subtle/50 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-clinic-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">所在地</h3>
                    <p className="text-clinic-text/80 leading-relaxed">
                      〒249-0000<br />
                      神奈川県逗子市〇〇 1-2-3<br />
                      <span className="text-xs text-red-500 mt-2 block">
                        ※当院は住宅街にある自宅兼用診療所です。防犯および近隣への配慮のため、詳細な場所や番地はご予約確定後にメールにてご案内しております。
                      </span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-clinic-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">最寄り駅からのアクセス</h3>
                    <ul className="text-clinic-text/80 space-y-2 text-sm">
                      <li>・JR横須賀線「逗子駅」より徒歩約15分、またはバスで約5分</li>
                      <li>・京急逗子線「逗子・葉山駅」より徒歩約12分</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-clinic-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">お電話</h3>
                    <p className="text-clinic-text/80">
                      {site.phone ? (
                        <a href={`tel:${site.phone}`} className="hover:text-clinic-green transition-colors">
                          {phoneDisplay}
                        </a>
                      ) : (
                        phoneDisplay
                      )}
                      <br />
                      <span className="text-xs text-gray-500">（お急ぎのご用件のみ。基本はWEBからお申込ください）</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 地図: 防犯・近隣配慮のため詳細住所は予約確定後に案内する方針に合わせ、
                地図の埋め込みは行わずご案内文のみ表示する */}
            <div className="w-full h-64 bg-clinic-subtle/40 rounded-3xl flex items-center justify-center shadow-inner">
              <div className="text-center text-clinic-text/70 text-sm p-6 leading-relaxed">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-clinic-green" />
                詳しい地図は、ご予約確定後に<br />
                詳細住所とあわせてメールでご案内いたします。
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
