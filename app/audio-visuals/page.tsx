"use client";

import React from "react";
import { useGetPostsList } from "../actions/hooks";
import dynamic from "next/dynamic";

const CardList = dynamic(() => import("@/components/organism/CardList"), {
  ssr: false,
});

const AudioVisuals = () => {
  const { data, isLoading } = useGetPostsList({
    limit: 3,
    tags: ["audio-visuals"],
  });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Audio Visuals"
      />
    </main>
  );
};

export default AudioVisuals;
