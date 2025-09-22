import { SidebarProvider } from '@/components/ui/sidebar'
import type { ReactNode } from 'react'
import { AppSidebar } from './_components/sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      className="flex min-h-screen bg-gray-50"
      style={
        {
          '--sidebar-width': '13rem',
        } as React.CSSProperties
      }
    >
      <AppSidebar />

      <main className="flex-1 p-4">{children}</main>
    </SidebarProvider>
  )
}
