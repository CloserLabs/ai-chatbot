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
        <Card className='border-transparent bg-red-600'>
          <CardContent className='flex items-center justify-between gap-2 p-3'>
            <TriangleAlertIcon className="size-6" />
            <span className="font-bold text-xl leading-0">5</span>
            <p className='break-keep font-semibold text-white'>
              의사결정 요구 사항
            </p>
          </CardContent>
        </Card>
      </Link>

      <Card className="bg-white">
        <CardContent className='flex items-center justify-between gap-2 p-3 text-gray-900'>
          <SparklesIcon className="size-6" />
          <span className="font-bold text-xl leading-0">9</span>
          <p className='break-keep font-semibold'>추천 액션</p>
        </CardContent>
      </Card>

      <div className='ml-auto flex gap-3'>
        <Card className="bg-white">
          <CardContent className='flex items-center justify-between gap-2 p-3 text-gray-900'>
            <PackageIcon className="size-6" />
            <span className="font-bold text-xl leading-0">304</span>
            <p className='break-keep font-semibold'>출하 예정</p>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className='flex items-center justify-between gap-2 p-3 text-gray-900'>
            <WarehouseIcon className="size-6" />
            <span className="font-bold text-xl leading-0">167</span>
            <p className='break-keep font-semibold'>재고 상황</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
