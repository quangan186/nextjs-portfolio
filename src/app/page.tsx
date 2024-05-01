import { NavBar } from "@/components";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header>{<NavBar />}</header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
      <footer></footer>
    </React.Fragment>
    
  );
}
