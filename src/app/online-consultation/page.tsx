"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Calendar, Video, CreditCard, Pill, CheckCircle2, AlertCircle } from "lucide-react";
import ReservationLink from "@/components/ReservationLink";
import { site, phoneDisplay } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function OnlineConsultation() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/online-consultation.png" 
            alt="オンライン診療の様子" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-clinic-blue/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-clinic-base via-transparent to-transparent" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeUp}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-clinic-green text-white rounded-full"
          >
            Telemedicine
          </motion.span>
          <motion.h1 
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl text-clinic-blue font-medium leading-tight mb-6"
          >
            ご自宅から、<br className="md:hidden" />安心の診察を。
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg text-clinic-text max-w-2xl mx-auto leading-relaxed"
          >
            移動の負担を減らし、いつもの環境でリラックスして受診いただけます。<br className="hidden md:block" />
            西洋医学と東洋医学の知見を、オンラインでも丁寧にお届けします。
          </motion.p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-clinic-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "通院・待ち時間の解消",
                desc: "移動時間や待合室での待ち時間がなくなり、お忙しい方や体調が優れない方でもスムーズに受診できます。",
                icon: <Calendar className="w-8 h-8 text-clinic-green" />
              },
              {
                title: "リラックスした環境",
                desc: "ご自宅など、ご自身が最もリラックスできる環境でお話しいただけるため、些細な悩みも相談しやすくなります。",
                icon: <Video className="w-8 h-8 text-clinic-green" />
              },
              {
                title: "感染症リスクの低減",
                desc: "外出を控えることで、他の感染症に罹患するリスクを抑えることができ、二次感染の防止にも繋がります。",
                icon: <CheckCircle2 className="w-8 h-8 text-clinic-green" />
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-clinic-subtle/50"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="font-serif text-xl text-clinic-blue mb-3">{benefit.title}</h3>
                <p className="text-clinic-text/80 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-clinic-blue mb-4">ご利用の流れ</h2>
            <div className="w-12 h-1 bg-clinic-green mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-clinic-subtle -translate-y-12 z-0" />
            
            {[
              { step: "01", title: "予約", desc: "アプリまたはWebから日時を選択して予約", icon: <Calendar /> },
              { step: "02", title: "準備", desc: "予約時間に静かな場所で待機", icon: <Phone /> },
              { step: "03", title: "診察", desc: "ビデオ通話にて医師が診察を行います", icon: <Video /> },
              { step: "04", title: "会計", desc: "クレジットカード等でのオンライン決済", icon: <CreditCard /> },
              { step: "05", title: "お薬", desc: "処方箋を郵送、またはお近くの薬局へ", icon: <Pill /> },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                <div className="w-16 h-16 rounded-full bg-clinic-base flex items-center justify-center text-clinic-blue mb-6 shadow-sm border-4 border-white">
                  {item.icon}
                </div>
                <div className="mb-2">
                  <span className="text-xs font-bold text-clinic-green tracking-tighter">{item.step}</span>
                  <h3 className="font-serif text-lg text-clinic-blue">{item.title}</h3>
                </div>
                <p className="text-xs text-clinic-text/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Policy / FAQ Section */}
      <section className="py-24 bg-clinic-subtle/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-clinic-subtle">
            <h2 className="font-serif text-2xl text-clinic-blue mb-8 text-center flex items-center justify-center gap-2">
              <AlertCircle className="text-clinic-green" />
              あらかじめご確認ください
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "初診でもオンライン診療は可能ですか？",
                  a: "はい、可能です。ただし、症状によっては対面での診察が必要と判断される場合があります。"
                },
                {
                  q: "費用はどのくらいかかりますか？",
                  a: "通常の診察料に加え、システム利用料（事務手数料）が必要となります。詳細は予約時にご確認ください。"
                },
                {
                  q: "どんな環境が必要ですか？",
                  a: "安定したインターネット環境と、スマートフォンやPC、タブレットが必要です。専用アプリのインストールをお願いする場合がございます。"
                },
                {
                  q: "処方箋はどのようにもらえますか？",
                  a: "ご自宅への郵送、または指定された調剤薬局へのFAX送信が可能です。生活スタイルに合わせて選択いただけます。"
                }
              ].map((faq, idx) => (
                <div key={idx} className="pb-6 border-b border-clinic-base last:border-0 last:pb-0">
                  <div className="flex items-start gap-4 mb-2">
                    <span className="text-clinic-green font-bold">Q.</span>
                    <h4 className="text-clinic-blue font-medium">{faq.q}</h4>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-clinic-text/40 font-bold">A.</span>
                    <p className="text-clinic-text/80 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <ReservationLink className="inline-flex items-center justify-center px-10 py-4 bg-clinic-blue text-white rounded-full font-medium shadow-lg hover:bg-clinic-blue/90 hover:-translate-y-0.5 transition-all outline-none ring-2 ring-clinic-blue/20 ring-offset-2">
                オンライン診療を予約する
              </ReservationLink>
              <p className="mt-4 text-xs text-clinic-text/50">
                {site.reservationUrl
                  ? "※外部の予約システムへ移動します"
                  : "※ご予約方法のご案内ページへ移動します"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-clinic-base">
        <div className="max-w-lg mx-auto text-center px-4">
          <h2 className="font-serif text-2xl text-clinic-blue mb-6">お電話でのご相談</h2>
          <p className="text-clinic-text/80 mb-8 leading-relaxed">
            操作方法や、ご自身の症状がオンライン診療に適しているかなど、不明な点がございましたらお気軽にお電話ください。
          </p>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-clinic-subtle inline-block">
            {/* 電話番号が確定するまでは誤発信防止のため tel: リンクにしない */}
            {site.phone ? (
              <a href={`tel:${site.phone}`} className="text-3xl font-serif text-clinic-blue flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-clinic-green" />
                {phoneDisplay}
              </a>
            ) : (
              <p className="text-3xl font-serif text-clinic-blue flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-clinic-green" />
                {phoneDisplay}
              </p>
            )}
            <p className="text-[10px] text-clinic-text/50 mt-2 tracking-widest uppercase">Reception Hours: 9:00 - 18:00</p>
          </div>
        </div>
      </section>
    </div>
  );
}
