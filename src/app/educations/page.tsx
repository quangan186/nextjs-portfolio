import { ContainerWrapper, ScreenWrapper, Title, Wrapper } from "@/components";
import { certificates, educations } from "@/core";
import React from "react";
import { CertificateCard, EducationCard } from "./components";

export default function EducationScreen() {
  return (
    <ScreenWrapper>
      <ContainerWrapper>
        <Title className="!text-[32px]">Educations</Title>
        {educations.map((education, index) => {
          return <EducationCard key={index} item={education} />;
        })}
      </ContainerWrapper>

      <ContainerWrapper>
        <Title className="!text-[32px]">Certificates</Title>
        <Wrapper className="flex flex-wrap px-0">
          {certificates.map((cert, index) => {
            return <CertificateCard key={index} item={cert} />;
          })}
        </Wrapper>
        
      </ContainerWrapper>
    </ScreenWrapper>
  );
}
