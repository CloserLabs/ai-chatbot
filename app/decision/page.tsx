import { SalesChartBar } from "@/components/ui/shadcn-io/bar-chart-02/sales"
import { SkuDataTables } from "./_components/sku"
import { StatsHeader } from "./_components/stats-header"
import { Warehouse } from "./_components/warehouse"

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <StatsHeader />

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 h-[600px]">
          <SalesChartBar />
        </div>

        <div className="col-span-1 h-[600px]">
          <SkuDataTables />
        </div>

        <Warehouse />
      </div>
    </div>
  )
}
