import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode
}

export const Text = ({className, children,...props}: Props) => {
  return (
    <p className={`text-sm ${className}`} {...props}>
      {children}
    </p>
  );
};
