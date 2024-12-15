"use client";

import { useGetInstagram } from "@/app/controller/actions/hooks";
import LoadingCard from "@/components/molecules/Loading/LoadingCard";
import TitleSection from "@/components/molecules/TitleSection";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const InstagramFeed = () => {
  const { data, isLoading } = useGetInstagram({ limit: 8 });
  const { data: posts = [] } = data ?? {};
  return (
    <section id="instagram-feed" className="container">
      <TitleSection label="Instagram Feeds" />
      <div className="flex flex-wrap">
        {isLoading && <LoadingCard />}
        {posts?.map(({ id, cover, title, url }, index) => (
          <Link href={url} target="_blank" key={id} className="h-64 w-1/4 p-4">
            <div className="w-full h-full bg-slate-200 rounded-sm overflow-hidden cursor-pointer">
              <Image
                unoptimized
                width={2262}
                height={1509}
                src={cover as string}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href={"https://www.instagram.com/bebeseaorg"} target="_blank">
          <Button
            startContent={<FaInstagram size={20} />}
            color="warning"
            radius="full"
            className="text-white"
            variant="shadow"
          >
            Follow Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default InstagramFeed;
