import { Button } from '@/components/ui/button'
import { Sidebar, SidebarHeader } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import {
  BarChart3,
  Monitor,
  Package,
  ShoppingCart,
  Target,
  TrendingUp,
} from 'lucide-react'

const menuItems = [
  {
    title: '[공통] 브랜드 모니터링',
    icon: Monitor,
    active: false,
  },
  {
    title: '브랜드 매출 의사결정',
    icon: BarChart3,
    active: true,
  },
  {
    title: '브랜드 가격 최적화',
    icon: TrendingUp,
    active: false,
  },
  {
    title: '브랜드 매출 의사결정',
    icon: Target,
    active: false,
  },
  {
    title: '플랫폼 매출 의사결정',
    icon: ShoppingCart,
    active: false,
  },
  {
    title: '플랫폼 제품 배치 최적화',
    icon: Package,
    active: false,
  },
  {
    title: '플랫폼 손실 최적화',
    icon: TrendingUp,
    active: false,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>의사결정</SidebarHeader>

      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start text-left h-auto py-3 px-3',
              item.active && 'bg-blue-50 text-blue-700 border border-blue-200',
            )}
          >
            <item.icon className="mr-3 h-4 w-4 flex-shrink-0" />

            <span className="text-sm font-medium">{item.title}</span>
          </Button>
        ))}
      </div>
    </Sidebar>
  )
}
