import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SidebarProvider } from '@/components/ui/sidebar'
import { TrendingUp } from 'lucide-react'
import { DataTables } from './_components/data-tables'
import { AppSidebar } from './_components/sidebar'
import { StatsHeader } from './_components/stats-header'
import { TrendCharts } from './_components/trend-charts'

export default function Page() {
  return (
    <SidebarProvider className="flex min-h-screen bg-gray-50">
      <AppSidebar />

      <div className="flex-1 p-6">
        <StatsHeader />

        <div className="mt-6 space-y-6">
          {/* 데스크톱 추천 의사결정 섹션 */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg font-semibold">
                  데스크톱 추천 의사결정
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">
                이번 주 매출이 12% 감소했습니다. 가격 큰 할인으로 쿠팡 채널
                매출이 20% 감소한 것입니다.
              </p>
              <p className="text-sm text-gray-700">
                쿠팡 매출 감소의 주요 원인은 경쟁사의 성장으로 확인됩니다.
                경쟁사 A, B 브랜드의 리뷰 수가 최근 2주간 30% 이상 증가했고,
                검색 결과 내 순위도 우리 브랜드보다 상위로 올라갔습니다.
              </p>
              <p className="text-sm text-gray-700">
                고객의 검색 시 구매 전환이 경쟁사로 이동한 것으로 보여, 쿠팡
                광고 집행량을 늘리고, 리뷰 수를 늘리기 위한 CRM 캠페인을 추진할
                합니다.
              </p>
            </CardContent>
          </Card>

          <TrendCharts />
          <DataTables />
        </div>
      </div>
    </SidebarProvider>
  )
}
