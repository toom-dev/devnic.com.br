"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { MacbookScrollDemo } from "@/components/SectionScroll";
import { GoogleGeminiEffectDemo } from "@/components/Integrations";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <LampDemo />
    <MacbookScrollDemo />
    <GoogleGeminiEffectDemo />
    </>
  );
}

export function LampDemo() {
  return (
    <LampContainer className="rounded-none pt-48">
      <Image src={"/logo.png"} width={300} height={20} alt="Devnic" />
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 mb-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Softwares personalizados <br /> para quem procura <br /> preço justo e qualidade
      </motion.h1>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <a href="https://wa.me/+5511989266354" target="_blank" className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <span className="relative z-20">
            Comece Agora!
          </span>
        </a>
      </motion.div>
    </LampContainer>
  );
}