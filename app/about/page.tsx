import TitleSection from "@/components/molecules/TitleSection";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="container mb-24">
      <div className="w-full h-[350px] overflow-hidden rounded-md">
        <Image
          src="/images/hero/hero-2.jpg"
          width={2262}
          height={1509}
          className="w-full h-full object-cover"
          alt="Hero About Page"
        />
      </div>
      <TitleSection label="About Bebesea" />
      <p className="text-xl leading-10 text-slate-600">
        BEBESEA is a network and platform of organisations and individuals
        advocating intersectional human rights in the context of people’s
        movements across East and Southeast Asia.{" "}
      </p>
      <br />
      <TitleSection label="Our Journey" />
      <p className="text-xl leading-10 text-slate-600">
        In 2018, several civil society practitioners in East and Southeast Asia
        began to work together to build and strengthen a cross-regional network
        for collective knowledge-building and advocacy on human rights that
        intersect with migration and displacement in the region. This reflected
        the increasing number of people migrating between countries in the
        region, while the rights protection of migrants and refugees seem to be
        often left behind in the national and economic interest-driven policies.
        Through co-working of a number of civil society actors across the
        region, including a workshop that gathered over 30 practitioners in
        Bangkok in 2019 to discuss and explore this cross-regional movement
        building, many like-minded actors came together to develop this idea
        into the establishment of BEBESEA (Better Engagement Between East and
        Southeast Asia).
      </p>
      <br />
      <p className="text-xl leading-10 text-slate-600">
        This joint initiative has now transformed into a collective movement
        that bridges and builds cooperation and solidarity among
        multi-stakeholders in East and Southeast Asia - regions that are so
        interconnected.
      </p>
      {/* <div className="flex sm:flex-row flex-col items-center gap-4 mb-12">
        <div className="flex-1 overflow-hidden rounded-md relative">
          <Image
            unoptimized
            // radius="none"
            width={2262}
            height={1509}
            src="/images/about-image.jpg"
            alt="About Page"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-14 left-0 right-0 backdrop-blur-sm w-[80%] mx-auto p-6 rounded-3xl">
            
          </div>
        </div>
        <div className="flex-1 leading-relaxed text-slate-600 font-light">
          <p className="mb-6">
            In 2018, several civil society practitioners in East and Southeast
            Asia began to work together to build and strengthen a cross-regional
            network for collective knowledge-building and advocacy on human
            rights that intersect with migration and displacement in the region.
            This idea is then developed into the establishment of BEBESEA
            (Better Engagement Between East and Southeast Asia), a network of
            organisations and individuals advocating for rights of migrants as
            well as cross-cutting/intersectional human rights issues in and from
            East and Southeast Asia. This joint initiative has now transformed
            into a collective movement that bridges and builds cooperation and
            solidarity among relevant actors in East and Southeast Asia -
            regions that are so interconnected.
          </p>

          <p>
            During the last few years of its development, the initiatives of
            BEBESEA have focused on building solidarity and strengthening the
            network with multi-stakeholders, developing collective knowledge
            (research), influencing policies, and public discourse through joint
            campaigns and capacity building.
          </p>
        </div>
      </div> */}
      <Divider />
      {/* <Image
        unoptimized
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
      </div> */}
      <TitleSection label="What we envision" />
      <p className="text-xl leading-10 text-slate-600 italic">
        We seek{" "}
        <span className="font-semibold">
          “a society where everyone is valued as who they are.”
        </span>{" "}
      </p>
      <p className="text-xl leading-10 text-slate-600">
        BEBESEA works to become;
      </p>
      <ul>
        <li>
          <p>
            a community for mobilising and building civil society&apos;s
            intersectional solidarity;{" "}
          </p>
        </li>
        <li>
          <p>
            a safe platform for like-minded multi-stakeholders to connect,
            co-learn and collaborate to realise people’s aspirations for East
            and Southeast Asia.
          </p>
        </li>
      </ul>

      <TitleSection label="Our Key Principles" />
      <ul className="list-disc ml-4 text-slate-600 font-light">
        <li>
          <p className="text-xl leading-10 text-slate-600">
            Meaningful participation of affected communities (i.e. migrants) -
            experiences and knowledge to be bridged and translated into policy
            dialogues;
          </p>
        </li>
        <li>
          <p className="text-xl leading-10 text-slate-600">
            Enhancing capacity of grass-roots organisations and affected
            communities on policy advocacy using international framework:
          </p>
        </li>
        <li>
          <p className="text-xl leading-10 text-slate-600">
            Multi-stakeholder engagement - solidarity building with supporters
            and allies in the sectors such as businesses, media, government,
            academia, influencer and campaigners concerning other social issues.
          </p>
        </li>
      </ul>

      <TitleSection label="How We Work" />
      <p className="text-xl leading-10 text-slate-600">
        BEBESEA Secretariat was set up in 2020 and has been hosted by
        Indonesia’s NGO Coalition for International Human Rights Advocacy or
        Human Rights Working Group (HRWG).{" "}
      </p>
    </main>
  );
};

export default About;
