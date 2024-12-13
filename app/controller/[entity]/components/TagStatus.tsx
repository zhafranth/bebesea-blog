import { Chip } from "@nextui-org/react";
import React, { useMemo } from "react";
import { STATUS_OPTIONS } from "../../post/create-post/enums";
import { ColorType } from "../../actions/interface";

const TagStatus = ({ value }: { value: string }) => {
  const { label, color } =
    useMemo(() => STATUS_OPTIONS.find((item) => item.key === value), [value]) ||
    {};
  return (
    <Chip
      size="sm"
      className="text-[10px] font-bold"
      variant="flat"
      color={color as ColorType}
    >
      {label}
    </Chip>
  );
};

export default TagStatus;
