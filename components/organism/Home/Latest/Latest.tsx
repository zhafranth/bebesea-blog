import Card from "@/components/molecules/Card/Card";
import TitleSection from "@/components/molecules/TitleSection";
import React from "react";

const Latest = () => {
  const data = [1, 2, 3];
  return (
    <section id="articles" className="container">
      <TitleSection label="Latest Articles" />
      <div className="flex gap-x-6 justify-between flex-wrap">
        {data.map((item, index) => (
          <Card key={`card-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Latest;
