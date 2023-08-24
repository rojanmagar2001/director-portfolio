"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "@/styles/animate.css";

const Navbar = () => {
  const [navOpened, setNavOpened] = useState<boolean>(false);
  const [navStatus, setNavStatus] = useState<boolean | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const desableScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  };

  const enableScroll = () => {
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto";
  };

  useEffect(() => {
    if (window.innerHeight > 400) {
      setNavOpened(false);
    }
  }, []);

  useEffect(() => {
    if (navOpened) {
      desableScroll();
    } else {
      enableScroll();
    }
  }, [navOpened]);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling downwards, show the navbar
        setNavStatus(true);
      } else if (currentScrollPos <= 50) {
        setNavStatus(null);
      } else {
        // Scrolling upwards, hide the navbar
        setNavStatus(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleCloseNav = () => {
    setNavOpened(false);
  };

  return (
    <>
      <nav
        className={`sticky overflow-x-hidden top-0 z-[100] ${
          navStatus === null
            ? "bg-transparent"
            : navStatus
            ? "slide-down bg-black/40"
            : "slide-up bg-black/40"
        }`}
      >
        <nav className={`w-full bg-transparent overflow-hidden`}>
          <div className="w-full flex items-center justify-between md:justify-around px-6 py-4 sm:px-8 top-[0]">
            <Link
              href={"/"}
              className="uppercase text-2xl text-white font-bold md:text-3xl md:font-bold transition hover:opacity-80"
            >
              Uttar Rana Magar
            </Link>
            <span
              className="text-[28px] font-bold md:hidden text-white"
              onClick={() => setNavOpened(true)}
            >
              <HiMenuAlt2 />
            </span>
            <div className="hidden md:flex gap-x-10 xl:gap-x-16 text-lg font-medium">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>
      </nav>
      <div
        className={`${
          navOpened ? "slide" : "slide-out"
        } fixed  inset-0 md:hidden w-full h-screen flex z-[300]`}
      >
        <div
          className={`h-full w-[20%] ${
            navOpened ? "bg-black " : "bg-transparent"
          }`}
        ></div>
        <div className="h-full flex flex-col gap-y-2 w-full text-white bg-[#101010] py-6 px-6 text-lg">
          <div className="w-full flex justify-end text-white text-3xl">
            <span onClick={() => setNavOpened(false)}>
              <AiOutlineClose />
            </span>
          </div>
          <div className="p-2 border-b-gray-500 border-b-[1px] w-full ">
            <Link href="/about" onClick={() => handleCloseNav()}>
              About
            </Link>
          </div>
          <div className="p-2 border-b-gray-500 border-b-[1px] w-full">
            <Link href="/services" onClick={() => handleCloseNav()}>
              Services
            </Link>
          </div>
          <div className="p-2 border-b-gray-500 border-b-[1px] w-full">
            <Link href="/gallery" onClick={() => handleCloseNav()}>
              Gallery
            </Link>
          </div>
          <div className="p-2 border-b-gray-500 border-b-[1px] w-full">
            <Link href="/contact" onClick={() => handleCloseNav()}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
