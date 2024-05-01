import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const Title = (props: Props) => {
  return (
    <h1 className="text-2xl" {...props}>
      {props.children}
    </h1>
  );
};
