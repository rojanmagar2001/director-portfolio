"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { BsPlay } from "react-icons/bs";
import { IoPlayOutline } from "react-icons/io5";
import Modal from "./Modal";
// import ReactPlayer from "react-player";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  const handleOpenVideo = (link: string) => {
    setLink(link);
    setShowVideo(true);
  };
  return (
    <>
      {showVideo && <Modal setShowVideo={setShowVideo} link={link} />}
      <section className="w-full relative h-screen md:h-screen overflow-hidden bg-black flex items-center justify-center">
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
        <div className="w-full bg-black opacity-40 h-full absolute inset-y-0 z-[60]"></div>
        <div className="w-full flex flex-col px-10 items-center z-[70]">
          <div className="w-full flex flex-col items-center gap-y-10">
            <div className="w-full flex flex-col items-center gap-y-4">
              <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col items-center gap-y-3"
              >
                {/* <h2 className="text-2xl font-bold md:text-5xl">Hi, I&apos;m a</h2> */}
                <h3 className="text-3xl md:text-4xl font-bold uppercase xl:text-6xl tracking-[2px] text-center">
                  Editor, Director & Filmmaker
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
                className="font-extralight italic text-base md:text-lg text-center tracking-tight  md:w-[50%] opacity-70"
              >
                &quot;For me, it&apos;s all about capturing the moment and
                sharing beautiful cinematic experiences that resonate life&quot;
              </motion.p>
            </div>
            <span
              className="text-5xl md:text-6xl animate-pulse transition-all hover:animate-none hover:scale-[1.5] cursor-pointer"
              onClick={() =>
                handleOpenVideo("https://www.youtube.com/embed/jCqtGQTaISM")
              }
            >
              <IoPlayOutline />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
