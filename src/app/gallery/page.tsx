"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { galleryData, galleryVideoType } from "../data";
import Modal from "@/components/Modal";
import { fadeIn } from "@/variants";
import { IoPlayOutline } from "react-icons/io5";

export default function Page() {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const [videoType, setVideoType] = useState<string>("all");
  const [gallery, setGallery] = useState<Array<any>>([]);

  const handleOpenVideo = (link: string) => {
    setLink(link);
    setShowVideo(true);
  };

  useEffect(() => {
    if (videoType === "all") {
      setGallery(galleryData);
    } else {
      const filtered = galleryData.filter((item) =>
        item.type.includes(videoType)
      );
      setGallery(filtered);
    }
  }, [videoType]);

  return (
    <>
      {showVideo && <Modal setShowVideo={setShowVideo} link={link} />}
      <section
        id="gallery"
        className="flex flex-col items-center justify-center gap-y-20 w-[100vw]"
      >
        <div className="flex flex-col mt-28 items-center justify-center gap-y-5 w-[60%] text-center">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl xl:text-6xl"
          >
            Gallery
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-lg font-thin tracking-[2px]"
          >
            Explore my portfolio showcasing directorial and cinematography
            endeavors across diverse domains including commercials, corporate
            ventures, television assignments, and personal projects. Don&apos;t
            hesitate to reach out for discussions on potential commissions or
            collaborations. Your inquiries are most welcome.
          </motion.p>
        </div>
        <div className="w-full flex flex-col items-center bg-[#101010] min-h-[700px]">
          <div className="w-full flex flex-wrap px-16 py-10 gap-x-5 gap-y-4">
            {galleryVideoType.map((video, index) => (
              <motion.button
                variants={fadeIn("left", 0.4 + parseFloat(`0.${index}`))}
                initial="hidden"
                animate="show"
                exit="hidden"
                key={index}
                className={`capitalize text-lg tracking-[1px] px-6 py-3 border-[1px] hover:border-white ${
                  video.name === videoType ? "border-white" : "border-[#333]"
                }`}
                onClick={() => setVideoType(video.name)}
              >
                {video.name}
              </motion.button>
            ))}
          </div>
          <div className="w-full flex flex-wrap">
            {gallery.map((video, index) => (
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
                <div className="w-full h-full relative flex justify-center items-center group">
                  <Image
                    src={video.image}
                    width={860}
                    height={574}
                    alt={video.title}
                    className="h-full aspect-auto object-cover object-center"
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
          </div>
        </div>
      </section>
    </>
  );
}
