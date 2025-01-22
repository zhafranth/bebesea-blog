import TitleSection from "@/components/molecules/TitleSection";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Publications = () => {
  return (
    <div className="mt-12 bg-[#385653] py-12 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col w-1/2">
          <h2 className="text-3xl bg-orange-700 text-white inline-block self-baseline">
            Publications
          </h2>
          <p className="text-5xl text-white my-4 leading-[55px]">
            Research Report – Navigating the Currents: The Transnational
            Challenges of Migrant Fishers from Southeast Asia (2024)
          </p>
          <Button className="self-baseline bg-white text-orange-700 font-semibold">
            See More
          </Button>
        </div>
        <div className="absolute right-0 top-[-25%] w-1/2  items-center justify-center overflow-hidden rounded-lg">
          <Image
            // radius="none"
            width={4262}
            height={4262}
            src="/images/publications-cover.png"
            alt="Hero Background"
            className="w-full object-cover transform scale-110"
          />
        </div>
      </div>
      {/* <TitleSection label="Publications" />
      <div className="w-full min-h-[550px] bg-neutral-300 rounded-3xl overflow-hidden flex sm:flex-row flex-col">
        <div className="flex-1 p-12 bg-gradient-to-bl from-amber-900 via-amber-800 to-amber-600 text-white">
          <p className="sm:text-4xl text-2xl mb-4 line-clamp-5">
            Research Report – Navigating the Currents: The Transnational
            Challenges of Migrant Fishers from Southeast Asia (2024)
          </p>
          <Divider className="bg-white my-5" />
          <p className="text-sm font-light leading-loose line-clamp-6 sm:line-clamp-none">
            This report, led by a research team of Paramadina University, is
            produced by BEBESEA as part of our advocacy efforts to contribute to
            the development of the above mentioned ASEAN Guideline, following
            the adaptation of the ASEAN Declaration on the Placement and
            Protection of Migrant Fishers in May 2024. This report provides an
            in-depth background analysis to complement the “Policy Paper:
            Proposal by the Regional Civil Society Consultation for the ASEAN
            Guideline on the Placement and Protection of Migrant Fishers and
            Their Families” which was consolidated by BEBESEA and the Human
            Rights Working Group Indonesia (HRWG) in October 2023.
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
          <div className="w-full items-center justify-center bg-blue-50 overflow-hidden rounded-lg">
            <Image
              // radius="none"
              width={4262}
              height={4262}
              src="/images/publications-cover.png"
              alt="Hero Background"
              className=""
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Publications;
