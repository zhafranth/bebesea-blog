"use client";

import React, { useMemo } from "react";
import Navbar from "../Navbar";
import Footer from "../Home/Footer";
import { usePathname } from "next/navigation";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const isAdminPage = useMemo(
    () => pathname === "/controller" || pathname === "/auth",
    [pathname]
  );

  if (isAdminPage) {
    return (
      <main>
        <div className="min-h-screen">{children}</div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
