"use client";

// import Footer from "@/components/organism/Home/Footer";
import Hero from "@/components/organism/Home/Hero";
// import { InstagramFeed } from "@/components/organism/Home/InstagramFeed";
import Latest from "@/components/organism/Home/Latest";
// import Podcast from "@/components/organism/Home/Podcast/Podcast";
import Publications from "@/components/organism/Home/Publications";
import KeyResults from "@/components/organism/Home/KeyResults";
import useToggle from "@/utils/hooks/useToggle";
import Modal from "@/components/atoms/Modal/Modal";
import { useEffect } from "react";
import Image from "next/image";
// import YoutubeVideo from "@/components/organism/Home/YoutubeVideo";

export default function Home() {
  const { isOpen, toggle } = useToggle();

  useEffect(() => {
    setTimeout(() => {
      toggle();
    }, 1000);
  }, [toggle]);

  return (
    <main>
      <Hero />
      <Latest />
      <KeyResults />
      <Publications />
      {/* <YoutubeVideo /> */}
      {/* <InstagramFeed /> */}
      {/* <Podcast /> */}
      {isOpen && (
        <Modal title="" toggle={toggle} footer={[]}>
          <Image
            unoptimized
            // radius="none"
            width={2262}
            height={1509}
            src="/images/maintenance.png"
            alt="About Page"
            className="w-full h-full object-cover"
          />
          <p className="text-center font-semibold text-2xl">
            This website under development process
          </p>
        </Modal>
      )}
    </main>
  );
}
