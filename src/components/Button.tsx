import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { Text } from './Text'

const buttonVariants = cva(
  'flex items-center justify-center rounded-[4px] p-3 cursor-pointer text-[var(--text)] bg-[linear-gradient(var(--gradient))] hover:bg-[linear-gradient(var(--gradient-hover))] shadow-[var(--shadow)] appearance-none border-0 outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-[var(--background)]',
        primary: 'bg-[var(--primary)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
}

export function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={cn(className, buttonVariants({ variant }))}
      {...props}
    >
      {children}
    </Text>
  )
}
