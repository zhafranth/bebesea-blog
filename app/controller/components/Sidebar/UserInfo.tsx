import { Avatar, Button, Divider } from "@nextui-org/react";
import React from "react";
import { MdLogout } from "react-icons/md";

const UserInfo = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 ">
      <div className="flex gap-x-4 items-center">
        <Avatar
          src="/images/profile-sample.jpg"
          isBordered
          className="dark"
          size="lg"
        />
        <div className="flex-1 cursor-default">
          <p className="font-bold text-slate-300">Super Admin</p>
          <p className="font-light">Admin</p>
        </div>
      </div>
      <Divider className="my-6 bg-slate-600" />
      <Button
        color="primary"
        fullWidth
        radius="full"
        startContent={<MdLogout />}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserInfo;
