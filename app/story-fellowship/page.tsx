"use client";

import CardList from "@/components/organism/CardList";
import React from "react";
import { useGetPostsList } from "../actions/hooks";

const StoryFellowship = () => {
  const { data, isLoading } = useGetPostsList({
    limit: 3,
    category: "story-fellowship",
  });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Story Fellowship"
      />
    </main>
  );
};

export default StoryFellowship;
