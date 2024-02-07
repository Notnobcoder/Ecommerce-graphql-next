// @ts-nocheck
"use client";
import { useRef } from "react";

type indexProps = {};

export const VideoPlayer: React.FC<indexProps> = () => {
  const vidoeRef = useRef();

  const playVideo = () => {
    // @ts-ignore
    vidoeRef.current.play();
  };

  return (
    <div className="relative">
      <video ref={vidoeRef} autoPlay className="h-[375px] bg-orange-500">
        <source src="/video/home.webm" />
      </video>
      <div className="absolute top-4 z-10 left-32">
        <button
          onClick={playVideo}
          className="cursor-pointer bg-black text-white"
        >
          click me
        </button>
      </div>
    </div>
  );
};
