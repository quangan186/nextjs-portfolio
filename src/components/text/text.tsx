import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Text = (props: Props) => {
  return (
    <p className="text-sm" {...props}>
      {props.children}
    </p>
  );
};
