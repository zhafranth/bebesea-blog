"use client";

import { useGetPostsList } from "@/app/actions/hooks";
import Card from "@/components/molecules/Card/Card";
import LoadingCard from "@/components/molecules/Loading/LoadingCard";
import TitleSection from "@/components/molecules/TitleSection";
import React from "react";

const Latest = () => {
  const { data, isLoading } = useGetPostsList({ limit: 3 });
  const { data: posts } = data ?? {};

  return (
    <section id="articles" className="container">
      <TitleSection label="Latest Articles" />
      <div className="flex gap-x-6 justify-between flex-wrap">
        {isLoading && <LoadingCard />}
        {posts?.map((item, index) => (
          <Card key={`card-${index}`} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Latest;
