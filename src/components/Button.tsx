import { Text } from './Text'

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'primary'
}

const buttonVariants = {
  default: 'bg-(--background)',
  primary: 'bg-(--primary)',
}

export function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Text
      as="button"
      variant="heading"
      className={`flex items-center justify-center rounded-xl p-3 cursor-pointer text-(--text) bg-linear-(--gradient) hover:bg-linear-(--gradient-hover) shadow-(--shadow) ${
        buttonVariants[variant]
      } ${className ? className : ''}`}
      {...props}
    >
      {children}
    </Text>
  )
}
