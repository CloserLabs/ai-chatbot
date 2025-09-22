import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  BarChart3,
  Monitor,
  Package,
  ShoppingCart,
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
    <Sidebar
      style={{
        '--sidebar-width': '13rem',
      } as React.CSSProperties}
    >
      <SidebarHeader className="p-4">
        <h1 className="font-medium text-sm">의사결정</h1>
      </SidebarHeader>

      <SidebarContent className="flex flex-col gap-2 p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton isActive={item.active}>
                <item.icon />

                {item.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
