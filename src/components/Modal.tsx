import React, { useCallback, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";
interface IProps {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
}

const Modal: React.FC<IProps> = ({ setShowVideo, link }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const escFunction = useCallback(
    (event: any) => {
      if (event.key === "Escape") {
        setShowVideo(false);
      }
    },

    [setShowVideo]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowVideo(false);
        }}
        className="justify-center h-full md:mb-10  flex w-full overflow-y-auto 
  fixed  inset-0  z-[30000] outline-none focus:outline-none bg-black/40"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShowVideo(true);
          }}
          className="flex h-fit w-[95%] xl:w-max m-auto items-center justify-center"
        >
          <div className="shadow-lg w-full outline-none focus:outline-none">
            <iframe
              //   width="1280"
              //   height="720"
              src={link}
              title="SCENIC SCENES OF HIMALAYA IN NEPAL (4K VIDEO) 2022"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              allowFullScreen
              className="w-full md:h-fit xl:h-[720px] aspect-video object-cover object-center"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
