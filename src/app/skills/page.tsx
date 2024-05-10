import { ContainerWrapper, ScreenWrapper, Title, Wrapper } from "@/components";
import { foreignLanguageSkills, mainTechSkills, otherSkills, programmingSkills, versionControlSkills } from "@/core";
import React from "react";
import { SkillList } from "./components";

export default function SkillScreen() {
  return (
    <ScreenWrapper>
      <ContainerWrapper className="flex">
        <Wrapper>
          <Title className="text-center">Programming languages</Title>
          <SkillList items={programmingSkills} ulClassName="px-4" />
        </Wrapper>
        <Wrapper className="border-x-2">
          <Title className="text-center">Main Technologies</Title>
          <SkillList items={mainTechSkills} ulClassName="px-4"/>
        </Wrapper>
        <Wrapper>
          <Title className="text-center">Version control</Title>
          <SkillList items={versionControlSkills} ulClassName="px-4" />
        </Wrapper>
      </ContainerWrapper>

      <ContainerWrapper>
        
        <Wrapper>
          <Title>Others</Title>
          <SkillList items={otherSkills} ulClassName="grid grid-cols-3 gap-2 w-full" liClassName="mx-4" />
        </Wrapper>
        <Wrapper>
          <Title>Foreign languages</Title>
          <SkillList items={foreignLanguageSkills} />
        </Wrapper>
      </ContainerWrapper>
      
    </ScreenWrapper>
  );
}
