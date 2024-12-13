"use client";

import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Open_Sans } from "next/font/google";
import NextAuthProvider from "@/utils/NextAuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFetchProfile } from "./actions/hooks";
import useProfile from "@/utils/hooks/useProfile";

const OpenSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useFetchProfile();
  const { setUser } = useProfile();

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data?.user, setUser]);

  return (
    <NextAuthProvider>
      <main className={`flex h-screen ${OpenSans.className}`}>
        <Sidebar />
        <div className="flex-1 max-h-screen overflow-y-scroll">{children}</div>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </NextAuthProvider>
  );
};

export default Layout;
