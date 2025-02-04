import TitleSection from "@/components/molecules/TitleSection";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import importedData from "./data.json";

const Team = () => {
  const { data = [] } = importedData;
  return (
    <main className="container">
      <TitleSection isCenter label="Bebesea Secretariat" />
      <div className="flex flex-col gap-y-4 leading-loose">
        <p>
          The Secretariat is the hub and driving engine of our cross-regional
          network and its initiatives, overseeing advocacy and campaigning
          activities, cross-regional communications strategy, and other efforts
          in coordination with civil society networks.
        </p>
        <p>
          The Secretariat mobilizes our cross-regional civil society network,
          partner organizations and institutions to ensure the effectiveness,
          independence, and accessibility of joint advocacy and responds to
          urgent local, regional and international developments.
        </p>
        <p>
          The Secretariat is currently hosted by HRWG Indonesia, with the
          support of the Sasakawa Peace Foundation in Japan.
        </p>
        <p> Meet the BEBESEA Secretariat:</p>
      </div>
      <div className="flex flex-wrap my-20">
        {data.map(({ description, image, jobs, name, position }, index) => (
          <div className="md:w-4/12 w-full p-2 pb-8 " key={`team-${index}`}>
            <div className="w-full h-full text-center ">
              <div className="w-[300px] h-[300px] overflow-hidden flex mx-auto mb-2  rounded-lg">
                <Image
                  unoptimized
                  width={2262}
                  height={1509}
                  src={image}
                  alt={`${name} Photo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold">{name}</h4>
              {jobs && (
                <p className="text-medium text-slate-600 font-light">{jobs}</p>
              )}
              {position && <p className="text-sm text-slate-600">{position}</p>}
              <Tooltip
                delay={1000}
                content={<div className="w-[300px]">{description}</div>}
              >
                <p className="line-clamp-5 text-sm leading-loose font-light text-slate-400 cursor-default">
                  {description}
                </p>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>

      <TitleSection isCenter label="Bebesea Steering Committee" />
      <p className="mb-4">
        The Steering Committee supports the secretariat as its advisory body.
        The main purpose of the committee is to develop strategies on advocacy,
        organisational principles and policies, network development and
        fundraising and to provide management guidance and advice to the
        secretariat.
      </p>
      <p className="mb-2">Here are the BEBESEA Steering Committee:</p>
      <ul className="list-disc ml-4 text-slate-600 font-light">
        <li>
          <p>Anderson Villa</p>
          <p>Mindanao State University, General Santos City</p>
        </li>
        <li>
          <p>Fajar Santoadi</p>
          <p>Tenaganita</p>
        </li>
        <li>
          <p>Fifi Ng</p>
          <p>Migrant Solidarity Committee, Autonomous 8a</p>
        </li>
        <li>
          <p>Jotaro Kato</p>
          <p>Waseda University</p>
        </li>
        <li>
          <p>Lennon Ying-Dah Wong</p>
          <p>Serve the People Association, Taoyuan (SPA)</p>
        </li>
      </ul>
    </main>
  );
};

export default Team;
