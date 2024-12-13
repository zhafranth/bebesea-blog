"use client";

import { useGetPost } from "@/app/controller/actions/hooks";
import { Avatar, AvatarIcon, Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdOutlineComment } from "react-icons/md";
import htmlParser from "html-react-parser";
import dayjs from "dayjs";
import { Post, User, Comment } from "@prisma/client";
import useToggle from "@/utils/hooks/useToggle";
import ModalComment from "./ModalComment";

const DetailBlog = () => {
  const router = useRouter();
  const { id } = useParams();
  const pathname = usePathname();
  const { data: detail } = useGetPost(id as string);
  const { isOpen, toggle } = useToggle();

  const isPreviewPage = useMemo(
    () => pathname.includes("/preview"),
    [pathname]
  );

  const {
    title,
    cover,
    content = "",
    date,
    author,
    tags,
    comments = [],
  } = (detail as Post & { author: User; comments: Comment[] }) ?? {};

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
          unoptimized
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

      {/* Comments */}
      <div className="my-10">
        <Button
          startContent={<MdOutlineComment />}
          variant="light"
          color="warning"
          className="mb-12"
          onPress={toggle}
          isDisabled={isPreviewPage}
        >
          Write Comments
        </Button>
        {isOpen && <ModalComment toggle={toggle} />}
        {comments?.map((item, index) => (
          <div key={`comment-${index}`} className="mb-8">
            <div className="flex gap-12">
              <div className="w-12 h-12  rounded-full flex justify-center items-center text-white bg-purple-500">
                <p>{item.name.charAt(0).toUpperCase()}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-slate-500">
                  {dayjs(item.createdAt).format("DD MMM YYYY")}
                </p>
                <p className="mt-4 text-slate-600">{item.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DetailBlog;
