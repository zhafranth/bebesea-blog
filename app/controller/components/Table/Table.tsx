"use client";

import React, { useCallback } from "react";
import {
  Spinner,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  Table as TableNext,
  TableRow,
} from "@nextui-org/react";
import { BsDatabaseAdd } from "react-icons/bs";

type dataType = {
  id: string | number;
  [x: string]: any;
};

const Table = ({
  data,
  columns,
  isLoading,
}: {
  isLoading: boolean;
  data?: dataType[];
  columns: {
    key: string;
    label: string;
    width?: string;
    render?: (data?: any) => React.ReactNode | React.JSX.Element;
  }[];
}) => {
  const renderCell = useCallback(
    (data: dataType, columnKey: React.Key) => {
      const column = columns.find((item) => item.key === columnKey)?.render;
      if (column) {
        return column(data);
      }
      return <p className="text-white">{data[columnKey as keyof dataType]}</p>;
    },
    [columns]
  );

  return (
    <TableNext aria-label="Example table with dynamic content" className="mt-8">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        items={data || []}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
        emptyContent={
          <div className="flex justify-center items-center flex-col">
            <BsDatabaseAdd size={32} />
            <h1>No Data</h1>
          </div>
        }
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </TableNext>
  );
};

export default Table;
