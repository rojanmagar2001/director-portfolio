"use client";
import { AiOutlineEnter } from "react-icons/ai";
import { serviceData } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";
export default function Home() {
  return (
    <section className="h-full flex flex-col mt-[84px]">
      <div className="flex flex-col px-4 md:px-10 xl:px-20 py-20 gap-y-[130px]">
        <div className="flex flex-col gap-y-10">
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex gap-x-6 items-center"
          >
            <h1 className="uppercase text-3xl font-extralight cursor-pointer hover:opacity-80">
              Services
            </h1>
            <span className="text-3xl -rotate-90">
              <AiOutlineEnter />
            </span>
          </motion.div>
          <div className="flex flex-col gap-y-5">
            <motion.h1
              variants={fadeIn("down", 0)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-4xl md:text-6xl font-mono opacity-60"
            >
              Capture the present.
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={fadeIn("up", 0.2)}
              className="w-full flex"
            >
              <video
                src="https://res.cloudinary.com/dmm3d5bpu/video/upload/v1692442593/INTRO_VIDEO.qwe_bgz5iu.mp4"
                autoPlay
                loop
                muted
                playsInline
                // controls
                className="w-full xl:h-[700px] object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="text-4xl opacity-90 uppercase">Our Services</h1>
            {/* <p className="text-base opacity-60">
              We provide variety of different services including camera, film
              direction, editing, music video and cinematic shoots.
            </p> */}
          </div>
          <div className="w-full h-full flex flex-col gap-y-16 px-2 md:p-10 md:px-5 xl:px-52">
            {serviceData.map((service, i) => (
              <div
                className={`w-full flex flex-col md:flex-row ${i !== 2 ? "justify-between xl:justify-evenly" : "justify-center items-center mt-5 md:ml-10"} md:even:flex-row-reverse md:even:text-end gap-x-4`}
                key={i}
              >
                <motion.div
                  variants={
                    service.id % 2 === 1
                      ? fadeIn("right", 0)
                      : fadeIn("left", 0)
                  }
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                  className="w-full md:w-[50%] flex flex-col justify-start gap-y-5"
                >
                  {/* <span className="font-serif text-8xl">0{service.id}</span> */}
                  <div className="flex flex-col gap-y-10">
                    <div className="flex flex-col">
                      <h3 className="text-2xl leading-5 font-medium uppercase">
                        {service.name}
                      </h3>
                      <p className="text-base font-light tracking-[2px] uppercase">
                        {service.subtitle}
                      </p>
                    </div>
                    <p className="text-lg tracking-[-2%]">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
                {
                  i !== 2 && (
                    <motion.div
                  variants={
                    service.id % 2 !== 1
                      ? fadeIn("right", 0)
                      : fadeIn("left", 0)
                  }
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                  className="w-full md:w-[50%]"
                >
                  <Image
                    src={service.image}
                    width={408}
                    height={612}
                    alt="service"
                    className="object-cover w-full xl:h-[800px]"
                  />
                </motion.div>
                  )
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-24">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          className=" flex flex-col items-center justify-center text-black gap-y-4"
        >
          <p className="text-sm md:text-lg opacity-80">Feel free to connect with me</p>
          <Link
            href="/contact"
            className="w-[150px] h-[50px] border-[1px] flex items-center justify-center border-black font-light transition-all hover:text-white hover:bg-black"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
