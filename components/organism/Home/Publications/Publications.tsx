import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Publications = () => {
  return (
    <div className="mt-12 bg-[#385653] py-12 overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col flex-1 md:w-1/2">
          <h2 className="text-3xl bg-orange-700 text-white inline-block self-baseline">
            Publications
          </h2>
          <p className="text-xl md:text-5xl font-semibold text-white my-4 md:leading-[55px]">
            Toolkit for Media Campaign by Migrant, Displaced and Stateless
            Communities: A Helpful Guide to Start Your Own Media Campaign!
          </p>
          <Link href="/publications/edd4b6f0-f130-4354-aae9-36dfd8e87a74">
            <Button className="self-baseline bg-white text-orange-700 font-semibold">
              See More
            </Button>
          </Link>
        </div>
        <div className="hidden md:block absolute right-0 top-[-25%] w-1/2  items-center justify-center overflow-hidden rounded-lg">
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
    </div>
  );
};

export default Publications;
