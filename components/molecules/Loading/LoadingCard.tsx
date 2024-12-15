import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

const LoadingCard = () => {
  const totalLoading = [1, 2, 3];
  return (
    <div className="flex gap-x-28 w-full">
      {totalLoading.map((item) => (
        <Card className="flex-1 space-y-5 p-4" radius="lg" key={item}>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300" />
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default LoadingCard;
