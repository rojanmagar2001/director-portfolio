import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

import { LuLinkedin } from "react-icons/lu";

import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="px-5 md:px-[120px] py-10 flex flex-col items-center sm:flex-row justify-between gap-y-4">
      <div className="flex text-lg gap-x-2 items-center">
        <a className="hover:text-blue-400 cursor-pointer text-lg">
          <AiOutlineInstagram />
        </a>
        <a className="hover:text-blue-400 cursor-pointer text-lg">
          <IoLogoFacebook />
        </a>
        <a className="hover:text-blue-400 cursor-pointer text-lg">
          <LuLinkedin />
        </a>
        <a className="hover:text-blue-400 cursor-pointer text-lg">
          <IoLogoFacebook />
        </a>
      </div>
      <div className="flex flex-col">
        <p className="font-thin uppercase">&copy; 2023 Uttar Rana Magar</p>
      </div>
    </section>
  );
};

export default Footer;
