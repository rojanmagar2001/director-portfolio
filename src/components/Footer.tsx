import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

import { LuLinkedin } from "react-icons/lu";

import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="px-5 md:px-[120px] py-10 flex flex-col items-center sm:flex-row justify-between">
      <div className="flex text-lg gap-x-1 items-center">
        <a className="hover:text-blue">
          <AiOutlineInstagram />
        </a>
        <a className="hover:text-blue-400">
          <IoLogoFacebook />
        </a>
        <a className="hover:text-blue-400">
          <LuLinkedin />
        </a>
        <a className="hover:text-blue-400">
          <IoLogoFacebook />
        </a>
      </div>
      <div className="flex flex-col">
        <p>&copy; 2023 Uttar Rana Magar</p>
      </div>
    </section>
  );
};

export default Footer;
