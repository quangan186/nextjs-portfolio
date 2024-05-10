import { Text, Title, Wrapper } from "@/components";
import { CertificateModel } from "@/core";
import Link from "next/link";
import React from "react";

interface Props {
    item: CertificateModel
};

export const CertificateCard = (props: Props) => {
  return (
    <Wrapper className="!w-1/2">
      <Link
        href={props.item.link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:underline flex gap-4 "
      >
        <Title className="!text-[20px] !font-normal">
          {props.item.title} | {props.item.from}
        </Title>
      </Link>
      <Text className="!text-[16px] italic mt-2">{props.item.time}</Text>
    </Wrapper>
  );
};
