import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className="px-5 md:px-[120px] py-10 flex flex-col items-center sm:flex-row justify-between">
      <div className="flex text-lg gap-x-1">
        <a className="hover:text-blue">
          <AiOutlineInstagram />
        </a>
        <a className="hover:text-blue">
          <AiOutlineFacebook />
        </a>
        <a className="hover:text-blue">
          <AiOutlineLinkedin />
        </a>
      </div>
      <div className="flex flex-col">
        <p>&copy; 2023 Uttar Rana Magar</p>
      </div>
    </section>
  );
};

export default Footer;
