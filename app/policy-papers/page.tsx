"use client";

import React from "react";
import { useGetPostsList } from "../actions/hooks";
import dynamic from "next/dynamic";

const CardList = dynamic(() => import("@/components/organism/CardList"), {
  ssr: false,
});

const PolicyPapers = () => {
  const { data, isLoading } = useGetPostsList({
    limit: 3,
    tags: ["policy-papers"],
  });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Policy Papers"
      />
    </main>
  );
};

export default PolicyPapers;
