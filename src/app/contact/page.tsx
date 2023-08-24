"use client";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="w-full flex flex-col gap-y-32 xl:gap-y-28">
      <div className="flex flex-col items-center justify-center mt-48 md:mt-36 xl:mt-40 xl:px-64">
        <div className="xl:w-[60%] flex flex-col items-center justify-center gap-y-8 md:gap-y-12">
          <motion.h1
            variants={fadeIn("up", 0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-5xl md:text-7xl xl:text-9xl tracking-[2px]"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-[70%] xl:w-[80%] text-center text-lg xl:text-xl font-thin tracking-[1motion.x]"
          >
            We design flower arrangements and displays for various occasions,
            spaces, and themes, including; commercials, advertisements,
            packaging, retail stores, complexes, exhibition halls, international
            expositions, etc. We will propose a flower arrangement styling plan
            that matches the client&apos;s concept and ideas. We also offer
            licenses for our floral patterns. Please feel free to contact us.
          </motion.p>
        </div>
      </div>
      <div className="w-full flex flex-col py-8 md:py-20 px-16 xl:py-0 gap-y-16 md:gap-y-20">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full flex border-b-[1px] pb-2 md:pb-4 xl:pb-8 gap-x-10 xl:gap-x-20 items-baseline group"
        >
          <span className="text-lg md:text-xl xl:text-2xl font-thin">
            (mail)
          </span>
          <a
            className="text-2xl md:text-4xl xl:text-4xl group-hover:animate-bounce"
            href="mailto:uttarmagar2023@gmail.com"
          >
            uttarmagar2023@gmail.com
          </a>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full flex border-b-[1px] pb-2 md:pb-4 xl:pb-8 gap-x-10 xl:gap-x-20 items-baseline group"
        >
          <span className="text-lg md:text-xl xl:text-2xl font-thin">
            (phone)
          </span>
          <a
            className="text-2xl md:text-4xl xl:text-4xl group-hover:animate-bounce"
            href="tel:+9779823000101"
          >
            +977 9823000101
          </a>
        </motion.div>
      </div>
    </section>
  );
}
