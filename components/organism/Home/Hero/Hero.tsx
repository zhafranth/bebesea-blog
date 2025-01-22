// import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
import SlideHero from "./SlideHero";

const Hero = () => {
  return (
    <div className="mb-8 min-h-[80vh] relative flex items-center">
      <SlideHero />
    </div>
  );
};

export default Hero;
