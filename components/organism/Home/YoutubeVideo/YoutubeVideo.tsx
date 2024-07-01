import TitleSection from "@/components/molecules/TitleSection";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const YoutubeVideo = () => {
  return (
    <main className="container">
      <TitleSection label="Videos" />

      <div className="flex sm:flex-row flex-col gap-y-4 justify-between">
        <div className="sm:w-[45%] w-full">
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
        <div className="sm:w-[45%] w-full">
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
      <div className="flex justify-center mt-12">
        <Button
          startContent={<FaYoutube size={20} />}
          color="warning"
          radius="full"
          className="text-white"
          variant="shadow"
        >
          Bebesea Youtube
        </Button>
      </div>
    </main>
  );
};

export default YoutubeVideo;
