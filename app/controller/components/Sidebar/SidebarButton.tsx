"use client";

import { cn } from "@/utils/cn";
import useProfile from "@/utils/hooks/useProfile";
import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

const SidebarButton = ({
  data,
}: {
  data: {
    path: string;
    label: string;
    icon: React.JSX.Element;
    adminOnly: boolean;
  };
}) => {
  const { path, icon, label, adminOnly } = data;

  const { user } = useProfile();

  const router = useRouter();
  const pathname = usePathname();

  const entity = useMemo(() => pathname.split("/")[2], [pathname]);

  const isActive = useMemo(() => {
    return path === entity;
  }, [path, entity]);

  if (adminOnly && user?.role !== "ADMIN") {
    return <></>;
  }

  return (
    <Button
      key={path}
      startContent={icon}
      radius="sm"
      className={cn("justify-start ", {
        "bg-slate-800 text-slate-400 hover:bg-slate-700": !isActive,
        "bg-slate-600  hover:bg-slate-500 text-white": isActive,
      })}
      onPress={() => router.push(`/controller/${path}`)}
    >
      {label}
    </Button>
  );
};

export default SidebarButton;
