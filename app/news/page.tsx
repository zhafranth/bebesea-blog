import CardList from "@/components/organism/CardList";
import React from "react";

const News = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <main className="container">
      <CardList data={data} label="News" />
    </main>
  );
};

export default News;
