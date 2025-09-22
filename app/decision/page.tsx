import { Card, CardContent } from '@/components/ui/card'
import { SalesChartBar } from '@/components/ui/shadcn-io/bar-chart-02/sales'
import { DataTables } from './_components/data-tables'
import { StatsHeader } from './_components/stats-header'

export default function Page() {
  return (
    <div className="p-4">
      <StatsHeader />

      <div className='mt-6 flex flex-col gap-4'>
        <Card className="w-full">
          <CardContent className="p-0">
            <SalesChartBar />
          </CardContent>
        </Card>

        <DataTables />
      </div>
    </div>
  )
}
