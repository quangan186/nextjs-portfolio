import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string
    children: React.ReactNode
}

export const Title = ({className, children, ...props}: Props) => {
  return (
    <h1 className={`text-2xl tracking-wide font-semibold ${className}`} {...props}>
      {children}
    </h1>
  );
};
