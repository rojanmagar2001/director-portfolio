"use client";
import HeroSection from "@/components/HeroSection";
import CountUp from "react-countup";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="p-20 flex items-center justify-center text-white">
        <div className="flex flex-col md:flex-row md:gap-x-28 gap-y-5 md:gap-y-0">
          {/* experience */}
          <div className="relative after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
            <div className="text-4xl xl:text-6xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={2} duration={5} /> +
            </div>
            <div className="text-base uppercase tracking-[1px] leading-[1.4] max-w-[100]">
              Years of experience
            </div>
          </div>
          {/* Clients */}
          <div className="relative after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0">
            <div className="text-4xl xl:text-6xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={25} duration={5} /> +
            </div>
            <div className="text-base uppercase tracking-[1px] leading-[1.4] max-w-[100]">
              Satisfied clients
            </div>
          </div>
          {/* finished projects */}
          <div className="relative after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0">
            <div className="text-4xl xl:text-6xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={15} duration={5} /> +
            </div>
            <div className="text-base uppercase tracking-[1px] leading-[1.4] max-w-[100]">
              Finished Projects
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
