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

const chartData = [
  { day: '1일', coupang: 7500, naver: 3800, ownmall: 950, inventory: 55 },
  { day: '2일', coupang: 7800, naver: 4100, ownmall: 1100, inventory: 52 },
  { day: '3일', coupang: 7200, naver: 3600, ownmall: 850, inventory: 58 },
  { day: '4일', coupang: 7100, naver: 4300, ownmall: 1250, inventory: 55 },
  { day: '5일', coupang: 7300, naver: 4400, ownmall: 1050, inventory: 52 },
  { day: '6일', coupang: 7880, naver: 4800, ownmall: 1280, inventory: 58 },
  { day: '7일', coupang: 8600, naver: 5300, ownmall: 1640, inventory: 55 },
  { day: '8일', coupang: 6800, naver: 4100, ownmall: 1000, inventory: 52 },
  { day: '9일', coupang: 7200, naver: 4300, ownmall: 1150, inventory: 58 },
  { day: '10일', coupang: 6600, naver: 3900, ownmall: 950, inventory: 55 },
  { day: '11일', coupang: 7100, naver: 4200, ownmall: 1100, inventory: 52 },
  { day: '12일', coupang: 7400, naver: 4500, ownmall: 1250, inventory: 58 },
  { day: '13일', coupang: 7640, naver: 4650, ownmall: 1280, inventory: 55 },
  { day: '14일', coupang: 9080, naver: 5650, ownmall: 1880, inventory: 52 },
  { day: '15일', coupang: 5200, naver: 3350, ownmall: 1050, inventory: 58 },
  { day: '16일', coupang: 5700, naver: 3700, ownmall: 1400, inventory: 55 },
  { day: '17일', coupang: 5300, naver: 3400, ownmall: 1200, inventory: 52 },
  { day: '18일', coupang: 6200, naver: 3200, ownmall: 1400, inventory: 60 },
  { day: '19일', coupang: 5500, naver: 3800, ownmall: 1100, inventory: 62 },
  { day: '20일', coupang: 5300, naver: 3900, ownmall: 1000, inventory: 66 },
  { day: '21일', coupang: 7100, naver: 3600, ownmall: 1250, inventory: 72 },
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
    <div className='flex h-full w-full flex-col'>
      <div className='mb-4 flex flex-col gap-1 border-b pt-2 pb-4'>
        <h3 className='mx-auto font-semibold text-lg'>일별 판매량 & 재고율</h3>
        <p className='mx-auto text-muted-foreground text-sm'>
          최근 {chartData.length}일간 채널별 판매 현황
        </p>
      </div>

      <div className='flex min-h-0 flex-1 items-center justify-center'>
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
              formatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label || value}
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
              radius={[4, 4, 0, 0]}
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
