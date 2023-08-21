"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
// import ReactPlayer from "react-player";

const HeroSection = () => {
  return (
    <section className="w-full relative h-[50vh] md:h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* video player todo */}
      <div className="absolute w-full h-full top-0 z-[50] object-cover">
        <video
          src="https://res.cloudinary.com/dmm3d5bpu/video/upload/v1692442593/INTRO_VIDEO.qwe_bgz5iu.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="w-full bg-black opacity-40 h-full absolute z-[60]"></div>
      <div className="w-full flex flex-col px-10 items-center gap-y-20 z-[200]">
        <div className="w-full flex flex-col items-center gap-y-8">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col items-center gap-y-3"
          >
            <h2 className="text-2xl font-bold md:text-5xl">Hi, I&apos;m</h2>
            <h3 className="text-2xl font-semibold md:text-6xl tracking-[1px] text-center">
              Filmmaker, Director & Editor
            </h3>
            {/* <span className="font-thin font-mono text-[#5e5d5d] text-2xl tracking-wide">
              Cinematography
            </span> */}
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="font-extralight text-center tracking-tight  md:w-[40%] opacity-70"
          >
            &quot;For me, it&apos;s all about capturing the moment and sharing
            beautiful cinematic experiences that resonate life&quot;
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
