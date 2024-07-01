import Card from "@/components/molecules/Card/Card";
import TitleSection from "@/components/molecules/TitleSection";
import { Pagination } from "@nextui-org/react";
import React from "react";

const CardList = ({ data = [], label }: { data: number[]; label: string }) => {
  return (
    <>
      <TitleSection label={label} isCenter />
      <div className="flex gap-6 justify-between flex-wrap">
        {data.map((item, index) => (
          <Card key={`card-${index}`} />
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <Pagination total={10} initialPage={1} color="warning" />
      </div>
    </>
  );
};

export default CardList;
