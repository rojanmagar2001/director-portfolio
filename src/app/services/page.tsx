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
      <div className="flex flex-col px-20 py-20 gap-y-[130px]">
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
              className="text-6xl font-mono opacity-60"
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
              <Image
                src="/service.jpg"
                width={1024}
                height={576}
                alt="service"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-10">
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="text-4xl opacity-90 uppercase">Our Services</h1>
            <p className="text-sm opacity-60">
              We provide variety of different services including camera, film
              direction, editing, music video and cinematic shoots.
            </p>
          </div>
          <div className="w-full h-full flex flex-col gap-y-16 p-10 px-20">
            {serviceData.map((service, i) => (
              <div
                className="w-full flex flex-col md:flex-row md:justify-between even:flex-row-reverse even:text-end"
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
                  className="w-[50%] flex flex-col justify-start gap-y-10"
                >
                  <span className="font-serif text-8xl">0{service.id}</span>
                  <div>
                    <h3 className="text-2xl leading-5 font-medium">
                      {service.name}
                    </h3>
                    <p className="text-base font-light tracking-[2px]">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={
                    service.id % 2 !== 1
                      ? fadeIn("right", 0)
                      : fadeIn("left", 0)
                  }
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                  className="w-[50%]"
                >
                  <Image
                    src={service.image}
                    width={408}
                    height={612}
                    alt="service"
                    className="object-cover w-full h-[700px]"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-24">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col items-center justify-center text-black gap-y-4"
        >
          <p className="text-lg opacity-80">Feel free to connect with me</p>
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
