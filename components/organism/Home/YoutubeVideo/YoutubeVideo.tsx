"use client";

import { useGetVideos } from "@/app/controller/actions/hooks";
import TitleSection from "@/components/molecules/TitleSection";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const YoutubeVideo = () => {
  const { data } = useGetVideos({ limit: 2 });
  const { data: list = [] } = data ?? {};
  return (
    <main className="container">
      <TitleSection label="Videos" />

      <div className="flex sm:flex-row flex-col gap-y-4 justify-between">
        {list?.map((item, index) => (
          <div className="sm:w-[45%] w-full" key={`video-${index}`}>
            <iframe
              height="315"
              src={item.url}
              title={item.title}
              aria-label={item.title}
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
              className="w-full"
            ></iframe>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href={"https://www.youtube.com/@bebeseaorg"} target="_blank">
          <Button
            startContent={<FaYoutube size={20} />}
            color="warning"
            radius="full"
            className="text-white"
            variant="shadow"
          >
            Bebesea Youtube
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default YoutubeVideo;
