import { Card } from "@/components/ui/card"
import { Boxes } from "@/components/ui/shadcn-io/background-boxes"

import Link from "next/link"

const NAV_ITEMS = [
  { name: "S-LLM", href: "/chat" },
  { name: "의사결정", href: "/decision" },
]

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Boxes className="absolute inset-0" />

      <nav className="absolute z-10">
        <ul className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="font-medium text-lg">
                <Card className="p-4">{item.name}</Card>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
