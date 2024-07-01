import TitleSection from "@/components/molecules/TitleSection";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const Podcast = () => {
  return (
    <main className="container">
      <TitleSection label="Podcast" />
      <div className="flex flex-col sm:flex-row gap-y-2 items-center gap-x-5">
        <div className="h-[600px] w-full rounded-2xl overflow-hidden bg-neutral-400 relative text-white">
          <Image
            // radius="none"
            width={2262}
            height={1509}
            src="/images/podcast-cover.png"
            alt="Podcast Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-16 left-0 right-0 w-[80%] mx-auto backdrop-blur-md z-20 p-4 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4">Voicesea Podcast</h2>
            <p className="font-extralight text-sm">
              Voicesea is a podcast dedicated to highlighting the human rights
              issues across East and Southeast Asia from the perspectives of
              civil society.{" "}
            </p>
            <Button
              color="warning"
              radius="full"
              className="text-white mt-12"
              startContent={<FaPlay />}
            >
              Listen our Podcast
            </Button>
          </div>
        </div>
        <iframe
          style={{
            borderRadius: "12px",
          }}
          src="https://open.spotify.com/embed/episode/04RpViTHRdEbylRxmdM3yi?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </main>
  );
};

export default Podcast;
