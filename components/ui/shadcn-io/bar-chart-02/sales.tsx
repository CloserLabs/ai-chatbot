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
  { day: '1일', coupang: 4500, naver: 3200, ownmall: 800, inventory: 85 },
  { day: '2일', coupang: 4800, naver: 3500, ownmall: 950, inventory: 82 },
  { day: '3일', coupang: 4200, naver: 3100, ownmall: 700, inventory: 78 },
  { day: '4일', coupang: 5100, naver: 3800, ownmall: 1100, inventory: 75 },
  { day: '5일', coupang: 5300, naver: 3600, ownmall: 900, inventory: 72 },
  { day: '6일', coupang: 5880, naver: 4080, ownmall: 1080, inventory: 68 },
  { day: '7일', coupang: 6600, naver: 4680, ownmall: 1440, inventory: 65 },
  { day: '8일', coupang: 4800, naver: 3400, ownmall: 850, inventory: 62 },
  { day: '9일', coupang: 5200, naver: 3700, ownmall: 1000, inventory: 58 },
  { day: '10일', coupang: 4600, naver: 3300, ownmall: 800, inventory: 55 },
  { day: '11일', coupang: 5100, naver: 3500, ownmall: 950, inventory: 52 },
  { day: '12일', coupang: 5400, naver: 3800, ownmall: 1100, inventory: 48 },
  { day: '13일', coupang: 5640, naver: 3960, ownmall: 1080, inventory: 45 },
  { day: '14일', coupang: 7080, naver: 5040, ownmall: 1680, inventory: 42 },
  { day: '15일', coupang: 5200, naver: 3700, ownmall: 900, inventory: 38 },
  { day: '16일', coupang: 5700, naver: 4000, ownmall: 1200, inventory: 35 },
  { day: '17일', coupang: 5300, naver: 3700, ownmall: 1050, inventory: 32 },
  { day: '18일', coupang: 5500, naver: 3900, ownmall: 1150, inventory: 30 },
  { day: '19일', coupang: 5000, naver: 3600, ownmall: 950, inventory: 28 },
  { day: '20일', coupang: 6960, naver: 4920, ownmall: 1560, inventory: 25 },
  { day: '21일', coupang: 7200, naver: 5160, ownmall: 1680, inventory: 22 },
  { day: '22일', coupang: 4700, naver: 3300, ownmall: 850, inventory: 20 },
  { day: '23일', coupang: 5400, naver: 3800, ownmall: 1100, inventory: 18 },
  { day: '24일', coupang: 5200, naver: 3600, ownmall: 1000, inventory: 15 },
]

const chartConfig = {
  coupang: {
    label: '쿠팡',
    color: 'var(--chart-1)',
  },
  naver: {
    label: '스마트스토어',
    color: 'var(--chart-2)',
  },
  ownmall: {
    label: '자사몰',
    color: 'var(--chart-3)',
  },
  inventory: {
    label: '재고율',
    color: 'var(--chart-4)',
  },
} satisfies ChartConfig

export function SalesChartBar() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-1 pb-4 pt-2 mb-4 border-b">
        <h3 className="text-lg font-semibold mx-auto">일별 판매량 & 재고율</h3>
        <p className="text-sm text-muted-foreground mx-auto">
          최근 24일간 채널별 판매 현황
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ComposedChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              yAxisId="left"
              orientation="right"
              stroke="var(--color-coupang)"
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
            <Legend
              verticalAlign="bottom"
              height={32}
              iconType="rect"
              formatter={(value) => chartConfig[value]?.label || value}
            />
            <Bar
              yAxisId="left"
              dataKey="coupang"
              stackId="a"
              fill="var(--color-coupang)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="naver"
              stackId="a"
              fill="var(--color-naver)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="ownmall"
              stackId="a"
              fill="var(--color-ownmall)"
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
