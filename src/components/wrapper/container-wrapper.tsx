import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string
}

export const ContainerWrapper = (props: Props) => {
  return (
    <div className={`mb-4 ${props.className}`}>{props.children}</div>
  )
}