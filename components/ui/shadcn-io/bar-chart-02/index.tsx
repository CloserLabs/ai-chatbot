'use client'

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  XAxis,
  YAxis,
} from 'recharts'

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A bar chart'

const chartData = [
  { hour: '9am', desktop: 209, orders: 41, inventory: 58 },
  { hour: '10am', desktop: 214, orders: 46, inventory: 52 },
  { hour: '11am', desktop: 120, orders: 30, inventory: 48 },
  { hour: '12pm', desktop: 260, orders: 50, inventory: 42 },
  { hour: '1pm', desktop: 180, orders: 40, inventory: 38 },
  { hour: '2pm', desktop: 140, orders: 35, inventory: 35 },
  { hour: '3pm', desktop: 200, orders: 40, inventory: 30 },
  { hour: '4pm', desktop: 160, orders: 35, inventory: 28 },
  { hour: '5pm', desktop: 280, orders: 50, inventory: 22 },
  { hour: '6pm', desktop: 320, orders: 60, inventory: 15 },
  { hour: '7pm', desktop: 240, orders: 45, inventory: 18 },
  { hour: '8pm', desktop: 180, orders: 35, inventory: 25 },
  { hour: '9pm', desktop: 140, orders: 30, inventory: 32 },
  { hour: '10pm', desktop: 100, orders: 25, inventory: 40 },
  { hour: '11pm', desktop: 80, orders: 20, inventory: 48 },
  { hour: '12am', desktop: 60, orders: 15, inventory: 55 },
  { hour: '1am', desktop: 40, orders: 12, inventory: 62 },
  { hour: '2am', desktop: 30, orders: 10, inventory: 70 },
  { hour: '3am', desktop: 25, orders: 10, inventory: 78 },
  { hour: '4am', desktop: 35, orders: 10, inventory: 82 },
  { hour: '5am', desktop: 186, orders: 34, inventory: 85 },
  { hour: '6am', desktop: 305, orders: 55, inventory: 75 },
  { hour: '7am', desktop: 237, orders: 43, inventory: 68 },
  { hour: '8am', desktop: 73, orders: 22, inventory: 65 },
]

const chartConfig = {
  orders: {
    label: '미출고',
    color: 'var(--chart-3)',
  },
  desktop: {
    label: '출고',
    color: 'var(--chart-1)',
  },
  inventory: {
    label: '재고율',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

export function ChartBarDefault() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-1 pb-4 pt-2 mb-4 border-b">
        <h3 className="text-lg font-semibold mx-auto">
          주문량 & 판매량 & 재고율
        </h3>
        <p className="text-sm text-muted-foreground mx-auto">
          오늘 하루 판매량 (5am - 4am)
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ComposedChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="hour" tickLine={false} axisLine={false} />
            <YAxis
              yAxisId="left"
              orientation="right"
              stroke="var(--color-desktop)"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <YAxis
              yAxisId="right"
              orientation="left"
              stroke="var(--color-inventory)"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend verticalAlign="bottom" height={32} iconType="rect" />
            <Bar
              yAxisId="left"
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="orders"
              stackId="a"
              fill="var(--color-orders)"
              radius={[8, 8, 0, 0]}
            />
            <Line
              yAxisId="right"
              dataKey="inventory"
              stroke="var(--color-inventory)"
              strokeWidth={2}
              dot={{ fill: 'var(--color-inventory)', r: 0 }}
            />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  )
}
