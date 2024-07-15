"use client";

import { STATUS_OPTIONS } from "@/app/controller/post/create-post/enums";
import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const FilterStatus = () => {
  const [status, setStatus] = useState<string | undefined>("*");
  const ALL_OPTIONS = [{ key: "*", label: "ALL" }, ...STATUS_OPTIONS];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleLink = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event?.target;
      setStatus(value);
      const params = new URLSearchParams(searchParams);
      if (!!value && value !== "*") {
        params.set("status", value as unknown as string);
        params.delete("page");
        params.delete("search");
      } else {
        params.delete("status");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams]
  );

  useEffect(() => {
    const paramsStatus = searchParams.get("status") as string;
    setStatus(paramsStatus);
  }, [searchParams]);

  return (
    <Select
      label="Filter Status"
      className="max-w-56"
      size="sm"
      labelPlacement="outside"
      placeholder="Filter Status"
      selectedKeys={[status] as string[]}
      onChange={handleLink}
    >
      {ALL_OPTIONS.map((status) => (
        <SelectItem key={status.key}>{status.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FilterStatus;
