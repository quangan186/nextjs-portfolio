import { ContainerWrapper, Text, Title, Wrapper } from "@/components";
import { ProjectModel } from "@/core";
import React from "react";

interface Props {
  item: ProjectModel;
}

export const ProjectCard = (props: Props) => {
  return (
    <ContainerWrapper>
      <Title>{props.item.title} - {props.item.role}</Title>
      <Wrapper>
        <Title className="text-lg">Description</Title>
        <ul className="px-8 leading-10">
          {props.item.description.map((desc, index) => {
            return <li key={`${desc}-${index}`}>{desc}</li>;
          })}
        </ul>
      </Wrapper>

      <Wrapper>
        <Title className="text-lg">Technologies used:</Title>
        <ul className="px-8 leading-10">
          {props.item.techStacks.map((tech, index) => {
            return <li key={`${tech}-${index}`}>{tech}</li>;
          })}
        </ul>
      </Wrapper>
    </ContainerWrapper>
  );
};
