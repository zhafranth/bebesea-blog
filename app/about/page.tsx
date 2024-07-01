import TitleSection from "@/components/molecules/TitleSection";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="container">
      <TitleSection isCenter label="About Bebesea" />
      <div className="flex sm:flex-row flex-col items-center gap-4 mb-12">
        <div className="flex-1 overflow-hidden rounded-md relative">
          <Image
            // radius="none"
            width={2262}
            height={1509}
            src="/images/about-image.jpg"
            alt="About Page"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-14 left-0 right-0 backdrop-blur-sm w-[80%] mx-auto p-6 rounded-3xl">
            <h2 className="sm:text-2xl text-sm font-semibold italic text-slate-800">
              <span className="bg-yellow-600 text-white">BEBESEA</span> is a
              cross-regional network and platform advocating migrants, their
              families and supporters in/from East and Southeast Asia to share
              ideas and resources on migration and cross-cutting human rights
              issues.
            </h2>
          </div>
        </div>
        <div className="flex-1 leading-relaxed text-slate-600 font-light">
          <p className="mb-6">
            Share, connect and collaborate: BEBESEA initiative is aimed at
            building stronger network and collaboration among individuals and
            civil society actors in/from East and Southeast Asia
            cross-regionally to advocate for better protection of human rights
            and inclusive and safe governance of migration.
          </p>

          <p>
            BEBESEA is a network of organisations and individuals advocating for
            rights of migrants in and from East and Southeast Asia as well as
            cross-cutting/intersectional human rights issues in the regions.
          </p>
        </div>
      </div>
      <Divider />
      <Image
        // radius="none"
        width={2262}
        height={1509}
        src="/images/about.jpg"
        alt="About Bebesea"
        className="w-full h-full object-cover"
      />
      <div className="flex gap-8 flex-col mt-12 leading-loose">
        <p>
          The development of this network started in 2018 and the first
          co-creating workshop was held in 2019 in Bangkok, where civil society
          actors from East and Southeast Asia gathered to share knowledge and
          experience and brainstormed the ideas for cross-regional advocacy
          work. BEBESEA works on research and knowledge building, content
          production for awareness raising, regional advocacy and campaigns, and
          continues to expand the network of solidarity among multi-stakeholders
          across the regions.
        </p>
        <p>
          Anyone is welcome to join our interactive{" "}
          <span className="text-amber-500 cursor-pointer">facebook group</span>{" "}
          for exchanges of information and resources as well as discussions on
          any related issues.
        </p>
        <p>
          This website serves as a depository of resources on migration and
          related human rights issues in East and Southeast Asia, particularly
          of local civil society initiatives.{" "}
        </p>
        <p>
          Follow our social media platforms @bebeseaorg for latest information
          and updates. BEBESEA also host{" "}
          <span className="text-amber-500 cursor-pointer">
            Voicesea Podcast{" "}
          </span>{" "}
          available on major podcast platforms.{" "}
        </p>
        <p>
          The secretariat is currently hosted by{" "}
          <span className="text-amber-500 cursor-pointer">
            Human Rights Working Group Indonesia (HRWG)
          </span>{" "}
          with the support of the{" "}
          <span className="text-amber-500 cursor-pointer">
            Sasakawa Peace Foundation (SPF)
          </span>
          .
        </p>
        <p className="italic text-slate-500">
          “We strive to build a society where human rights of migrants and their
          families are upheld, respected, protected and fulfilled regardless of
          their race, nationalities, gender, age, and administrative/immigration
          statuses.”
        </p>
      </div>
    </main>
  );
};

export default About;
