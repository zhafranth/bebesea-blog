"use client";

import CardList from "@/components/organism/CardList";
import React from "react";
import { useGetPostsList } from "../actions/hooks";

const Publication = () => {
  const { data, isLoading } = useGetPostsList({
    limit: 3,
    category: "publications",
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

export default Publication;
