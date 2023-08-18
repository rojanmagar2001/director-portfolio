"use client";
import React from "react";
import ReactPlayer from "react-player";

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative bg-black flex items-center justify-center">
      {/* video player todo */}
      {/* <div>
        <ReactPlayer
          url="https://youtube.googleapis.com/embed/?status=ok&hl=en_GB&allow_embed=0&ps=docs&partnerid=30&autoplay=0&abd=0&docid=1Us1L_Hxy8dxFn6LzQuZN-xOJSJe7ar_q&el=preview&title=nature_landscape_ocean_sea_boats_902.mp4&BASE_URL=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2F&iurl=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2Fvt%3Fauthuser%3D0%26id%3D1Us1L_Hxy8dxFn6LzQuZN-xOJSJe7ar_q&cc3_module=1&reportabuseurl=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2Fabuse%3Fauthuser%3D0%26id%3D1Us1L_Hxy8dxFn6LzQuZN-xOJSJe7ar_q&token=1&plid=V0QXfIjdQ-LvtA&timestamp=1692378044226&length_seconds=40&BASE_YT_URL=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2F&cc_load_policy=1&authuser=0&wmode=window&override_hl=1&enablecastapi=0&pipable=1&enablepostapi=1&postid=drive-viewer-video-player-object-2&origin=https%3A%2F%2Fdrive.google.com"
          autoplay
          loop
          playing
        />
      </div> */}
      <div className="w-full flex flex-col px-10 items-center gap-y-20">
        <div className="w-full flex flex-col items-center gap-y-6">
          <h3 className="text-2xl font-[400] text-center">
            Filmmaker, Director & Cinematographer
          </h3>
          <p className="text-center">
            &quot;For me, it&apos;s all about capturing the moment and sharing
            beautiful cinematic experiences that resonate life&quot;
          </p>
        </div>
        <button className="spinner-button relative w-[150px] h-[70px] text-white text-2xl overflow-hidden">
          {/* Projects */}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
