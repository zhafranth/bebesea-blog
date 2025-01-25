"use client";

import React from "react";
import { useGetPostsList } from "../actions/hooks";
import Image from "next/image";
import ListStoryFellowShip from "./components/ListStoryFellowShip";
import dynamic from "next/dynamic";

const CardList = dynamic(() => import("@/components/organism/CardList"), {
  ssr: false,
});

const Story = ({
  searchParams,
}: {
  searchParams: { page: number; search: string; status: string; tags: string };
}) => {
  const { page = 1 } = searchParams;
  const { data, isLoading } = useGetPostsList({
    category: "story",
    page,
  });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main>
      <div className="min-h-[70vh] bg-orange-700">
        <div className="container py-12 text-center flex flex-col gap-y-5 justify-center items-center">
          <h2 className="text-3xl md:text-6xl font-semibold text-white">
            Story Fellowship
          </h2>
          <div className="w-full transform scale-75 md:scale-100 md:w-1/3 h-[260px] md:h-[350px] overflow-hidden">
            <Image
              src="/images/story-bg.png"
              width={2262}
              height={2262}
              className="h-full object-cover"
              alt="Hero About Page"
            />
          </div>
          <p className="text-white">
            Since 2021, the Story Fellowship program has been a program to give
            back power to the marginalised communities with a chance to tell
            their own stories by publishing stories that highlight voices,
            concerns, and aspirations from the communities. We partner with New
            Naratif to conduct capacity building for our selected fellows in the
            form of a Story Fellowship grant and mentoring for communities in
            the regions.
          </p>
          <ListStoryFellowShip />
        </div>
      </div>
      <div className="container">
        <CardList
          isLoading={isLoading}
          data={posts}
          total={total}
          label="Our Other Stories"
          isCenter={false}
        />
      </div>
    </main>
  );
};

export default Story;
