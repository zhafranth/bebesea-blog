// import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mb-8 min-h-[80vh] relative flex items-center">
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          // radius="none"
          width={2262}
          height={1509}
          src="/images/bg-hero.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container flex flex-col h-full relative z-10">
        <h2 className="md:text-6xl text-5xl mb-4 font-semibold md:leading-relaxed leading-[1.3]">
          <span className="bg-peach-500 underline">Share</span>,{" "}
          <span className="bg-peach-500 underline">Connect</span> and <br />{" "}
          <span className="bg-peach-500 underline">Collaborate</span>
        </h2>
        <p className="md:text-lg text-base md:leading-loose text-neutral-500">
          Platform for sharing ideas and resources on the rights of migrants{" "}
          <br /> and their families in/from East and Southeast Asia
        </p>
        <div className="flex gap-x-4 mt-12">
          <Button
            isIconOnly
            size="lg"
            radius="full"
            className="bg-peach-500 text-white"
          >
            <FaInstagram size={20} />
          </Button>
          <Button
            isIconOnly
            size="lg"
            radius="full"
            className="bg-peach-500 text-white"
          >
            <FaFacebook size={20} />
          </Button>
          <Button
            isIconOnly
            size="lg"
            radius="full"
            className="bg-peach-500 text-white"
          >
            <FaXTwitter size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
