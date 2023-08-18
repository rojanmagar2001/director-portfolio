import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-[2000px]">
      {/* Cover Image */}
      <div className="w-full relative">
        <Image
          src="/about.jpg"
          width={5998}
          height={3687}
          alt=""
          className="object-cover w-full sm:h-[450px]"
        />
        <h1 className="absolute bottom-[2%] left-[5%] md:left-[15%] text-xl md:text-5xl font-semibold">
          About
        </h1>
      </div>
    </main>
  );
}
