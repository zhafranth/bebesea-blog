"use client";

import React from "react";
import { useGetPostsList } from "../actions/hooks";
import dynamic from "next/dynamic";

const CardList = dynamic(() => import("@/components/organism/CardList"), {
  ssr: false,
});

const ToolsResources = () => {
  const { data, isLoading } = useGetPostsList({
    limit: 3,
    tags: ["tools-resources"],
  });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Tools Resources"
      />
    </main>
  );
};

export default ToolsResources;
