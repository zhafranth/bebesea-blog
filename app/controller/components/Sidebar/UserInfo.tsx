"use client";

import useProfile from "@/utils/hooks/useProfile";
import { Avatar, AvatarIcon, Button, Divider } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";
import { MdLogout } from "react-icons/md";

const UserInfo = () => {
  const { user } = useProfile();
  const { name, role } = user ?? {};
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 ">
      <div className="flex gap-x-4 items-center">
        <Avatar icon={<AvatarIcon />} isBordered className="dark" size="lg" />
        <div className="flex-1 cursor-default">
          <p className="font-bold text-slate-300">{name}</p>
          <p className="font-light capitalize">{role?.toLowerCase()}</p>
        </div>
      </div>
      <Divider className="my-6 bg-slate-600" />
      <Button
        color="primary"
        fullWidth
        radius="full"
        startContent={<MdLogout />}
        onClick={() => signOut()}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserInfo;
