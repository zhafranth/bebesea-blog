"use client";

import { useGetPost } from "@/app/controller/actions/hooks";
import { Avatar, AvatarIcon, Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import htmlParser from "html-react-parser";
import dayjs from "dayjs";
import { Post, User } from "@prisma/client";

const DetailBlog = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data: detail } = useGetPost(id as string);

  const {
    title,
    cover,
    content = "",
    date,
    author,
    tags,
  } = (detail as Post & { author: User }) ?? {};
  const { name } = author ?? {};

  return (
    <main className="container my-8">
      <Button
        startContent={<MdKeyboardArrowLeft />}
        variant="light"
        color="warning"
        onClick={() => router.back()}
      >
        Kembali
      </Button>
      <h2 className="sm:text-6xl text-4xl font-semibold text-slate-800 sm:my-12 my-8">
        {title}
      </h2>

      <div className="w-full sm:h-[550px] rounded-md overflow-hidden bg-slate-100">
        <Image
          // radius="none"
          width={2262}
          height={1509}
          src={cover || "/images/sample-cover-card.jpeg"}
          alt="Hero Detail Blog"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex sm:hidden items-center self-start gap-x-2 mt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            // radius="none"
            width={2262}
            height={1509}
            src="/images/profile-sample.jpg"
            alt="Profile User"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="font-semibold sm:text-lg text-base">{name}</p>
          <p className="font-light text-slate-400 text-sm">
            {dayjs(date).format("DD MMM YYYY")}
          </p>
        </div>

        <div className="flex gap-x-4 ml-auto">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            radius="full"
            color="warning"
            // className="bg-yellow-500 text-white"
          >
            <FaInstagram size={14} />
          </Button>
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            radius="full"
            color="warning"
            // className="bg-yellow-500 text-white"
          >
            <FaFacebook size={14} />
          </Button>
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            radius="full"
            color="warning"
            // className="bg-yellow-500 text-white"
          >
            <FaXTwitter size={14} />
          </Button>
        </div>
      </div>

      <div className="flex gap-12 my-8">
        <div className="flex-1 text-blue-700">
          {htmlParser(content as string)}
        </div>

        <div className="w-[30%] sm:block hidden ">
          <div className="flex items-center self-start gap-x-4">
            <div className="flex items-center">
              <Avatar
                size="lg"
                icon={<AvatarIcon />}
                classNames={{
                  base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                  icon: "text-black/80",
                }}
              />
            </div>
            <div>
              <p className="font-semibold text-lg">{name}</p>
              <p className="font-light text-slate-400">
                {dayjs(date).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 mt-16">
            <Button
              isIconOnly
              size="lg"
              variant="flat"
              radius="full"
              color="warning"
              // className="bg-yellow-500 text-white"
            >
              <FaInstagram size={18} />
            </Button>
            <Button
              isIconOnly
              size="lg"
              variant="flat"
              radius="full"
              color="warning"
              // className="bg-yellow-500 text-white"
            >
              <FaFacebook size={18} />
            </Button>
            <Button
              isIconOnly
              size="lg"
              variant="flat"
              radius="full"
              color="warning"
              // className="bg-yellow-500 text-white"
            >
              <FaXTwitter size={18} />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        {tags?.split(",").map((item, index) => (
          <Chip key={index} color="warning" variant="faded">
            {item}
          </Chip>
        ))}
      </div>

      <div className="my-10">
        <div>
          <div className="flex gap-12">
            <div className="w-12 h-12  rounded-full flex justify-center items-center text-white bg-purple-500">
              <p>A</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-lg">Ahmad</p>
              <p className="text-sm text-slate-500">20 Juni 2021</p>
              <p className="mt-4 text-slate-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
                animi consequatur alias, iure blanditiis dolores quisquam
                voluptatum quasi nesciunt numquam esse repellendus sunt,
                reiciendis obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailBlog;
