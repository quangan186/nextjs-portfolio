import { Text, Title } from "@/components";
import { CertificateModel } from "@/core";
import React from "react";

interface Props {
    item: CertificateModel
};

export const CertificateCard = (props: Props) => {
  return (
    <div>
      <a
        href={props.item.link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:underline flex gap-4 "
      >
        <Title className="!text-[20px] !font-normal">
          {props.item.title} | {props.item.from}
        </Title>
      </a>
      <Text className="!text-[16px] italic">{props.item.time}</Text>
    </div>
  );
};
