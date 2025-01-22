"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const SlideHero = () => {
  const images = [
    "/images/hero/hero-1.jpg",
    "/images/hero/hero-2.jpg",
    "/images/hero/hero-3.jpg",
    "/images/hero/hero-4.jpg",
    "/images/hero/hero-5.jpg",
  ]; // Ganti dengan path gambar Anda

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms atau 5 detik untuk perpindahan gambar

    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, [images.length]);
  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-30 bg-gradient-to-r from-yellow-50 from-25% to-transparent to-100%">
        <div className="container flex flex-col h-full justify-center">
          <h2 className="md:text-6xl text-5xl mb-4 font-semibold md:leading-relaxed leading-[1.3]">
            For a <span className="bg-peach-500 underline">society</span> where{" "}
            <span className="bg-peach-500 underline">everyone</span>
            <br /> is <span className="bg-peach-500 underline">valued</span> as
            who they are.
          </h2>
          <p className="md:text-lg text-base md:leading-loose text-neutral-500">
            Creating a safe platform for mobilising and building intersectional{" "}
            <br /> solidarity cross-regionally in East and Southeast Asia.
          </p>
        </div>
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            width={2262}
            height={1509}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* <h2>Hellow</h2> */}
    </div>
  );
};

export default SlideHero;
