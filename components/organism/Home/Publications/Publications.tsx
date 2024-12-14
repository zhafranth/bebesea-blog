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
