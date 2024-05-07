import { projectList } from "@/core";
import React from "react";
import { ProjectCard } from "./components";

export default function ProjectScreen() {
  return (
    <div className="">
      {projectList.map((item, index) => {
        return <ProjectCard item={item} key={`${item.title}-${index}`} />;
      })}
    </div>
  );
}
