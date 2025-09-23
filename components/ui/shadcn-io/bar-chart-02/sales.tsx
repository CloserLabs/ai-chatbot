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
import { Card, CardContent, CardHeader } from "../../card"

const chartData = [
  // 8월 데이터
  { day: "8/1", coupang: 8200, naver: 4500, inventory: 45 },
  { day: "8/2", coupang: 7800, naver: 4300, inventory: 48 },
  { day: "8/3", coupang: 9100, naver: 5100, inventory: 50 },

  { day: "8/4", coupang: 8000, naver: 4800, inventory: 52 },
  { day: "8/5", coupang: 8200, naver: 4100, inventory: 48 },
  { day: "8/6", coupang: 8000, naver: 5000, inventory: 46 },
  { day: "8/7", coupang: 7800, naver: 4900, inventory: 44 },
  { day: "8/8", coupang: 7600, naver: 4700, inventory: 42 },
  { day: "8/9", coupang: 7400, naver: 4600, inventory: 45 },
  { day: "8/10", coupang: 9300, naver: 5500, inventory: 47 },

  { day: "8/11", coupang: 8700, naver: 4400, inventory: 50 },
  { day: "8/12", coupang: 8100, naver: 4200, inventory: 52 },
  { day: "8/13", coupang: 8900, naver: 4000, inventory: 48 },
  { day: "8/14", coupang: 8500, naver: 4700, inventory: 46 },
  { day: "8/15", coupang: 7800, naver: 4200, inventory: 44 },
  { day: "8/16", coupang: 7600, naver: 4100, inventory: 42 },
  { day: "8/17", coupang: 9900, naver: 4300, inventory: 45 },

  { day: "8/18", coupang: 8200, naver: 4500, inventory: 47 },
  { day: "8/19", coupang: 8500, naver: 4700, inventory: 50 },
  { day: "8/20", coupang: 8300, naver: 4600, inventory: 48 },
  { day: "8/21", coupang: 8100, naver: 4400, inventory: 46 },
  { day: "8/22", coupang: 7900, naver: 4300, inventory: 44 },
  { day: "8/23", coupang: 7700, naver: 4200, inventory: 42 },
  { day: "8/24", coupang: 9800, naver: 4300, inventory: 45 },

  { day: "8/25", coupang: 8000, naver: 4400, inventory: 47 },
  { day: "8/26", coupang: 8200, naver: 4500, inventory: 48 },
  { day: "8/27", coupang: 8100, naver: 4450, inventory: 46 },
  { day: "8/28", coupang: 7900, naver: 4350, inventory: 44 },
  { day: "8/29", coupang: 7700, naver: 4250, inventory: 42 },
  { day: "8/30", coupang: 7600, naver: 4200, inventory: 40 },
  { day: "8/31", coupang: 9500, naver: 4100, inventory: 38 },

  // 9월 데이터
  { day: "9/1", coupang: 7500, naver: 3800, inventory: 40 },
  { day: "9/2", coupang: 7800, naver: 4100, inventory: 42 },
  { day: "9/3", coupang: 7200, naver: 3600, inventory: 48 },
  { day: "9/4", coupang: 7100, naver: 4300, inventory: 45 },
  { day: "9/5", coupang: 7300, naver: 4400, inventory: 42 },
  { day: "9/6", coupang: 7880, naver: 4800, inventory: 48 },
  { day: "9/7", coupang: 8600, naver: 5300, inventory: 45 },

  { day: "9/8", coupang: 6800, naver: 4100, inventory: 42 },
  { day: "9/9", coupang: 7200, naver: 4300, inventory: 48 },
  { day: "9/10", coupang: 6600, naver: 3900, inventory: 45 },
  { day: "9/11", coupang: 7100, naver: 4200, inventory: 42 },
  { day: "9/12", coupang: 7400, naver: 4500, inventory: 48 },
  { day: "9/13", coupang: 7640, naver: 4650, inventory: 45 },
  { day: "9/14", coupang: 9080, naver: 5650, inventory: 42 },

  { day: "9/15", coupang: 5200, naver: 2850, inventory: 56 },
  { day: "9/16", coupang: 5700, naver: 3200, inventory: 62 },
  { day: "9/17", coupang: 5300, naver: 2900, inventory: 68 },
  { day: "9/18", coupang: 5200, naver: 2700, inventory: 74 },
  { day: "9/19", coupang: 5500, naver: 3300, inventory: 78 },
  { day: "9/20", coupang: 5300, naver: 3400, inventory: 82 },
  { day: "9/21", coupang: 7100, naver: 3100, inventory: 86 },

  { day: "9/22", coupang: 5000, naver: 3050, inventory: 92 },
  { day: "9/23", coupang: 5100, naver: 3060, inventory: 94 },
]

const chartConfig = {
  coupang: {
    label: "쿠팡",
    color: "#ff6b35",
  },
  naver: {
    label: "스마트스토어",
    color: "#1a659e",
  },
  inventory: {
    label: "재고율",
    color: "#92140c",
  },
} satisfies ChartConfig

export function SalesChartBar() {
  return (
    <Card className="h-[600px]">
      <CardContent className="px-0">
        <div className="flex h-full w-full flex-col">
          <CardHeader className="my-2 flex flex-col gap-1 pt-2">
            <h3 className="mx-auto font-semibold text-lg">
              일별 판매량 & 재고율
            </h3>
            <p className="mx-auto text-sm">
              최근 {chartData.length}일간 채널별 판매 현황
            </p>
          </CardHeader>

          <div className="flex min-h-0 flex-1 items-center justify-center">
            <ChartContainer config={chartConfig} className="h-[500px] w-full">
              <ComposedChart data={chartData}>
                <CartesianGrid vertical={false} />

                <XAxis
                  dataKey="day"
                  interval={6}
                  textAnchor="end"
                  height={60}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  yAxisId="left"
                  orientation="right"
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${value.toLocaleString()}`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="left"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${value}%`}
                  domain={[0, 100]}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Legend
                  verticalAlign="bottom"
                  height={32}
                  iconType="rect"
                  formatter={(value) =>
                    chartConfig[value as keyof typeof chartConfig]?.label ||
                    value
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

                <Line
                  yAxisId="right"
                  dataKey="inventory"
                  stroke="var(--color-inventory)"
                  strokeWidth={4}
                  dot={{ fill: "var(--color-inventory)", r: 0 }}
                />
              </ComposedChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
