import { Card, CardContent } from '@/components/ui/card'
import { DollarSign, Package } from 'lucide-react'

export function StatsHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-5 w-5 text-red-600" />
                <span className="text-2xl font-bold text-red-700">
                  130,000,000원
                </span>
              </div>
              <p className="text-sm text-red-600">
                의사결정 시 개선할 수 있는 예상 매출
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Package className="h-5 w-5 text-orange-600" />
                <span className="text-2xl font-bold text-orange-700">28개</span>
              </div>
              <p className="text-sm text-orange-600">
                의사결정 시 영향 받는 SKU 수
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
