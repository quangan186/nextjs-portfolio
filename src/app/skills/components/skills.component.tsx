import { SkillModel } from "@/core";
import React from "react";

interface Props {
  items: SkillModel[];
  ulClassName ?: string;
  liClassName ?: string;
}

export const SkillList = (props: Props) => {
  return (
    <ul className={`py-3 list-disc leading-10 ${props.ulClassName}`}>
      {props.items.map((item) => {
        return <li className={props.liClassName} key={item.skill}>{item.skill}</li>;
      })}
    </ul>
  );
};
