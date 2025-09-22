import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const topSkuData = [
  { product: '제품명 1', sku: 'SKU No' },
  { product: '제품명 2', sku: 'SKU No' },
  { product: '제품명 3', sku: 'SKU No' },
  { product: '제품명 4', sku: 'SKU No' },
  { product: '제품명 5', sku: 'SKU No' },
]

const salesData = [
  { product: '제품명 1', sales: '500' },
  { product: '제품명 2', sales: '400' },
  { product: '제품명 3', sales: '300' },
  { product: '제품명 4', sales: '200' },
  { product: '제품명 5', sales: '100' },
]

export function DataTables() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">
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
              {topSkuData.map((item, index) => (
                <TableRow key={index}>
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
          <CardTitle className="text-base font-medium">
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
              {salesData.map((item, index) => (
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
