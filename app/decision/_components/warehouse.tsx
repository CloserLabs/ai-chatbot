import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  AlertCircle,
  CheckCircle2,
  Package,
  TrendingDown,
  TrendingUp,
} from "lucide-react"

export const Warehouse = () => {
  const inventoryData = [
    {
      name: "브라운 레더 핸드백",
      stock: 245,
      status: "optimal",
      trend: "up",
      percentage: 12,
    },
    {
      name: "블랙 크로스백",
      stock: 89,
      status: "warning",
      trend: "down",
      percentage: -8,
    },
    {
      name: "네이비 토트백",
      stock: 312,
      status: "optimal",
      trend: "up",
      percentage: 5,
    },
    {
      name: "베이지 숄더백",
      stock: 34,
      status: "critical",
      trend: "down",
      percentage: -23,
    },
    {
      name: "그레이 백팩",
      stock: 156,
      status: "optimal",
      trend: "stable",
      percentage: 0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "text-green-600 bg-green-50"
      case "warning":
        return "text-yellow-600 bg-yellow-50"
      case "critical":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getTrendIcon = (trend: string, percentage: number) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-green-500" />
    if (trend === "down")
      return <TrendingDown className="w-4 h-4 text-red-500" />
    return <div className="w-4 h-4 bg-gray-400 rounded-full" />
  }

  const getStatusIcon = (status: string) => {
    if (status === "optimal") return <CheckCircle2 className="w-4 h-4" />
    if (status === "critical") return <AlertCircle className="w-4 h-4" />
    return <AlertCircle className="w-4 h-4" />
  }

  return (
    <Card className="col-span-3 h-[500px]">
      <CardHeader className="flex items-center justify-between gap-2 p-4 text-gray-900">
        <p className="break-keep text-lg font-semibold">재고 상황</p>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        <div className="space-y-3">
          {inventoryData.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Package className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(item.status)}`}
                      >
                        {item.stock}개
                      </span>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(item.status)}
                        <span className="text-xs text-gray-500">
                          {item.status === "optimal" && "적정"}
                          {item.status === "warning" && "주의"}
                          {item.status === "critical" && "긴급"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      {getTrendIcon(item.trend, item.percentage)}
                      <span
                        className={`text-sm font-semibold ${
                          item.percentage > 0
                            ? "text-green-600"
                            : item.percentage < 0
                              ? "text-red-600"
                              : "text-gray-600"
                        }`}
                      >
                        {item.percentage > 0 ? "+" : ""}
                        {item.percentage}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">전주 대비</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-3 right-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${
                    item.status === "optimal"
                      ? "bg-green-500"
                      : item.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: `${Math.min((item.stock / 350) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
