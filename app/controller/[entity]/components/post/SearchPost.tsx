"use client";

import { Input } from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchPost = () => {
  const [searchName, setsearchName] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleLink = useCallback(
    (value?: string) => {
      setsearchName(value);
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("search", value as unknown as string);
        params.delete("page");
      } else {
        params.delete("search");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams]
  );

  const handleChangeSeach = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setsearchName(event.target.value);
    },
    []
  );

  const handleSearch = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        handleLink(searchName);
      }
      if (event.type === "click") {
        handleLink(searchName);
      }
    },
    [handleLink, searchName]
  );

  useEffect(() => {
    const paramsStatus = searchParams.get("search") as string;
    setsearchName(paramsStatus);
  }, [searchParams]);

  return (
    <Input
      size="sm"
      type="text"
      label="Search"
      placeholder="Title Post"
      labelPlacement="outside"
      className="w-3/12"
      endContent={
        <FaSearch className="text-default-400 pointer-events-none flex-shrink-0" />
      }
      onChange={handleChangeSeach}
      value={searchName}
      onKeyDown={handleSearch}
    />
  );
};

export default SearchPost;
