"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"

// 전체 매출 트렌드 - 내려가는 트렌드
const salesTrendData = [
  { month: "9/1", value: 12250 },
  { month: "9/2", value: 13000 },
  { month: "9/3", value: 11650 },
  { month: "9/4", value: 12650 },
  { month: "9/5", value: 12750 },
  { month: "9/6", value: 13960 },
  { month: "9/7", value: 15540 },
  { month: "9/8", value: 11900 },
  { month: "9/9", value: 12650 },
  { month: "9/10", value: 11450 },
  { month: "9/11", value: 12400 },
  { month: "9/12", value: 13150 },
  { month: "9/13", value: 13570 },
  { month: "9/14", value: 16610 },

  { month: "9/15", value: 9100 },
  { month: "9/16", value: 10300 },
  { month: "9/17", value: 9400 },
  { month: "9/18", value: 9300 },
  { month: "9/19", value: 9900 },
  { month: "9/20", value: 9700 },
  { month: "9/21", value: 11450 },
  { month: "9/22", value: 10500 },
  { month: "9/23", value: 10650 },
]

// 경쟁사 리뷰 수 트렌드 - 올라가는 트렌드
const reviewTrendData = [
  { month: "9/1", value: 280 },
  { month: "9/2", value: 275 },
  { month: "9/3", value: 295 },
  { month: "9/4", value: 320 },
  { month: "9/5", value: 315 },
  { month: "9/6", value: 320 },
  { month: "9/7", value: 325 },
  { month: "9/8", value: 325 },
  { month: "9/9", value: 335 },
  { month: "9/10", value: 330 },
  { month: "9/11", value: 345 },
  { month: "9/12", value: 340 },
  { month: "9/13", value: 345 },
  { month: "9/14", value: 355 },

  { month: "9/15", value: 425 },
  { month: "9/16", value: 430 },
  { month: "9/17", value: 445 },
  { month: "9/18", value: 440 },
  { month: "9/19", value: 465 },
  { month: "9/20", value: 470 },
  { month: "9/21", value: 490 },
  { month: "9/22", value: 485 },
  { month: "9/23", value: 510 },
]

// 경쟁사 순위 트렌드 - 올라가는 트렌드 (순위는 낮아짐)
const rankingTrendData = [
  { month: "9/1", value: 6 },
  { month: "9/2", value: 7 },
  { month: "9/3", value: 6 },
  { month: "9/4", value: 5 },
  { month: "9/5", value: 5 },
  { month: "9/6", value: 6 },
  { month: "9/7", value: 4 },
  { month: "9/8", value: 5 },
  { month: "9/9", value: 4 },
  { month: "9/10", value: 4 },
  { month: "9/11", value: 3 },
  { month: "9/12", value: 4 },
  { month: "9/13", value: 3 },
  { month: "9/14", value: 2 },

  { month: "9/15", value: 3 },
  { month: "9/16", value: 2 },
  { month: "9/17", value: 2 },
  { month: "9/18", value: 3 },
  { month: "9/19", value: 2 },
  { month: "9/20", value: 1 },
  { month: "9/21", value: 2 },
  { month: "9/22", value: 1 },
  { month: "9/23", value: 1 },
]

const salesConfig = {
  value: {
    label: "매출",
    color: "#ef4444",
  },
} satisfies ChartConfig

const reviewConfig = {
  value: {
    label: "리뷰 수",
    color: "#3b82f6",
  },
} satisfies ChartConfig

const rankingConfig = {
  value: {
    label: "순위",
    color: "#10b981",
  },
} satisfies ChartConfig

export function TrendCharts() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* 전체 매출 트렌드 - 내려가는 */}
      <Card className="bg-white">
        <CardHeader className="p-2">
          <CardTitle className="text-center font-medium text-sm">
            전체 매출 트렌드
          </CardTitle>
          <p className="text-center text-gray-500 text-xs">
            최근 1개월 간의 전체 매출 트렌드
          </p>
        </CardHeader>
        <CardContent className="p-2">
          <ChartContainer config={salesConfig} className="h-[250px] w-full">
            <BarChart data={salesTrendData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
                interval={6}
              />
              <YAxis
                width={25}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)">
                {salesTrendData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index <= 13 ? "var(--chart-1)" : "var(--chart-2)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* 쿠팡 내 경쟁사 리뷰 수 트렌드 - 올라가는 */}
      <Card className="bg-white">
        <CardHeader className="p-2">
          <CardTitle className="text-center font-medium text-sm">
            쿠팡 내 경쟁사 리뷰 수 트렌드
          </CardTitle>
          <p className="text-center text-gray-500 text-xs">
            최근 1개월 간의 전체 매출 트렌드
          </p>
        </CardHeader>
        <CardContent className="p-2">
          <ChartContainer config={reviewConfig} className="h-[250px] w-full">
            <BarChart data={reviewTrendData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
                interval={6}
              />
              <YAxis
                width={25}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)">
                {reviewTrendData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index <= 13 ? "var(--chart-1)" : "var(--chart-2)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* 쿠팡 내 경쟁사 순위 트렌드 - 올라가는 (순위 값은 내려가는) */}
      <Card className="bg-white">
        <CardHeader className="p-2">
          <CardTitle className="text-center font-medium text-sm">
            쿠팡 내 경쟁사 순위 트렌드
          </CardTitle>
          <p className="text-center text-gray-500 text-xs">
            최근 1개월 간의 전체 매출 트렌드
          </p>
        </CardHeader>
        <CardContent className="p-2">
          <ChartContainer config={rankingConfig} className="h-[250px] w-full">
            <BarChart data={rankingTrendData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
                interval={6}
              />
              <YAxis
                width={25}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
                domain={[0, 10]}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="var(--color-value)">
                {rankingTrendData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index <= 13 ? "var(--chart-1)" : "var(--chart-2)"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
