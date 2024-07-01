import CardList from "@/components/organism/CardList";
import React from "react";

const Event = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <main className="container">
      <CardList data={data} label="Events" />
    </main>
  );
};

export default Event;
