import { Chip } from "@nextui-org/react";
import React from "react";

const TagRole = ({ value }: { value: string }) => {
  return (
    <Chip
      variant="dot"
      color={value === "ADMIN" ? "success" : "primary"}
      size="sm"
      className="text-[10px] font-bold"
    >
      {value}
    </Chip>
  );
};

export default TagRole;
