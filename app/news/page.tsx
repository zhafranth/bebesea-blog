"use client";

import CardList from "@/components/organism/CardList";
import React from "react";
import { useGetPostsList } from "../actions/hooks";

const News = () => {
  const { data, isLoading } = useGetPostsList({ limit: 3, category: "news" });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList isLoading={isLoading} data={posts} total={total} label="News" />
    </main>
  );
};

export default News;
