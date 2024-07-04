import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Open_Sans } from "next/font/google";
import NextAuthProvider from "@/utils/NextAuthProvider";

const OpenSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAuthProvider>
      <main className={`flex h-screen ${OpenSans.className}`}>
        <Sidebar />
        <div className="flex-1">{children}</div>
      </main>
    </NextAuthProvider>
  );
};

export default Layout;
