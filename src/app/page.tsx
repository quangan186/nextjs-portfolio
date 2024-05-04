import { Text, Title } from "@/components";
import { contactList, profileInfo } from "@/core";
import Image from "next/image";
import React from "react";
import { ContactList } from "./components";

export default function Home() {
  return (
    <div className="max-h-screen h-[80vh]">
      <div className="flex gap-8 h-full">
        <div className="w-full flex flex-col items-center gap-6">
          <Image
            src={"/my-img.JPG"}
            alt="my-img"
            width={300}
            height={300}
            className="rounded-full w-[300px] h-[300px] object-cover"
          />
          <Title className="text-center">An Bui</Title>
          <Title className="text-center text-lg !font-normal">
            Software developer - Frontend developer
          </Title>
        </div>

        <div className="w-full flex flex-col justify-between">
          {profileInfo.map((item) => {
            return (
              <Title
                key={item.title}
                className="flex items-baseline !text-lg font-semibold gap-2"
              >
                {`${item.title}:`}{" "}
                <Text className="!text-lg font-normal">{item.info}</Text>
              </Title>
            );
          })}
          <Text className="italic !text-lg">
            {
              '"Personally, I am a sociable, honest, funny, hardworking person and always try to learn from people around me to improve myself as well as for the work I do to achieve the best quality. My life motto is that people can do it, I can do it"'
            }
          </Text>

          <ContactList items={contactList} />
        </div>
      </div>
    </div>
  );
}
