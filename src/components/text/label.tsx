import React from "react";

interface Props extends React.HTMLAttributes<HTMLLabelElement> {}

export const Label = (props: Props) => {
  return (
    <label className={`text-lg`} {...props}>
      {props.children}
    </label>
  );
};
