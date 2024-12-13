"use client";

import { Button, Input, Link } from "@nextui-org/react";
import { useForm } from "@tanstack/react-form";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Auth = () => {
  const router = useRouter();

  const form = useForm<{ username: string; password: string }>({
    onSubmit: async ({ value }) => {
      const response = await signIn("credentials", {
        ...value,
        redirect: false,
      });
      if (response?.error) {
        const key = response?.error.includes("Username")
          ? "username"
          : "password";
        form.setFieldMeta(key, (prevMeta) => ({
          ...prevMeta,
          errorMap: {
            onSubmit: response?.error,
          },
        }));
      } else {
        router.push("/controller/post");
      }
    },
  });

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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
            >
              <form.Field
                name="username"
                validators={{
                  onChange: ({ value }) =>
                    !value ? "This field is required" : undefined,
                }}
              >
                {(field) => {
                  return (
                    <Input
                      name={field.name}
                      value={field.state.value as string}
                      label="Username"
                      placeholder="Input Username"
                      labelPlacement="outside"
                      radius="sm"
                      isInvalid={field.state.meta.errors.length > 0}
                      errorMessage={field.state.meta.errors[0]}
                      endContent={<FaUser />}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  );
                }}
              </form.Field>
              <form.Field
                name="password"
                validators={{
                  onChange: ({ value }) =>
                    !value ? "This field is required" : undefined,
                }}
              >
                {(field) => {
                  return (
                    <Input
                      name={field.name}
                      value={field.state.value as string}
                      label="Password"
                      placeholder="Input Password"
                      labelPlacement="outside"
                      radius="sm"
                      type="password"
                      isInvalid={field.state.meta.errors.length > 0}
                      errorMessage={field.state.meta.errors[0]}
                      endContent={<RiLockPasswordFill />}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  );
                }}
              </form.Field>
              <Button
                color="warning"
                radius="full"
                className="text-white w-full mt-14"
                type="submit"
              >
                Login
              </Button>
            </form>
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
