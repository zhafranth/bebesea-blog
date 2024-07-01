"use client";

import { BreadcrumbItem, Breadcrumbs, Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Latest from "../Home/Latest";

const DetailBlog = () => {
  const router = useRouter();
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
        How to Be Happy: 27 Habits to Add to Your Routine
      </h2>

      <div className="w-full sm:h-[400px] rounded-md overflow-hidden bg-slate-100">
        <Image
          // radius="none"
          width={2262}
          height={1509}
          src="/images/sample-cover-card.jpeg"
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
          <p className="font-semibold sm:text-lg text-base">Bebesea</p>
          <p className="font-light text-slate-400 text-sm">20 Juni 2024</p>
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
        <div className="flex-1 text-slate-700">
          <p className="mb-8 leading-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            iste quos. Sequi ex est aut modi commodi, illo quibusdam soluta
            porro. Odio dignissimos aperiam laudantium iure, praesentium
            consequuntur doloribus quisquam, veritatis, nostrum debitis
            repellat! A, perspiciatis voluptas? Enim voluptate quidem dolor quos
            architecto ducimus, vel earum error commodi, doloremque quaerat
            temporibus eius culpa nihil quis sapiente sed quasi porro. Ab
            tenetur dolore tempore possimus officiis, culpa nobis facilis
            praesentium dolorum consectetur qui earum ducimus accusamus magnam
            eveniet laborum, sed quas consequatur nemo sapiente nisi! Quo
            expedita ullam voluptas aut tempore enim omnis fuga quibusdam ipsa
            minima, nisi, at sapiente harum!
          </p>
          <p className="mb-8 leading-9">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            culpa pariatur illum tempore itaque, ex inventore. Magni repudiandae
            corrupti dolorem facilis deleniti quia omnis alias quod quo saepe
            minus deserunt voluptates neque, consectetur, repellendus numquam
            commodi maxime? Adipisci dignissimos, eaque aspernatur cum id,
            mollitia neque at deserunt sapiente aliquam nam?
          </p>
          <p className="mb-8 leading-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, delectus assumenda iusto exercitationem commodi quas
            quidem quos modi, labore libero aliquam ea consequatur iste corporis
            rem explicabo. Labore cum eum quisquam ab nihil totam voluptatibus
            corporis. Ratione necessitatibus natus cumque, iusto consectetur
            fugiat! Molestiae dolores, nobis voluptatem aliquid ratione officia
            velit iusto labore? Quis quaerat deleniti non soluta illo quas,
            quasi ex autem, quibusdam minus rem reprehenderit suscipit et at?
            Natus, ipsa aut vitae porro qui ipsam eveniet optio, deleniti
            officiis illo quaerat eligendi voluptatum cum mollitia dolore
            obcaecati tempora sint est excepturi? Harum possimus minus, quo
            magnam nam cum itaque id ex quod quasi nihil obcaecati laborum
            accusantium ipsam error optio recusandae? Debitis inventore amet
            sapiente obcaecati reprehenderit saepe harum voluptates doloremque
            voluptatem molestias at animi atque nostrum ullam tempora, dolorem
            ducimus impedit quos dolor. Esse harum officia rerum, rem recusandae
            neque? Eos rem amet quisquam deleniti obcaecati ad.
          </p>
          <p className="mb-8 leading-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            dolore tempore numquam repellendus corrupti animi, id voluptate
            libero impedit alias magni, a recusandae vero? Minima cumque porro
            facere exercitationem architecto. Facere fugiat itaque sunt numquam
            totam veniam nam eveniet? Sit aperiam quis soluta nam alias?
            Molestias, esse. Officiis repellendus ipsam consectetur, enim
            laudantium, hic, nemo quis fugit numquam distinctio totam quam
            deserunt corrupti beatae culpa voluptatem voluptatum illo nisi
            quaerat excepturi cum. Totam, labore aliquid.
          </p>
        </div>

        <div className="w-[30%] sm:block hidden ">
          <div className="flex items-center self-start gap-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
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
              <p className="font-semibold text-lg">Bebesea</p>
              <p className="font-light text-slate-400">20 Juni 2024</p>
            </div>
          </div>
          <div className="flex gap-x-4 mt-24">
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
        <Chip color="warning" variant="faded">
          Profile
        </Chip>
        <Chip color="warning" variant="faded">
          Happy
        </Chip>
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
