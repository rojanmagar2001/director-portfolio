"use client";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
//@ts-expect-error
import Counter from "react-number-increment";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="py-32 flex items-center justify-center text-white font-sans">
        <div className="flex flex-col md:flex-row md:gap-x-28 gap-y-5 md:gap-y-0">
          {/* experience */}
          <div className="relative after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
            <div className="text-4xl xl:text-6xl font-extrabold text-accent mb-2">
              {/* <CountUp start={0} end={2} duration={5} /> + */}
              <Counter start={0} end={16} />
            </div>
            <div className="text-lg uppercase tracking-[2px] leading-[1.4] max-w-[100] font-thin">
              Years of experience
            </div>
          </div>
          {/* Clients */}
          <div className="relative after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0">
            <div className="text-4xl xl:text-6xl font-extrabold text-accent mb-2">
              <Counter start={0} end={50} />
            </div>
            <div className="text-lg uppercase tracking-[2px] leading-[1.4] max-w-[100] font-thin">
              Satisfied clients
            </div>
          </div>
          {/* finished projects */}
          <div className="relative after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0">
            <div className="text-4xl xl:text-6xl font-extrabold text-accent mb-2">
              <Counter start={0} end={70} />
            </div>
            <div className="text-lg uppercase tracking-[2px] leading-[1.4] max-w-[100] font-thin">
              Finished Projects
            </div>
          </div>
        </div>
      </div>
      <GallerySection />
    </main>
  );
}
