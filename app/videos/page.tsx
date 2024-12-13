import TitleSection from "@/components/molecules/TitleSection";
import React from "react";

const Videos = () => {
  return (
    <main className="container">
      <TitleSection isCenter label="Videos" />
      <div className="flex flex-wrap">
        <div className="sm:w-1/2 w-full min-h-[150px] p-4">
          <div className="w-full h-full bg-neutral-200">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/snsM2ciMpvU?si=8FD6xB-1Z0mUZMC2"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
              className="w-full"
            ></iframe>
          </div>
        </div>
        <div className="sm:w-1/2 w-full min-h-[150px] p-4">
          <div className="w-full h-full bg-neutral-200">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/snsM2ciMpvU?si=8FD6xB-1Z0mUZMC2"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
              className="w-full"
            ></iframe>
          </div>
        </div>
        <div className="sm:w-1/2 w-full min-h-[150px] p-4">
          <div className="w-full h-full bg-neutral-200">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/snsM2ciMpvU?si=8FD6xB-1Z0mUZMC2"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
              className="w-full"
            ></iframe>
          </div>
        </div>
        <div className="sm:w-1/2 w-full min-h-[150px] p-4">
          <div className="w-full h-full bg-neutral-200">
            <iframe
              height="315"
              src="https://www.youtube.com/embed/snsM2ciMpvU?si=8FD6xB-1Z0mUZMC2"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Videos;
