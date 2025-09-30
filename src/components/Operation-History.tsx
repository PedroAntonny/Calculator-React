import { Card } from './Card'
import { Text } from './Text'

export function OperationHistory() {
  return (
    <Card className="app-card w-[356px] shrink-0 py-[40px] px-[32px]">
      <Text as="h1" variant="heading" className="mb-[16px]">
        Histórico de Operações
      </Text>

      <ul className="flex flex-col gap-[12px] list-none">
        <Text as="li">1 + 1 = 2</Text>
        <Text as="li">2 + 2 = 4</Text>
        <Text as="li">3 + 3 + 4 = 10</Text>
        <Text as="li">4 + 4 = 8</Text>
        <Text as="li">5 + 5 = 10</Text>
      </ul>
    </Card>
  )
}
