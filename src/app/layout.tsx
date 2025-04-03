import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header/Header";

const LatoSans = Lato({
    weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: "Nova Moda",
  description: "Your favorite clothing store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={LatoSans.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
