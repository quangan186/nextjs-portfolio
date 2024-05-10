import React from 'react'

interface Props {
    children: React.ReactNode;
    className?: string
}

export const ScreenWrapper = (props: Props) => {
  return (
    <div className={`px-6 w-full ${props.className}`}>{props.children}</div>
  )
}