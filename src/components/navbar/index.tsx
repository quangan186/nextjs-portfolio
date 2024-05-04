import { navLinks } from "@/core/data";
import React from "react";
import { Title } from "../text";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-4 fixed top-0 left-0 w-full bg-[#323B4C] text-white">
      <a href="/">
        <Title>My Portfolio</Title>
      </a>
      <ul className="flex gap-4">
        {navLinks.map((item) => {
          return (
            <li key={item.href}>
              <a href={item.href}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      {/* <button>Dark Mode</button> */}
    </nav>
  );
};
