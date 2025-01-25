"use client";

import { useGetPostsList } from "@/app/actions/hooks";
import Card from "@/components/molecules/Card/Card";
import LoadingCard from "@/components/molecules/Loading/LoadingCard";
import { Button, Link } from "@nextui-org/react";
import React from "react";

const Latest = () => {
  const { data, isLoading } = useGetPostsList({ limit: 3 });
  const { data: posts } = data ?? {};

  return (
    <section id="articles" className="container">
      <h2 className="text-center text-4xl mb-6 font-semibold text-orange-700">
        Stay Updated
      </h2>
      <div className="flex gap-x-6 justify-between flex-wrap">
        {isLoading && <LoadingCard />}
        {posts?.map((item, index) => (
          <Card key={`card-${index}`} data={item} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/articles">
          <Button color="warning" className="font-semibold text-white">
            See More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Latest;
