"use client";

import CardList from "@/components/organism/CardList";
import React from "react";
import { useGetPostsList } from "../actions/hooks";

const Event = () => {
  const { data } = useGetPostsList({ limit: 3, category: "event" });
  const { data: posts = [], total = 0 } = data ?? {};
  return (
    <main className="container">
      <CardList data={posts} total={total} label="Events" />
    </main>
  );
};

export default Event;
