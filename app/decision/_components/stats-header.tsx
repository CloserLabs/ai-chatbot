import { Card, CardContent } from '@/components/ui/card'
import {
  PackageIcon,
  SparklesIcon,
  TriangleAlertIcon,
  WarehouseIcon,
} from 'lucide-react'
import Link from 'next/link'

export function StatsHeader() {
  return (
    <div className="flex gap-3">
      <Link href="/decision/alert">
        <Card className="bg-red-600 border-transparent">
          <CardContent className="p-3 flex items-center justify-between gap-2">
            <TriangleAlertIcon className="size-6" />
            <span className="font-bold text-xl leading-0">5</span>
            <p className="text-white font-semibold break-keep">
              의사결정 요구 사항
            </p>
          </CardContent>
        </Card>
      </Link>

      <Card className="bg-white">
        <CardContent className="p-3 flex items-center justify-between gap-2 text-gray-900">
          <SparklesIcon className="size-6" />
          <span className="font-bold text-xl leading-0">9</span>
          <p className="font-semibold break-keep">추천 액션</p>
        </CardContent>
      </Card>

      <div className="flex ml-auto gap-3">
        <Card className="bg-white">
          <CardContent className="p-3 flex items-center justify-between gap-2 text-gray-900">
            <PackageIcon className="size-6" />
            <span className="font-bold text-xl leading-0">304</span>
            <p className="font-semibold break-keep">출하 예정</p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-3 flex items-center justify-between gap-2 text-gray-900">
            <WarehouseIcon className="size-6" />
            <span className="font-bold text-xl leading-0">167</span>
            <p className="font-semibold break-keep">재고 상황</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
