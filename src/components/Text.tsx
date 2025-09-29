import React from 'react'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof React.JSX.IntrinsicElements
  variant?: 'default' | 'muted' | 'heading' | 'blast'
  className?: string
  children: React.ReactNode
}

export function Text({
  as = 'span',
  variant = 'default',
  className = '',
  children,
  ...props
}: TextProps) {
  const textVariants = {
    default: 'text-xl',
    muted: 'text-xl text-secondary',
    heading: 'text-2xl',
    blast: 'text-3xl',
  }

  const Component = as

  return React.createElement(
    Component,
    {
      className: `${textVariants[variant]} ${className}`.trim(),
      ...props,
    },
    children,
  )
}
