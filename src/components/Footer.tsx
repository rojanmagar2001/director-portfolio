import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

import { LuLinkedin } from "react-icons/lu";

import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="px-5 md:px-[120px] py-10 flex flex-col items-center sm:flex-row justify-between gap-y-4">
      <div className="flex text-lg gap-x-2 items-center">
        <a className="hover:text-blue-400 cursor-pointer text-xl" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uttar.magar/?fbclid=IwAR3-OfXBYuVZ-7pAoDTTOG2E-9ie9UlP9zaqhrGJ7qhowpgN7BVY7xpzy4g">
          <AiOutlineInstagram />
        </a>
        <a className="hover:text-blue-400 cursor-pointer text-xl" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCOiAoxS85b1CVcsKnD6B0ww">
          <AiOutlineYoutube />
        </a>
        <a className="hover:text-blue-400 cursor-pointer text-xl" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/uttar-bahadur-rana-magar-27a870261/">
          <LuLinkedin />
        </a>
        <a className="hover:text-blue-400 cursor-pointer text-xl" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/people/Uttar-Magar/pfbid02Bb5VAFVerUXqdcosa3DhZ96fVChG2uefqiDuz651FT9VGRmFhumyvzdLDsURmAS5l/">
          <IoLogoFacebook />
        </a>
      </div>
      <div className="flex flex-col">
        <p className="font-normal uppercase">&copy; 2023 Uttar Rana Magar</p>
      </div>
    </section>
  );
};

export default Footer;
