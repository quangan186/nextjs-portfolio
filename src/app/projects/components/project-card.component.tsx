import { Text, Title } from "@/components";
import { ProjectModel } from "@/core";
import React from "react";

interface Props {
  item: ProjectModel;
}

export const ProjectCard = (props: Props) => {
  return (
    <div>
      <Title>{props.item.title}</Title>
      <Text>{props.item.role}</Text>
      <div>
        <Title>Description</Title>
        <ul>
          {props.item.description.map((desc, index) => {
            return <li key={`${desc}-${index}`}>{desc}</li>;
          })}
        </ul>
      </div>

      <div>
        <Title>Description</Title>
        <ul>
          {props.item.techStacks.map((tech, index) => {
            return <li key={`${tech}-${index}`}>{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
