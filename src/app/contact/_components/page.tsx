"use client";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
export default function ContactPage() {
  return (
    <section className="flex w-full flex-col gap-y-32 xl:gap-y-28">
      <div className="mt-48 flex flex-col items-center justify-center md:mt-36 xl:mt-40 xl:px-64">
        <div className="flex flex-col items-center justify-center gap-y-8 md:gap-y-12 xl:w-[60%]">
          <motion.h1
            variants={fadeIn("up", 0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-5xl tracking-[2px] md:text-7xl xl:text-9xl"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-[70%] text-center text-lg font-thin tracking-[1motion.x] xl:w-[80%] xl:text-xl"
          >
            Let&apos;s bring your vision to life! Whether it&apos;s directing,
            editing, or filmmaking, I&apos;m here to create captivating stories.
            Reach out and let&apos;s make magic happen.
          </motion.p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-y-8 px-4 py-12 md:gap-y-20 md:px-16 md:py-24 xl:py-20">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="group flex w-full items-baseline gap-x-10 border-b-[1px] pb-2 md:pb-4 xl:gap-x-20 xl:pb-8"
        >
          <span className="text-base font-thin md:text-xl xl:text-2xl">
            (mail)
          </span>
          <a
            className="text-lg group-hover:animate-bounce md:text-4xl xl:text-4xl"
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
          className="group flex w-full items-baseline gap-x-10 border-b-[1px] pb-2 md:pb-4 xl:gap-x-20 xl:pb-8"
        >
          <span className="text-base font-thin md:text-xl xl:text-2xl">
            (address)
          </span>
          <a className="text-lg group-hover:animate-bounce md:text-4xl xl:text-4xl">
            Kathmandu, Nepal
          </a>
        </motion.div>
        {/* <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="group flex w-full items-baseline gap-x-10 border-b-[1px] pb-2 md:pb-4 xl:gap-x-20 xl:pb-8"
        >
          <span className="text-base font-thin md:text-xl xl:text-2xl">
            (phone)
          </span>
          <a
            className="text-lg group-hover:animate-bounce md:text-4xl xl:text-4xl"
            href="tel:+14377332948"
          >
            +1437 733 2948
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
