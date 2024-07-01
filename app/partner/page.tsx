import TitleSection from "@/components/molecules/TitleSection";
import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <main className="container">
      <TitleSection isCenter label="Partnership & Collaboration Model" />
      <div className="my-12 flex flex-col gap-y-8 leading-loose">
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
      <Image
        // radius="none"
        width={2262}
        height={1509}
        src="/images/partner-image.png"
        alt="About Page"
        className="w-full h-full object-cover"
      />
    </main>
  );
};

export default Partner;
