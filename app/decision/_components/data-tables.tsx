import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const topSkuData = [
  { product: "오버사이즈 블레이저 자켓", sku: "JK-2025-001" },
  { product: "와이드 데님 팬츠", sku: "DN-2025-105" },
  { product: "캐시미어 터틀넥 니트", sku: "KN-2025-087" },
  { product: "레더 미니 크로스백", sku: "BG-2025-203" },
  { product: "스퀘어토 앵클부츠", sku: "SH-2025-056" },
]

const salesData = [
  { product: "오버사이즈 블레이저 자켓", sales: "2,341" },
  { product: "와이드 데님 팬츠", sales: "1,827" },
  { product: "캐시미어 터틀넥 니트", sales: "1,562" },
  { product: "레더 미니 크로스백", sales: "1,204" },
  { product: "스퀘어토 앵클부츠", sales: "987" },
]

export function DataTables() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-base">
            매출이 감소한 SKU Top 5
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>제품명</TableHead>
                <TableHead>SKU No</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topSkuData.map((item) => (
                <TableRow key={item.sku}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-base">
            예상 판매량이 높아진 경쟁사 제품
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>제품명</TableHead>
                <TableHead>예상 판매량</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((item) => (
                <TableRow key={item.product}>
                  <TableCell className="font-medium">{item.product}</TableCell>
                  <TableCell>{item.sales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
