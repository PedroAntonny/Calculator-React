import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const textVariants = cva('', {
  variants: {
    variant: {
      default: 'text-[20px]',
      muted: 'text-[20px] text-(--text-secondary)',
      heading: 'text-[24px]',
      blast: 'text-[30px]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  children: React.ReactNode
}

export function Text({
  as = 'span',
  variant,
  className,
  children,
  ...props
}: TextProps) {
  const Component = as

  return React.createElement(
    Component,
    {
      className: cn(textVariants({ variant }), className),
      ...props,
    },
    children,
  )
}
