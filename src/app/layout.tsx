import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My portfolio",
  description: "This is Quang An protfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} h-screen`}>
        <header>{<NavBar />}</header>
        <main className="flex min-h-screen flex-col items-center justify-between pt-24">
          {children}
        </main>
        <footer></footer>
        </body>
    </html>
  );
}
