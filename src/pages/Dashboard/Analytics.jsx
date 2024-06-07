import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { engagement, followers, paidVisit, referral, totalVisit, uniqueVisitorSeries } from '@data/dummy'
import Breadcrumb from '@components/Breadcrumb'

export default function Analytics() {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb title="Analytics" />
      {/* Display Section */}
      <div className="mr-4 mt-3 -ml-4 md:m-8 md:mt-4 p-2 dark:bg-[#34373e]">
        {/* Row 1 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* 1.1 statistics */}
          <div className="panel h-full sm:col-span-2 lg:col-span-1">
            <div className="flex justify-between dark:text-white-light mb-5">
              <h5 className="font-semibold text-lg ">Statistics</h5>

            </div>
            <div className="grid sm:grid-cols-2 gap-8 text-sm text-[#515365] font-bold">
              <div>
                <div>
                  <div>Total Visits</div>
                  <div className="text-[#f8538d] text-lg">423,964</div>
                </div>

                <ReactApexChart series={totalVisit.series} options={totalVisit.options} type="line" height={58} className="overflow-hidden" />
              </div>

              <div>
                <div>
                  <div>Paid Visits</div>
                  <div className="text-[#f8538d] text-lg">7,929</div>
                </div>

                <ReactApexChart series={paidVisit.series} options={paidVisit.options} type="line" height={58} className="overflow-hidden" />
              </div>
            </div>
          </div>
          {/* 1.2 expenses */}
          <div className="panel h-full">
            <div className="flex justify-between dark:text-white-light mb-5">
              <h5 className="font-semibold text-lg ">Expenses</h5>
            </div>
            <div className=" text-[#e95f2b] text-3xl font-bold my-10">
              <span>$ 45,141 </span>
              <span className="text-black text-sm dark:text-white-light mr-2 rtl:ml-2">this week</span>
              <div className="text-success inline ml-2">
                <i className="i-carbon-chart-line text-lg" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:shadow-none dark:bg-dark-light/10">
                <div
                  className="bg-gradient-to-r from-[#4361ee] to-[#805dca] w-full h-full rounded-full relative before:absolute before:inset-y-0 :before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto"
                  style={{ width: '65%' }}
                >
                </div>
              </div>
              <span className="ml-5 rtl:mr-5 dark:text-white-light">57%</span>
            </div>
          </div>
          {/* 1.3 total balance */}
          <div
            className="panel h-full overflow-hidden before:bg-[#1937cc] before:absolute before:-right-44 before:top-0 before:bottom-0 before:m-auto before:rounded-full before:w-96 before:h-96 grid grid-cols-1 content-between"
            style={{ background: 'linear-gradient(0deg,#00c6fb -227%,#005bea)' }}
          >
            <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
              <h5 className="font-semibold text-lg">Total Balance</h5>

              <div className="relative text-xl whitespace-nowrap">
                $ 41,741.42
                <span className="table text-[#d3d3d3] bg-[#4361ee] rounded p-1 text-xs mt-1 ml-auto rtl:mr-auto">+ 2453</span>
              </div>
            </div>
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center justify-between">
                <div className="cursor-pointer shadow-[0_0_2px_0_#bfc9d4] rounded py-0 p-1 text-white-light hover:bg-[#1937cc] place-content-center mr-2 rtl:ml-2">
                  <i className="i-mdi-plus" />
                </div>
                <div className="cursor-pointer shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1937cc] grid place-content-center">
                  <i className="i-mdi-card-outline" />
                </div>
              </div>
              <div className="cursor-pointer shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#4361ee] z-10">
                Upgrade
              </div>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* 2.1 unique visitors */}
          <div className="panel h-full p-0 lg:col-span-2">
            <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
              <h5 className="font-semibold text-lg ">Unique Visitors</h5>

            </div>

            <ReactApexChart options={uniqueVisitorSeries.options} series={uniqueVisitorSeries.series} type="bar" height={360} className="overflow-hidden" />
          </div>
          {/* 2.2 activity log */}
          <div className="panel h-full">
            <div className="flex items-start justify-between dark:text-white-light mb-5 -mx-5 p-5 pt-0 border-b  border-white-light dark:border-[#1b2e4b]">
              <h5 className="font-semibold text-lg ">Activity Log</h5>

            </div>
            <div className="perfect-scrollbar relative h-[360px] pr-3 rtl:pl-3 -mr-3 rtl:-ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto ">
              <div className="space-y-7">
                <div className="flex">
                  <div className="shrink-0 mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                    <div className="bg-secondary shadow shadow-secondary w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <i className="i-mdi-plus w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold dark:text-white-light">
                      New project created
                    </h5>
                    <p className="text-white-dark text-xs">27 Feb, 2020</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                    <div className="bg-success shadow-success w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <i className="i-carbon-mail-all w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold dark:text-white-light">
                      Mail sent to
                      {' '}
                      <div className="text-white-dark">
                        HR
                      </div>
                      {' '}
                      and
                      {' '}
                      <div className="text-white-dark">
                        Admin
                      </div>
                    </h5>
                    <p className="text-white-dark text-xs">28 Feb, 2020</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <i className="i-carbon-checkmark w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold dark:text-white-light">Server Logs Updated</h5>
                    <p className="text-white-dark text-xs">27 Feb, 2020</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                    <div className="bg-danger w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <i className="i-carbon-checkmark w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold dark:text-white-light">
                      Task Completed :
                      <div className="text-success ml-1">
                        [Backup Files EOD]
                      </div>
                    </h5>
                    <p className="text-white-dark text-xs">01 Mar, 2020</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="shrink-0 mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                    <div className="bg-warning w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <i className="i-mdi-file-outline w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold dark:text-white-light">
                      Documents Submitted from
                      {' '}
                      <div>Sara</div>
                    </h5>
                    <p className="text-white-dark text-xs">10 Mar, 2020</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-2 rtl:ml-2">
                    <div className="bg-dark w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <i className="i-mdi-server-outline w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold dark:text-white-light">Server rebooted successfully</h5>
                    <p className="text-white-dark text-xs">06 Apr, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Row 3 */}
        {/* <div></div> */}
        {/* Row 4 */}
        {/* <div></div> */}
      </div>
    </div>
  )
}
