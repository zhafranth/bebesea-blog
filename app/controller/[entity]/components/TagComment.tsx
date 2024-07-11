import { Chip } from "@nextui-org/react";
import React from "react";

const TagComment = ({ value }: { value: boolean }) => {
  return (
    <Chip
      size="sm"
      className="text-[10px] font-bold"
      color={value ? "primary" : "default"}
    >
      {value ? "Show" : "Hide"}
    </Chip>
  );
};

export default TagComment;
