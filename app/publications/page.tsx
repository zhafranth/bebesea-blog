"use client";

import CardList from "@/components/organism/CardList";
import React from "react";
import { useGetPostsList } from "../actions/hooks";

const Publication = () => {
  const { data } = useGetPostsList({ limit: 3, category: "publications" });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList data={posts} total={total} label="Publication" />
    </main>
  );
};

export default Publication;
