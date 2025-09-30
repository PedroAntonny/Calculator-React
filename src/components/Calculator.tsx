import { Button } from './Button'
import { CalculatorDisplay } from './Calculator-Display'
import { Card } from './Card'

export function Calculator() {
  return (
    <Card
      className={`app-card flex flex-col gap-[26px] w-[356px] pt-[56px] px-[32px] pb-[32px] h-full`}
    >
      <CalculatorDisplay operation="1 + 1" result="2" />

      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[12px]">
          <Button className="w-[64px] h-[64px]">CE</Button>
          <Button className="flex-1 h-[64px]">C</Button>
          <Button className="w-[64px] h-[64px]" variant="primary">
            /
          </Button>
        </div>
        <div className="flex gap-[12px]">
          <Button className="w-[64px] h-[64px]">7</Button>
          <Button className="flex-1 h-[64px]">8</Button>
          <Button className="flex-1 h-[64px]">9</Button>
          <Button className="w-[64px] h-[64px]" variant="primary">
            X
          </Button>
        </div>
        <div className="flex gap-[12px]">
          <Button className="w-[64px] h-[64px]">4</Button>
          <Button className="flex-1 h-[64px]">5</Button>
          <Button className="flex-1 h-[64px]">6</Button>
          <Button className="w-[64px] h-[64px]" variant="primary">
            -
          </Button>
        </div>
        <div className="flex gap-[12px]">
          <Button className="w-[64px] h-[64px]">1</Button>
          <Button className="flex-1 h-[64px]">2</Button>
          <Button className="flex-1 h-[64px]">3</Button>
          <Button className="w-[64px] h-[64px]" variant="primary">
            +
          </Button>
        </div>
        <div className="flex gap-[12px]">
          <Button className="flex-1 h-[64px]">0</Button>
          <Button className="w-[64px] h-[64px]">,</Button>
          <Button className="w-[64px] h-[64px]" variant="primary">
            =
          </Button>
        </div>
      </div>
    </Card>
  )
}
