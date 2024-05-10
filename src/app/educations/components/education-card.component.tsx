import { ContainerWrapper, Text, Title, Wrapper } from "@/components";
import { EducationModel } from "@/core";
import Link from "next/link";
import React from "react";

interface Props {
  item: EducationModel;
}

export const EducationCard = (props: Props) => {
  return (
    <ContainerWrapper className="mt-4">
      <Wrapper className="flex justify-between px-0">
        <Link
          href={props.item.testamur}
          target="_blank"
          rel="noreferrer"
          className="hover:underline flex gap-4 "
        >
          <Title className="!text-[20px]">{props.item.degree}</Title>
        </Link>
        <Title className="!text-[20px] text-right">{props.item.school}</Title>
      </Wrapper>
      <Wrapper className="flex justify-end w-full px-0">
        <Text className="!text-[16px] py-4 italic">
          From {props.item.startTime} to {props.item.endTime}
        </Text>
      </Wrapper>
    </ContainerWrapper>
  );
};
