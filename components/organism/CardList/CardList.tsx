"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import Card from "@/components/molecules/Card/Card";
import LoadingCard from "@/components/molecules/Loading/LoadingCard";
import TitleSection from "@/components/molecules/TitleSection";
import { Post } from "@prisma/client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const CardList = ({
  data = [],
  label,
  total,
  isLoading,
  isCenter = true,
}: {
  data: Post[];
  label: string;
  total: number;
  isLoading?: boolean;
  isCenter?: boolean;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangePage = useCallback(
    (value: number) => {
      setCurrentPage(value);
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("page", value as unknown as string);
      } else {
        params.delete("page");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams]
  );

  useEffect(() => {
    if (searchParams.get("page")) {
      setCurrentPage(parseInt(searchParams.get("page") as string));
    }
  }, [searchParams]);

  return (
    <>
      <TitleSection label={label} isCenter={isCenter} />
      <div className="flex gap-6 justify-between flex-wrap">
        {isLoading && <LoadingCard />}
        {data.map((item, index) => (
          <Card data={item} key={`card-${index}`} />
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <Pagination
          total={Math.ceil(total / 15)}
          page={currentPage}
          color="warning"
          onChange={handleChangePage}
        />
      </div>
    </>
  );
};

export default CardList;
