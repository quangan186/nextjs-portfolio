'use client';

import { usePathname } from 'next/navigation';
import { navLinks } from "@/core/data";
import React from "react";
import { Title } from "../text";
import Link from "next/link";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full bg-[#323B4C] text-white border-y border-y-[#323B4C]">
      <Link href="/" passHref className="px-6">
          <Title>My Portfolio</Title>
      </Link>
      <ul className="flex list-none">
        {navLinks.map((item) => {
          const isActive = item.href === pathname;

          return (
            <li key={item.href} className={`hover:bg-white hover:text-[#323B4C] ${isActive && 'bg-white text-[#323B4C]'}`}>
              <Link href={item.href} passHref className="flex justify-center w-28 py-4">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
