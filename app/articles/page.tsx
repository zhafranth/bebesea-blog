"use client";

import CardList from "@/components/organism/CardList";
import React from "react";
import { useGetPostsList } from "../actions/hooks";

const Articles = ({
  searchParams,
}: {
  searchParams: { page: number; search: string; status: string; tags: string };
}) => {
  const { tags, ...restParams } = searchParams;
  const { data, isLoading } = useGetPostsList({
    tags: tags ? JSON.parse(tags) : [],
    ...restParams,
  });
  const { data: posts = [], total = 0 } = data ?? {};

  return (
    <main className="container">
      <CardList
        isLoading={isLoading}
        data={posts}
        total={total}
        label="Articles"
      />
    </main>
  );
};

export default Articles;
