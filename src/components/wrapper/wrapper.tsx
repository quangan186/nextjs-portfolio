import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string
}

export const Wrapper = (props: Props) => {
  return (
    <div className={`px-3 py-2 w-full ${props.className}`}>{props.children}</div>
  )
}