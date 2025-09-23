"use client"

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  XAxis,
  YAxis,
} from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  // 8월 데이터
  { day: "8/1", coupang: 8200, naver: 4500, ownmall: 1200, inventory: 45 },
  { day: "8/2", coupang: 7800, naver: 4300, ownmall: 1100, inventory: 48 },
  { day: "8/3", coupang: 9100, naver: 5100, ownmall: 1300, inventory: 50 },

  { day: "8/4", coupang: 8000, naver: 4800, ownmall: 1400, inventory: 52 },
  { day: "8/5", coupang: 8200, naver: 4100, ownmall: 1500, inventory: 48 },
  { day: "8/6", coupang: 8000, naver: 5000, ownmall: 1450, inventory: 46 },
  { day: "8/7", coupang: 7800, naver: 4900, ownmall: 1350, inventory: 44 },
  { day: "8/8", coupang: 7600, naver: 4700, ownmall: 1280, inventory: 42 },
  { day: "8/9", coupang: 7400, naver: 4600, ownmall: 1220, inventory: 45 },
  { day: "8/10", coupang: 9300, naver: 5500, ownmall: 1180, inventory: 47 },

  { day: "8/11", coupang: 8700, naver: 4400, ownmall: 1380, inventory: 50 },
  { day: "8/12", coupang: 8100, naver: 4200, ownmall: 1550, inventory: 52 },
  { day: "8/13", coupang: 8900, naver: 4000, ownmall: 1480, inventory: 48 },
  { day: "8/14", coupang: 8500, naver: 4700, ownmall: 1320, inventory: 46 },
  { day: "8/15", coupang: 7800, naver: 4200, ownmall: 1100, inventory: 44 },
  { day: "8/16", coupang: 7600, naver: 4100, ownmall: 1050, inventory: 42 },
  { day: "8/17", coupang: 9900, naver: 4300, ownmall: 1150, inventory: 45 },

  { day: "8/18", coupang: 8200, naver: 4500, ownmall: 1250, inventory: 47 },
  { day: "8/19", coupang: 8500, naver: 4700, ownmall: 1350, inventory: 50 },
  { day: "8/20", coupang: 8300, naver: 4600, ownmall: 1300, inventory: 48 },
  { day: "8/21", coupang: 8100, naver: 4400, ownmall: 1200, inventory: 46 },
  { day: "8/22", coupang: 7900, naver: 4300, ownmall: 1150, inventory: 44 },
  { day: "8/23", coupang: 7700, naver: 4200, ownmall: 1100, inventory: 42 },
  { day: "8/24", coupang: 9800, naver: 4300, ownmall: 1120, inventory: 45 },

  { day: "8/25", coupang: 8000, naver: 4400, ownmall: 1180, inventory: 47 },
  { day: "8/26", coupang: 8200, naver: 4500, ownmall: 1220, inventory: 48 },
  { day: "8/27", coupang: 8100, naver: 4450, ownmall: 1200, inventory: 46 },
  { day: "8/28", coupang: 7900, naver: 4350, ownmall: 1150, inventory: 44 },
  { day: "8/29", coupang: 7700, naver: 4250, ownmall: 1100, inventory: 42 },
  { day: "8/30", coupang: 7600, naver: 4200, ownmall: 1050, inventory: 40 },
  { day: "8/31", coupang: 9500, naver: 4100, ownmall: 1000, inventory: 38 },

  // 9월 데이터
  { day: "9/1", coupang: 7500, naver: 3800, ownmall: 950, inventory: 40 },
  { day: "9/2", coupang: 7800, naver: 4100, ownmall: 1100, inventory: 42 },
  { day: "9/3", coupang: 7200, naver: 3600, ownmall: 850, inventory: 48 },
  { day: "9/4", coupang: 7100, naver: 4300, ownmall: 1250, inventory: 45 },
  { day: "9/5", coupang: 7300, naver: 4400, ownmall: 1050, inventory: 42 },
  { day: "9/6", coupang: 7880, naver: 4800, ownmall: 1280, inventory: 48 },
  { day: "9/7", coupang: 8600, naver: 5300, ownmall: 1640, inventory: 45 },

  { day: "9/8", coupang: 6800, naver: 4100, ownmall: 1000, inventory: 42 },
  { day: "9/9", coupang: 7200, naver: 4300, ownmall: 1150, inventory: 48 },
  { day: "9/10", coupang: 6600, naver: 3900, ownmall: 950, inventory: 45 },
  { day: "9/11", coupang: 7100, naver: 4200, ownmall: 1100, inventory: 42 },
  { day: "9/12", coupang: 7400, naver: 4500, ownmall: 1250, inventory: 48 },
  { day: "9/13", coupang: 7640, naver: 4650, ownmall: 1280, inventory: 45 },
  { day: "9/14", coupang: 9080, naver: 5650, ownmall: 1880, inventory: 42 },

  { day: "9/15", coupang: 5200, naver: 2850, ownmall: 1050, inventory: 50 },
  { day: "9/16", coupang: 5700, naver: 3200, ownmall: 1400, inventory: 55 },
  { day: "9/17", coupang: 5300, naver: 2900, ownmall: 1200, inventory: 57 },
  { day: "9/18", coupang: 5200, naver: 2700, ownmall: 1400, inventory: 60 },
  { day: "9/19", coupang: 5500, naver: 3300, ownmall: 1100, inventory: 62 },
  { day: "9/20", coupang: 5300, naver: 3400, ownmall: 1000, inventory: 66 },
  { day: "9/21", coupang: 7100, naver: 3100, ownmall: 1250, inventory: 72 },

  { day: "9/22", coupang: 5800, naver: 3500, ownmall: 1200, inventory: 74 },
  { day: "9/23", coupang: 5900, naver: 3600, ownmall: 1150, inventory: 78 },
]

const chartConfig = {
  coupang: {
    label: "쿠팡",
    color: "var(--chart-1)",
  },
  naver: {
    label: "스마트스토어",
    color: "var(--chart-2)",
  },
  ownmall: {
    label: "자사몰",
    color: "var(--chart-3)",
  },
  inventory: {
    label: "재고율",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig

export function SalesChartBar() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="my-2 flex flex-col gap-1 pt-2">
        <h3 className="mx-auto font-semibold text-lg">일별 판매량 & 재고율</h3>
        <p className="mx-auto text-sm">
          최근 {chartData.length}일간 채널별 판매 현황
        </p>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center">
        <ChartContainer config={chartConfig} className="h-[500px] w-full">
          <ComposedChart data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              interval={6}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 14 }}
            />
            <YAxis
              yAxisId="left"
              orientation="right"
              stroke="var(--color-coupang)"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value.toLocaleString()}`}
            />
            <YAxis
              yAxisId="right"
              orientation="left"
              stroke="var(--color-inventory)"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Legend
              verticalAlign="bottom"
              height={32}
              iconType="rect"
              formatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label || value
              }
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
              radius={[0, 0, 0, 0]}
            />
            <Line
              yAxisId="right"
              dataKey="inventory"
              stroke="var(--color-inventory)"
              strokeWidth={2}
              dot={{ fill: "var(--color-inventory)", r: 0 }}
            />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  )
}
