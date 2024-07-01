import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Auth = () => {
  return (
    <main id="auth">
      <div className="flex h-screen box-border">
        <div className="sm:block hidden flex-1 overflow-hidden">
          <Image
            // radius="none"
            width={2262}
            height={1509}
            src="/images/bg-auth.jpg"
            alt="About Bebesea"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 px-12 py-28">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-slate-800">
              Welcome Back to Bebesea
            </h2>
            <p className="text-slate-500 mt-6">
              Enter the field below to get started
            </p>
          </div>
          <div className="flex flex-col gap-y-10 my-24 sm:w-2/3 w-5/6 mx-auto">
            <Input
              label="Username"
              labelPlacement="outside"
              type="text"
              placeholder="Username"
              endContent={<FaUser />}
            />
            <Input
              label="Password"
              labelPlacement="outside"
              type="password"
              placeholder="Password"
              endContent={<RiLockPasswordFill />}
            />
            <Button
              color="warning"
              radius="full"
              className="text-white w-full mt-14"
            >
              Login
            </Button>
            <div className="w-full justify-center flex">
              <Link href="/" className="text-xs" color="warning">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
