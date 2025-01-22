import TitleSection from "@/components/molecules/TitleSection";
import Image from "next/image";
import React from "react";
import { PARTNERS } from "./Partner.enum";

const Partner = () => {
  return (
    <main className="container mb-24">
      <TitleSection isCenter label="Partnership & Collaboration Model" />
      <div className="my-12 flex flex-col gap-y-8 text-xl leading-10 text-slate-600">
        <p>
          The initiative works closely and collaboratively with a range of
          different actors and organizations in the migration and human rights
          sphere in East and Southeast Asia as well as globally. These actors
          include CSOs, activists, academia, as well as the broader network of
          governments, the UN, regional organizations, the media, and many other
          institutions, to advance the effectiveness, independence, and
          accessibility of the human rights for migrants.
        </p>
        <p>
          Our unique collaboration model is designed to maximize the expertise
          and impact of our network and partners. We share information and
          resources, knowledge to strategize jointly, and campaign together to
          amplify voices to affect changes.
        </p>
      </div>

      <ol className="list-decimal">
        {PARTNERS.map((item, index) => (
          <li key={index}>
            <p className="text-xl leading-10 text-slate-600">{item}</p>
          </li>
        ))}
      </ol>
    </main>
  );
};

export default Partner;
