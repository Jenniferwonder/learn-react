import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { dailySales, revenueChart, salesByCategory, totalOrders } from '@data/dummy'
import Breadcrumb from '@components/Breadcrumb'

export default function Sales() {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb title="Sales" />
      {/* Display Section */}
      <div className="mr-4 mt-3 -ml-4 md:m-8 md:mt-4 p-2 dark:bg-[#34373e] ">
        {/* Row 1 */}
        <div className="grid xl:grid-cols-3 gap-6 mb-6">
          {/* Row 1.1-Line Chart */}
          <div className="panel h-full xl:col-span-2">
            {/* 1.1.1-Title */}
            <div className="flex items-center justify-between dark:text-white-light mb-5">
              <h5 className="font-semibold text-lg">Revenue</h5>
            </div>
            {/* 1.1.1-Sum */}
            <p className="text-lg dark:text-white-light/90">
              Total Profit
              {' '}
              <span className="text-primary ml-2">$10,840</span>
            </p>
            {/* 1.1.1-Chart */}
            <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
              <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={325} />
            </div>
          </div>
          {/* Row 1.2-Pie Chart */}
          <div className="panel h-full">
            <div className="flex items-center mb-5">
              <h5 className="font-semibold text-lg dark:text-white-light">Sales By Category</h5>
            </div>
            <div>
              <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
                <ReactApexChart series={salesByCategory.series} options={salesByCategory.options} type="donut" height={460} />
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {/* 2.1-Daily Sales Bar Chart */}
          <div className="panel h-full sm:col-span-2 xl:col-span-1">
            {/* 2.1.1-Title */}
            <div className="flex items-center mb-5">
              <h5 className="font-semibold text-lg dark:text-white-light">
                Daily Sales
                <span className="block text-white-dark text-sm font-normal">Go to columns for details.</span>
              </h5>
              <div className="ml-auto relative">
                <div className="w-11 h-11 text-warning bg-[#ffeccb] dark:bg-warning dark:text-[#ffeccb] grid place-content-center rounded-full">
                  <i className="i-carbon-currency-dollar text-3xl" />
                </div>
              </div>
            </div>
            {/* 2.1.2-Chart */}
            <div>
              <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
                <ReactApexChart series={dailySales.series} options={dailySales.options} type="bar" height={160} />
              </div>
            </div>
          </div>
          {/* 2.2-Summary Report Card */}
          <div className="panel h-full">
            {/* 2.2.1-Title */}
            <div className="dark:text-white-light mb-5">
              <h5 className="font-semibold text-lg">Summary</h5>
            </div>
            {/* 2.2.2-Bars */}
            <div className="space-y-9">
              {/* 2.2.2.1-Bar-1 */}
              <div className="flex items-center">
                <div className="w-9 h-9 mr-3 rtl:ml-3">
                  <div className="bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light  rounded-full w-9 h-9 grid place-content-center">
                    <i className="i-carbon-money text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex font-semibold text-white-dark mb-2">
                    <h6>Income</h6>
                    <p className="ml-auto rtl:mr-auto">$92,600</p>
                  </div>
                  <div className="rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                    <div className="bg-gradient-to-r from-[#7579ff] to-[#b224ef] w-11/12 h-full rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* 2.2.2.2-Bar-2 */}
              <div className="flex items-center">
                <div className="w-9 h-9 mr-3 rtl:ml-3">
                  <div className="bg-success-light dark:bg-success text-success dark:text-success-light rounded-full w-9 h-9 grid place-content-center">
                    <i className="i-carbon-tag text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex font-semibold text-white-dark mb-2">
                    <h6>Profit</h6>
                    <p className="ml-auto rtl:mr-auto">$37,515</p>
                  </div>
                  <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                    <div className="bg-gradient-to-r from-[#3cba92] to-[#0ba360] w-full h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
              {/* 2.2.2.3-Bar-3 */}
              <div className="flex items-center">
                <div className="w-9 h-9 mr-3 rtl:ml-3">
                  <div className="bg-warning-light dark:bg-warning text-warning dark:text-warning-light rounded-full w-9 h-9 grid place-content-center">
                    <i className="i-carbon-shopping-bag text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex font-semibold text-white-dark mb-2">
                    <h6>Expenses</h6>
                    <p className="ml-auto rtl:mr-auto">$55,085</p>
                  </div>
                  <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                    <div className="bg-gradient-to-r from-[#f09819] to-[#ff5858] w-full h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2.3-Total Orders Card */}
          <div className="panel h-full p-0">
            {/* 2.3.1-Title */}
            <div className="flex items-center justify-between w-full p-5 absolute">
              <div className="relative">
                <div className="text-success dark:text-success-light bg-success-light dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center">
                  <i className="i-carbon-shopping-cart text-3xl" />
                </div>
              </div>
              <h5 className="font-semibold text-2xl text-right rtl:text-left dark:text-white-light">
                3,192
                <span className="block text-sm font-normal">Total Orders</span>
              </h5>
            </div>
            {/* 2.3.2-Chart */}
            <div className="bg-transparent rounded-lg overflow-hidden">
              <ReactApexChart series={totalOrders.series} options={totalOrders.options} type="area" height={290} />
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {/* 3.1-Recent Activities List */}
          <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
            {/* 3.1.1-Title */}
            <h5 className="font-semibold text-lg dark:text-white-light mb-5">Recent Activities</h5>
            {/* 3.1.2-List  */}
            <div className="relative h-[290px] pr-3 rtl:pl-3 -mr-3 rtl:-ml-3 mb-4 overflow-auto md:overflow-hidden md:hover:overflow-auto">
              <div className="text-sm cursor-pointer">
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-primary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Updated Server Logs</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">Just Now</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-success w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Send Mail to HR and Admin</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">2 min ago</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-danger w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Backup Files EOD</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">14:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-black w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Collect documents from Sara</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">16:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-warning w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Conference call with Marketing Manager.</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-info w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Rebooted Server</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-secondary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Send contract details to Freelancer</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">18:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-primary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Updated Server Logs</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">Just Now</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-success w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Send Mail to HR and Admin</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">2 min ago</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-danger w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Backup Files EOD</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">14:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-black w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Collect documents from Sara</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">16:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-warning w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Conference call with Marketing Manager.</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-info w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Rebooted Server</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>
                </div>
                <div className="flex items-center py-1.5 relative group">
                  <div className="bg-secondary w-1.5 h-1.5 rounded-full mr-1 rtl:ml-1.5" />
                  <div className="flex-1">Send contract details to Freelancer</div>
                  <div className="ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">18:00</div>
                </div>
              </div>
            </div>
            {/* 3.1.3-View All */}
            <div className="border-t border-white-light dark:border-white/10">
              <Link to="/learn-react/Dashboard/Sales" className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group">
                View All
                <i className="i-carbon-arrow-right rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition duration-300 ml-1 rtl:mr-1" />
              </Link>
            </div>
          </div>
          {/* 3.2-Transactions List */}
          <div className="panel h-full">
            {/* 3.2.1-Title */}
            <div className="flex items-center justify-between dark:text-white-light mb-5">
              <h5 className="font-semibold text-lg">Transactions</h5>
            </div>
            {/* 3.2.2-List */}
            <div>
              <div className="space-y-6">
                <div className="flex">
                  <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light">SP</span>
                  <div className="px-3 flex-1">
                    <div>Shaun Park</div>
                    <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div>
                  </div>
                  <span className="text-success text-base px-1 ml-auto rtl:mr-auto whitespace-pre">+$36.11</span>
                </div>
                <div className="flex">
                  <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-warning-light dark:bg-warning text-warning dark:text-warning-light">
                    <i className="i-carbon-money text-2xl" />
                  </span>
                  <div className="px-3 flex-1">
                    <div>Cash withdrawal</div>
                    <div className="text-xs text-white-dark dark:text-gray-500">04 Jan 1:00PM</div>
                  </div>
                  <span className="text-danger text-base px-1 ml-auto rtl:mr-auto whitespace-pre">-$16.44</span>
                </div>
                <div className="flex">
                  <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-danger-light dark:bg-danger text-danger dark:text-danger-light">
                    <i className="i-carbon-user w-6 h-6" />
                  </span>
                  <div className="px-3 flex-1">
                    <div>Amy Diaz</div>
                    <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div>
                  </div>
                  <span className="text-success text-base px-1 ml-auto rtl:mr-auto whitespace-pre">+$66.44</span>
                </div>
                <div className="flex">
                  <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light">
                    <i className="i-logos-netflix-icon text-2xl" />
                  </span>
                  <div className="px-3 flex-1">
                    <div>Netflix</div>
                    <div className="text-xs text-white-dark dark:text-gray-500">04 Jan 1:00PM</div>
                  </div>
                  <span className="text-danger text-base px-1 ml-auto rtl:mr-auto whitespace-pre">-$32.00</span>
                </div>
                <div className="flex">
                  <span className="shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-info-light dark:bg-info text-info dark:text-info-light">DA</span>
                  <div className="px-3 flex-1">
                    <div>Daisy Anderson</div>
                    <div className="text-xs text-white-dark dark:text-gray-500">10 Jan 1:00PM</div>
                  </div>
                  <span className="text-success text-base px-1 ml-auto rtl:mr-auto whitespace-pre">+$10.08</span>
                </div>
                <div className="flex">
                  <span className="shrink-0 grid place-content-center w-9 h-9 rounded-md bg-primary-light dark:bg-primary text-primary dark:text-primary-light">
                    <i className="i-carbon-lightning text-2xl" />
                  </span>
                  <div className="px-3 flex-1">
                    <div>Electricity Bill</div>
                    <div className="text-xs text-white-dark dark:text-gray-500">04 Jan 1:00PM</div>
                  </div>
                  <span className="text-danger text-base px-1 ml-auto rtl:mr-auto whitespace-pre">-$22.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* 3.3-Balance Card */}
          <div className="panel h-full p-0 border-0 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-[#4361ee] to-[#160f6b] min-h-[190px]">
              <div className="flex justify-between items-center mb-6">
                <div className="bg-black/50 rounded-full p-1 ltr:pr-3 rtl:pl-3 flex items-center text-white font-semibold">
                  <img className="w-8 h-8 rounded-full border-2 border-white/50 block object-cover ltr:mr-1 rtl:ml-1" src="../../assets/profile-34.jpeg" alt="avatar" />
                  Alan Green
                </div>
                <button type="button" className="ltr:ml-auto rtl:mr-auto flex items-center justify-between w-9 h-9 bg-black text-white rounded-md hover:opacity-80">
                  <i className="i-mdi-plus w-6 h-6 m-auto" />
                </button>
              </div>
              <div className="text-white flex justify-between items-center">
                <p className="text-xl">Wallet Balance</p>
                <h5 className="ltr:ml-auto rtl:mr-auto text-2xl">
                  <span className="text-white-light">$</span>
                  2953
                </h5>
              </div>
            </div>
            <div className="-mt-12 px-8 grid grid-cols-2 gap-2">
              <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                <span className="flex justify-between items-center mb-4 dark:text-white">
                  Received
                  <i className="i-carbon-chevron-up w-4 h-4 text-success rotate-180" />
                </span>
                <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">$97.99</div>
              </div>
              <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                <span className="flex justify-between items-center mb-4 dark:text-white">
                  Spent
                  <i className="i-carbon-chevron-down w-4 h-4 text-danger" />
                </span>
                <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">$53.00</div>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-5">
                <span className="bg-[#1b2e4b] text-white text-xs rounded-full px-4 py-1.5 before:bg-white before:w-1.5 before:h-1.5 before:rounded-full ltr:before:mr-2 rtl:before:ml-2 before:inline-block">
                  Pending
                </span>
              </div>
              <div className="mb-5 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[#515365] font-semibold">Netflix</p>
                  <p className="text-base">
                    <span>$</span>
                    {' '}
                    <span className="font-semibold">13.85</span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#515365] font-semibold">BlueHost VPN</p>
                  <p className="text-base">
                    <span>$</span>
                    {' '}
                    <span className="font-semibold ">15.66</span>
                  </p>
                </div>
              </div>
              <div className="text-center px-2 flex justify-around">
                <button type="button" className="btn btn-secondary ltr:mr-2 rtl:ml-2">
                  View Details
                </button>
                <button type="button" className="btn btn-success">
                  Pay Now $29.51
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Row 4 */}
      {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-6"></div> */}
    </div>
  )
}
