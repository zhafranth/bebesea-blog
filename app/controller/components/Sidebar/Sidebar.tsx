import { Button, Spacer } from "@nextui-org/react";
import React from "react";
import { SIDEBAR_ENUM } from "./Sidebar.enum";
import UserInfo from "./UserInfo";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <div className="w-[260px] h-screen bg-slate-900 text-slate-500 p-6 relative overflow-hidden">
      <div className="flex gap-2">
        <p className="text-3xl font-semibold text-slate-200">Bebesea.</p>
        <span className="bg-yellow-200 self-start text-xs p-[2px] rounded-sm text-slate-950">
          Admin
        </span>
      </div>
      <Spacer y={16} />
      <div className="flex flex-col gap-y-4">
        {SIDEBAR_ENUM.map((item, index) => (
          <SidebarButton data={item} key={`button-${index}`} />
        ))}
      </div>
      <UserInfo />
    </div>
  );
};

export default Sidebar;
