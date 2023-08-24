"use client";
import { galleryData } from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const GallerySection = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const data = galleryData.slice(0, 9);
  const handleOpenVideo = (link: string) => {
    setLink(link);
    setShowVideo(true);
  };
  return (
    <>
      {showVideo && <Modal setShowVideo={setShowVideo} link={link} />}
      <section id="gallery" className="w-full flex flex-wrap">
        {data.map((video, index) => (
          <motion.div
            variants={fadeIn("up", parseFloat(`0.${index % 3}`))}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
            }}
            exit="hidden"
            className="w-[100%] md:w-1/3 justify-center"
            key={video.id}
          >
            <div className="w-full relative flex justify-center items-center group">
              <Image
                src={video.image}
                width={860}
                height={574}
                alt={video.title}
                className="object-cover object-center"
              />
              <button
                className="text-6xl absolute z-20"
                onClick={() => handleOpenVideo(video.link)}
              >
                <IoPlayOutline />
              </button>
              <div className="bg-black/70 cursor-pointer absolute w-full h-full flex flex-col items-center gap-y-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-full h-full flex items-center justify-center relative">
                  <p className="text-white text-center text-base italic absolute bottom-[32%]">
                    {video.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default GallerySection;
