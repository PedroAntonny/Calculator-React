import { Text } from './Text'

interface CalculatorDisplayProps {
  operation: string
  result: string
}

export function CalculatorDisplay({
  operation,
  result,
}: CalculatorDisplayProps) {
  return (
    <div
      className={`flex flex-col gap-[8px] px-[22px] cursor-default select-none`}
    >
      <Text as="div" variant="muted" className="flex items-center justify-end">
        {' '}
        {operation}{' '}
      </Text>

      <div className={`flex items-center justify-between`}>
        <Text variant="muted">=</Text>
        <Text variant="blast">{result}</Text>
      </div>
    </div>
  )
}
