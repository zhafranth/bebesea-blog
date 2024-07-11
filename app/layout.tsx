import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "@/components/organism/Layout/Layout";
import ReactQueryProvider from "@/utils/ReactQueryProvider";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bebesea | Better Engagement Between East & Southeast Asia",
  description:
    "Platform for sharing ideas and resources on the rights of migrants and their families in/from East and Southeast Asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <ReactQueryProvider>
          <NextUIProvider>
            <Layout>{children}</Layout>
          </NextUIProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
