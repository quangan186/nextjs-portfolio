import { projectList } from "@/core";
import React from "react";
import { ProjectCard } from "./components";
import { ScreenWrapper } from "@/components";

export default function ProjectScreen() {
  return (
    <ScreenWrapper>
      {projectList.map((item, index) => {
        return <ProjectCard item={item} key={`${item.title}-${index}`} />;
      })}
    </ScreenWrapper>
  );
}
