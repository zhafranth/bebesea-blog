import { useGetPostsList } from "@/app/actions/hooks";
import Card from "@/components/molecules/Card/Card";
import LoadingCard from "@/components/molecules/Loading/LoadingCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ListStoryFellowShip = () => {
  const { data, isLoading } = useGetPostsList({
    category: "story-fellowship",
  });
  const { data: posts = [] } = data ?? {};
  return (
    <>
      <div className="flex gap-6 justify-between flex-wrap self-baseline w-full">
        {isLoading && <LoadingCard />}
        {posts.map((item, index) => (
          <Card data={item} key={`card-${index}`} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link href="/story-fellowship">
          <Button className="bg-orange-800 text-white">See More</Button>
        </Link>
      </div>
    </>
  );
};

export default ListStoryFellowShip;
