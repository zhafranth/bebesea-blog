"use client";

import React, { useMemo } from "react";
import Table from "../components/Table";
import { useParams } from "next/navigation";
import { ENUMS } from "./controller.enum";
import { useGetTableList } from "../actions/hooks";

const ControllerList = () => {
  const { entity } = useParams<{ entity: string }>();
  const { data } = useGetTableList(entity);

  const { columns, label, extendButton } =
    useMemo(() => {
      return ENUMS.find((item) => item.key === entity);
    }, [entity]) || {};

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <p className="capitalize text-3xl font-bold text-slate-800">{label}</p>
        {extendButton}
      </div>
      <Table columns={columns || []} isLoading={false} data={data} />
    </div>
  );
};

export default ControllerList;
