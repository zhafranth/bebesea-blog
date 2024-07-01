import TitleSection from "@/components/molecules/TitleSection";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Publications = () => {
  return (
    <div className="container my-12">
      <TitleSection label="Publications" />
      <div className="w-full min-h-[550px] bg-neutral-300 rounded-3xl overflow-hidden flex sm:flex-row flex-col">
        <div className="flex-1 p-12 bg-gradient-to-bl from-amber-900 via-amber-800 to-amber-600 text-white">
          <p className="sm:text-4xl text-2xl mb-4 line-clamp-5">
            Short Stories Anthology by Indonesian Migrant Workers in Japan
            “Morotomo” – Compiled by Anastasya W. Hasyim, BEBESEA Story Fellow
          </p>
          <Divider className="bg-white my-5" />
          <p className="text-sm font-light leading-loose line-clamp-6 sm:line-clamp-none">
            “Morotomo” (もろとも), an anthology of short stories by Indonesian
            migrant workers in Japan has been launched. Anastasya Wulandari
            Hasyim, BEBESEA Story Fellow conducted a Short Story Contest for
            Indonesian Migrant Workers on a platform established by her called
            Iza Migrant Rights (@izamigrantrights), and compiled selected 15
            best stories into this anthology book as a part of the fellowship
            program.
          </p>
          <Button
            className="text-white mt-4"
            radius="full"
            variant="ghost"
            color="warning"
            startContent={<IoIosArrowRoundForward />}
          >
            Read
          </Button>
        </div>
        <div className="flex-1 p-12 bg-yellow-50">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              // radius="none"
              width={2262}
              height={1509}
              src="/images/publication-cover-sample.jpeg"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
