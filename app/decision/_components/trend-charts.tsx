import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp } from 'lucide-react'

const chartData = [
  {
    title: '전체 매출 트렌드',
    subtitle: '최근 1개월 간의 전체 매출 트렌드',
    trend: '적당히 내려가는 차트',
  },
  {
    title: '쿠팡 내 경쟁사 리뷰 수 트렌드',
    subtitle: '최근 1개월 간의 전체 매출 트렌드',
    trend: '적당히 올라가는 차트',
  },
  {
    title: '쿠팡 내 경쟁사 순위 트렌드',
    subtitle: '최근 1개월 간의 전체 매출 트렌드',
    trend: '적당히 올라가는 차트',
  },
]

export function TrendCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {chartData.map((chart, index) => (
        <Card key={index} className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-center">
              {chart.title}
            </CardTitle>
            <p className="text-xs text-gray-500 text-center">
              {chart.subtitle}
            </p>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-32 flex items-center justify-center relative">
              {/* Simple trend visualization */}
              <div className="w-full h-20 relative">
                <svg className="w-full h-full" viewBox="0 0 200 80">
                  <polyline
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    points={
                      index === 0
                        ? '20,20 60,30 100,45 140,50 180,60' // 하락 트렌드
                        : '20,60 60,50 100,35 140,25 180,15' // 상승 트렌드
                    }
                  />
                </svg>
                <TrendingUp className="absolute bottom-2 right-2 h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
