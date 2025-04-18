"use client";

import React from "react";
import { useGetPostsList } from "../actions/hooks";
import dynamic from "next/dynamic";

const CardList = dynamic(() => import("@/components/organism/CardList"), {
  ssr: false,
});

const Event = ({
  searchParams,
}: {
  searchParams: { page: number; search: string; status: string; tags: string };
}) => {
  const { page } = searchParams;
  const { data, isLoading } = useGetPostsList({
    limit: 15,
    page,
    category: "event",
  });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Events"
      />
    </main>
  );
};

export default Event;
