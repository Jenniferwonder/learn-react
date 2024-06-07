import ReactApexChart from 'react-apexcharts'
import { dailySales, revenueChart, salesByCategory, totalOrders } from '@data/dummy'
import Breadcrumb from '@components/Breadcrumb'

export default function Sales() {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb title="Sales" />
      <div className="mr-5 mt-3 -ml-4 md:m-16 md:mt-4 p-2 md:p-10 dark:bg-[#34373e] bg-white md:rounded-3xl">
      </div>
      {/* Display Section */}
      <div>
        {/* Row 1 */}
        <div></div>
        {/* Row 2 */}
        <div></div>
        {/* Row 3 */}
        <div></div>
        {/* Row 4 */}
        <div></div>
      </div>
    </div>
  )
}
