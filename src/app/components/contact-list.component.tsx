import { Title } from "@/components";
import { ContactModel } from "@/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  items: ContactModel[];
}

export const ContactList = (props: Props) => {
  return (
    <div className="">
      <Title>Contacts and follows me at here</Title>
      <div className="flex gap-8 flex-wrap mt-4">
        {props.items.map((item) => {
          return (
            <Link
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block hover:-translate-y-2 hover:shadow-2xl duration-300 rounded-full"
            >
              <Image
                className="!w-[60px] !h-[60px] hover:opacity-70 duration-300"
                src={item.icon as string}
                width={200}
                height={200}
                alt="contact-link"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
