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
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Articles"
        isCenter={false}
      />
    </main>
  );
};

export default Story;
