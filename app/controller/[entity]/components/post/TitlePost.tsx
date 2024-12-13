import { Tooltip } from "@nextui-org/react";
import React from "react";

const TitlePost = ({ title }: { title: string }) => {
  return (
    <Tooltip content={title} className="cursor-default">
      <p className="line-clamp-1 text-xs cursor-default">{title}</p>
    </Tooltip>
  );
};

export default TitlePost;
