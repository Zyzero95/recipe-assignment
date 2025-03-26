import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Suspense } from "react";
import Loading from "./Components/loading";
import { Roboto } from "next/font/google";
import { Merienda } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto ({
  variable: "--font-main-text",
  subsets: ["latin"],
})

const merienda = Merienda ({
  variable: "--font-main-heading",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "The Fabulous Recipe Collection",
  description: "a fabulous collection of recipes, brought to you by dummyjson.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${merienda.variable}`}>
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
