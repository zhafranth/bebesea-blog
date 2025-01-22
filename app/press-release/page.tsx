"use client";

import CardList from "@/components/organism/CardList";
import React from "react";
import { useGetPostsList } from "../actions/hooks";

const PressRelease = () => {
  const { data, isLoading } = useGetPostsList({
    limit: 3,
    category: "articles",
  });
  const { data: posts = [], total = 0 } = data ?? {};

  return (
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Press Release"
      />
    </main>
  );
};

export default PressRelease;
