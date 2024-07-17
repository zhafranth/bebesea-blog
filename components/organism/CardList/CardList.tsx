import Card from "@/components/molecules/Card/Card";
import TitleSection from "@/components/molecules/TitleSection";
import { Pagination } from "@nextui-org/react";
import { Post } from "@prisma/client";
import React from "react";

const CardList = ({
  data = [],
  label,
  total,
}: {
  data: Post[];
  label: string;
  total: number;
}) => {
  return (
    <>
      <TitleSection label={label} isCenter />
      <div className="flex gap-6 justify-between flex-wrap">
        {data.map((item, index) => (
          <Card data={item} key={`card-${index}`} />
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <Pagination total={total} initialPage={1} color="warning" />
      </div>
    </>
  );
};

export default CardList;
