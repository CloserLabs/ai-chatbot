import { Card } from '@/components/ui/card'

import Link from 'next/link'

export default function Page() {
  const navItems = [
    { name: 'chat', href: '/chat' },
    { name: 'sllm', href: '/sllm' },
    { name: 'price', href: '/price' },
    { name: 'brand', href: '/brand' },
  ]

  return (
    <div className="flex min-h-screen items-center justify-center">
      <nav>
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-lg">
                <Card className="p-4 hover:bg-gray-500">{item.name}</Card>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
