import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SKU_LIST } from "../constant"

export function SkuDataTables() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-4">
      <Card className="h-full overflow-hidden">
        <CardHeader className="border-b p-4">
          <CardTitle className="font-semibold text-lg">출고 예정</CardTitle>
        </CardHeader>
        <CardContent
          className="overflow-y-auto p-0"
          style={{ height: "calc(100% - 57px)" }}
        >
          <ul className="divide-y">
            {SKU_LIST.filter((_, index) => index % 2).map((item) => (
              <li className="flex flex-col gap-2 p-4" key={item.sku}>
                <div className="font-medium text-sm">{item.product}</div>
                <div className="text-gray-500 text-xs">{item.sku}</div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <span>Action - </span>
                  <div className="leading-none text-[10px] bg-orange-100 border border-orange-500 text-orange-500 px-1 py-0.5 rounded">
                    출고 예정
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="h-full overflow-hidden">
        <CardHeader className="border-b p-4">
          <CardTitle className="font-semibold text-lg">출고 완료</CardTitle>
        </CardHeader>

        <CardContent
          className="overflow-y-auto p-0"
          style={{ height: "calc(100% - 57px)" }}
        >
          <ul className="divide-y">
            {SKU_LIST.filter((_, index) => !(index % 2)).map((item) => (
              <li className="flex flex-col gap-2 p-4" key={item.sku}>
                <div className="font-medium text-sm">{item.product}</div>
                <div className="text-gray-500 text-xs">{item.sku}</div>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <span>Action - </span>
                  <div className="leading-none text-[10px] bg-blue-100 border border-blue-500 text-blue-500 px-1 py-0.5 rounded">
                    출고 완료
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
