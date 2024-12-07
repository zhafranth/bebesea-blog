"use client";

import React, { useMemo } from "react";
import Table from "../components/Table";
import { useParams } from "next/navigation";
import { ENUMS } from "./controller.enum";
import { useGetTableList } from "../actions/hooks";

const ControllerList = ({
  searchParams,
}: {
  searchParams: { page: number; search: string; status: string };
}) => {
  const { entity } = useParams<{ entity: string }>();
  const { data, isLoading } = useGetTableList(entity, searchParams);
  const { data: list = [], total = 0 } = data ?? {};

  const { columns, label, extendButton, topComponents } =
    useMemo(() => {
      return ENUMS.find((item) => item.key === entity);
    }, [entity]) || {};

  console.log("list:", list);

  return (
    <div className="p-8">
      <div className="flex justify-between mb-4">
        <p className="capitalize text-3xl font-bold text-slate-800">{label}</p>
        {extendButton}
      </div>
      {topComponents && <div className="w-full mb-4">{topComponents}</div>}
      <Table
        columns={columns || []}
        isLoading={isLoading}
        data={list}
        isPagination={entity === "post"}
        total={total}
      />
    </div>
  );
};

export default ControllerList;
