import React from 'react'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements
  variant?: 'default' | 'muted' | 'heading' | 'blast'
  className?: string
  children: React.ReactNode
}

const textVariants = {
  default: 'text-xl',
  muted: 'text-xl text-(--text-secondary)',
  heading: 'text-2xl',
  blast: 'text-3xl',
}

export function Text({
  as = 'span',
  variant = 'default',
  className,
  children,
  ...props
}: TextProps) {
  const Component = as

  return React.createElement(
    Component,
    {
      className: `${textVariants[variant]} ${className ? className : ''}`,
      ...props,
    },
    children,
  )
}
