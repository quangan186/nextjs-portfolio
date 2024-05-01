import { navLinks } from "@/core/data";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((item) => {
          return (
            <li key={item.href}>
              <a href={item.href}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
