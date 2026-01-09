"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/[locale]/constants/motion";
import Button from "../ui/button";
import {
  ArrowRight,
  User,
  GraduationCap,
  Briefcase,
  Cpu,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutMe");

  const infoData = [
    {
      id: 1,
      title: t("card1_title"),
      data: t("card1_data"),
      icon: <User className="w-5 h-5" />,
      color: "blue",
    },
    {
      id: 2,
      title: t("card2_title"),
      data: t("card2_data"),
      icon: <GraduationCap className="w-5 h-5" />,
      color: "purple",
    },
    {
      id: 3,
      title: t("card3_title"),
      data: t("card3_data"),
      icon: <Briefcase className="w-5 h-5" />,
      color: "blue",
    },
    {
      id: 4,
      title: t("card4_title"),
      data: t("card4_data"),
      icon: <Cpu className="w-5 h-5" />,
      color: "purple",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-[#111827] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full order-2 lg:order-1">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono tracking-widest uppercase mb-6">
                <Sparkles size={14} />
                {t("badge")}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                {t("title")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-[length:200%_auto] animate-gradient">
                  {t("me")}
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeIn("right", "tween", 0.4, 1)}
              className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light"
            >
              {t("shortDescription")}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {infoData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  whileHover={{ y: -5 }}
                  className="relative group p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/40 backdrop-blur-xl transition-all hover:border-blue-500/50 dark:hover:border-purple-500/50"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-${item.color}-500/10 text-${item.color}-600 dark:text-${item.color}-400 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-blue-600 dark:text-blue-400 font-mono text-[10px] uppercase tracking-tighter mb-1">
                        {item.title}
                      </p>
                      <p className="text-gray-900 dark:text-white font-bold text-base leading-tight">
                        {item.data}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn("up", "tween", 0.6, 1)}>
              <Button href="/about" icon={ArrowRight}>
                {t("readMore")}
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className="flex-1 w-full order-1 lg:order-2"
          >
            <div className="relative group mx-auto max-w-[550px] lg:max-w-none">
              {/* Animated Border/Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/50 dark:border-white/10 bg-white dark:bg-gray-900 shadow-2xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/40 dark:from-[#111827]/60 via-transparent to-transparent pointer-events-none" />

                <img
                  src="/data-center-facility-employing-deep-learning-technology.jpg"
                  alt="Workspace"
                  className="w-full h-full object-cover transform transition duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />

                <div className="absolute top-6 right-6 z-20 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
