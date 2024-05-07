import { Text, Title } from "@/components";
import { ProjectModel, SkillModel } from "@/core";
import React from "react";

interface Props {
  items: SkillModel[];
}

export const SkillList = (props: Props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item.skill}>{item.skill}</li>;
      })}
    </ul>
  );
};
