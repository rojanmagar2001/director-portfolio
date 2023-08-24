"use client";
import Image from "next/image";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export default function Home() {
  return (
    <main className="w-full z-[100]">
      {/* Cover Image */}
      <section className="w-full relative">
        <Image
          src="/me.jpg"
          width={5998}
          height={3687}
          alt=""
          className="object-cover object-center w-full h-[400px] md:h-[600px]"
        />
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col absolute bottom-[5%] left-[5%] md:left-[10%]"
        >
          <span className="text-2xl font-extralight md:text-5xl">About</span>
          <h1 className="text-2xl font-semibold md:text-6xl tracking-[2%] w-[70%]">
            Capturing the moment into eterinity
          </h1>
        </motion.div>
        <span className="absolute text-4xl md:text-6xl right-[5%] bottom-[5%] animate-bounce cursor-pointer hover:opacity-80 transition-all">
          <HiOutlineChevronDoubleDown />
        </span>
      </section>
      {/* about section */}
      <section className="w-full bg-white flex flex-col text-[#444450] px-5 py-10 md:py-20 md:px-[120px] xl:px-60 gap-y-4">
        <h2 className="text-xl md:text-2xl font-bold">Myself</h2>
        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col tracking-[-2%] text-sm sm:text-lg font-light gap-y-3"
        >
          <p>
            I work as a multi-award winning freelance filmmaker, director,
            editor and cinematographer based in the South West of UK. I&apos;m
            available to work from Bristol, London or Worldwide on Commercial,
            Corporate or TV video projects.
          </p>
          <p>
            Often I see images and have ideas that I would like to share with
            others. This is how my films come about. I enjoy experimenting so my
            work covers a wide range of subjects, styles and techniques:
            documentaries, shorts, promotional, music videos, experimental and
            more!
          </p>
          <p>
            This website features a portfolio of some of my recent commercial
            and personal projects. Please feel free to{" "}
            <span className="text-black font-bold">contact me</span> to discuss
            any commissions or collaboration enquiries you may have.
          </p>
        </motion.div>
        <motion.button
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-[150px] h-[50px] border-[1px] tranisiton-all hover:bg-black hover:text-white"
        >
          Download Cv
        </motion.button>
      </section>
    </main>
  );
}
