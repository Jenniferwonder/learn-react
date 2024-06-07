import ReactApexChart from 'react-apexcharts'
import { binance, bitcoin, ethereum, litecoin, solana, tether } from '@data/dummy'
import Breadcrumb from '@components/Breadcrumb'

export default function Finance() {
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb title="Finance" />
      {/* Display Section */}
      <div className="mr-4 mt-3 -ml-4 md:m-8 md:mt-4 p-2 dark:bg-[#34373e]">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6 text-white">
          {/* 1.1 Users Visit */}
          <div className="panel bg-gradient-to-r from-cyan-500 to-cyan-400">
            <div className="flex justify-between">
              <div className="mr-1 rtl:ml-1 text-md font-semibold">Users Visit</div>

            </div>
            <div className="flex items-center mt-5">
              <div className="text-3xl font-bold mr-3 rtl:ml-3"> $170.46 </div>
              <div className="badge bg-white/30">+ 2.35% </div>
            </div>
            <div className="flex items-center font-semibold mt-5">
              <i className="i-mdi-eye-outline mr-2 rtl:ml-2 shrink-0" />
              Last Week 44,700
            </div>
          </div>

          {/* 1.2 Sessions */}
          <div className="panel bg-gradient-to-r from-violet-500 to-violet-400">
            <div className="flex justify-between">
              <div className="mr-1 rtl:ml-1 text-md font-semibold">Sessions</div>

            </div>
            <div className="flex items-center mt-5">
              <div className="text-3xl font-bold mr-3 rtl:ml-3"> 74,137 </div>
              <div className="badge bg-white/30">- 2.35% </div>
            </div>
            <div className="flex items-center font-semibold mt-5">
              <i className="i-mdi-eye-outlinemr-2 rtl:ml-2 shrink-0" />
              Last Week 84,709
            </div>
          </div>

          {/* 1.3 Time On-Site */}
          <div className="panel bg-gradient-to-r from-blue-500 to-blue-400">
            <div className="flex justify-between">
              <div className="mr-1 rtl:ml-1 text-md font-semibold">Time On-Site</div>

            </div>
            <div className="flex items-center mt-5">
              <div className="text-3xl font-bold mr-3 rtl:ml-3"> 38,085 </div>
              <div className="badge bg-white/30">+ 1.35% </div>
            </div>
            <div className="flex items-center font-semibold mt-5">
              <i className="i-mdi-eye-outline mr-2 rtl:ml-2 shrink-0" />
              Last Week 37,894
            </div>
          </div>

          {/* 1.4 Bounce Rate */}
          <div className="panel bg-gradient-to-r from-fuchsia-500 to-fuchsia-400">
            <div className="flex justify-between">
              <div className="mr-1 rtl:ml-1 text-md font-semibold">Bounce Rate</div>

            </div>
            <div className="flex items-center mt-5">
              <div className="text-3xl font-bold mr-3 rtl:ml-3"> 49.10% </div>
              <div className="badge bg-white/30">- 0.35% </div>
            </div>
            <div className="flex items-center font-semibold mt-5">
              <i className="i-mdi-eye-outlinemr-2 rtl:ml-2 shrink-0" />
              Last Week 50.01%
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* 2.1 Favorites  */}
          <div>
            <div className="flex items-center mb-5 font-bold">
              <span className="text-lg">Favorites</span>
              <button type="button" className="ml-auto rtl:mr-auto text-primary hover:text-black dark:hover:text-white-dark">
                See All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:mb-5">
              {/*  Bitcoin  */}
              <div className="panel">
                <div className="flex items-center font-semibold mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                    <i className="i-logos-bitcoin" />
                  </div>
                  <div className="ml-2 rtl:mr-2">
                    <h6 className="text-dark dark:text-white-light">BTC</h6>
                    <p className="text-white-dark text-xs">Bitcoin</p>
                  </div>
                </div>
                <div className="mb-5 overflow-hidden">
                  <ReactApexChart series={bitcoin.series} options={bitcoin.options} type="line" height={45} />
                </div>
                <div className="flex justify-between items-center font-bold text-base">
                  $20,000
                  {' '}
                  <span className="text-success font-normal text-sm">+0.25%</span>
                </div>
              </div>
              {/*  Ethereum */}
              <div className="panel">
                <div className="flex items-center font-semibold mb-5">
                  <div className="shrink-0 w-10 h-10 bg-warning rounded-full grid place-content-center p-2">
                    <i className="i-logos-ethereum" />
                  </div>
                  <div className="ml-2 rtl:mr-2">
                    <h6 className="text-dark dark:text-white-light">ETH</h6>
                    <p className="text-white-dark text-xs">Ethereum</p>
                  </div>
                </div>
                <div className="mb-5 overflow-hidden">
                  <ReactApexChart series={ethereum.series} options={ethereum.options} type="line" height={45} />
                </div>
                <div className="flex justify-between items-center font-bold text-base">
                  $21,000
                  {' '}
                  <span className="text-danger font-normal text-sm">-1.25%</span>
                </div>
              </div>
              {/*  Litecoin */}
              <div className="panel">
                <div className="flex items-center font-semibold mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                    <i className="i-logos-litecoin">L</i>
                  </div>
                  <div className="ml-2 rtl:mr-2">
                    <h6 className="text-dark dark:text-white-light">LTC</h6>
                    <p className="text-white-dark text-xs">Litecoin</p>
                  </div>
                </div>
                <div className="mb-5 overflow-hidden">
                  <ReactApexChart series={litecoin.series} options={litecoin.options} type="line" height={45} />
                </div>
                <div className="flex justify-between items-center font-bold text-base">
                  $11,657
                  {' '}
                  <span className="text-success font-normal text-sm">+0.25%</span>
                </div>
              </div>
            </div>
          </div>
          {/* 2.2 Prices  */}
          <div>
            <div className="flex items-center mb-5 font-bold">
              <span className="text-lg">Live Prices</span>
              <button type="button" className="ml-auto rtl:mr-auto text-primary hover:text-black dark:hover:text-white-dark">
                See All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              {/*  Binance */}
              <div className="panel">
                <div className="flex items-center font-semibold mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                    <i className="i-logos-binance" />
                  </div>
                  <div className="ml-2 rtl:mr-2">
                    <h6 className="text-dark dark:text-white-light">BNB</h6>
                    <p className="text-white-dark text-xs">Binance</p>
                  </div>
                </div>
                <div className="mb-5 overflow-hidden">
                  <ReactApexChart series={binance.series} options={binance.options} type="line" height={45} />
                </div>
                <div className="flex justify-between items-center font-bold text-base">
                  $21,000
                  {' '}
                  <span className="text-danger font-normal text-sm">-1.25%</span>
                </div>
              </div>
              {/*  Tether  */}
              <div className="panel">
                <div className="flex items-center font-semibold mb-5">
                  <div className="shrink-0 w-10 h-10 rounded-full grid place-content-center">
                    <i className="i-logos-tether" />
                  </div>
                  <div className="ml-2 rtl:mr-2">
                    <h6 className="text-dark dark:text-white-light">USDT</h6>
                    <p className="text-white-dark text-xs">Tether</p>
                  </div>
                </div>
                <div className="mb-5 overflow-hidden">
                  <ReactApexChart series={tether.series} options={tether.options} type="line" height={45} />
                </div>
                <div className="flex justify-between items-center font-bold text-base">
                  $20,000
                  {' '}
                  <span className="text-success font-normal text-sm">+0.25%</span>
                </div>
              </div>
              {/*  Solana */}
              <div className="panel">
                <div className="flex items-center font-semibold mb-5">
                  <div className="shrink-0 w-10 h-10 bg-warning rounded-full p-2 grid place-content-center">
                    <i className="i-logos-solana">S</i>
                  </div>
                  <div className="ml-2 rtl:mr-2">
                    <h6 className="text-dark dark:text-white-light">SOL</h6>
                    <p className="text-white-dark text-xs">Solana</p>
                  </div>
                </div>
                <div className="mb-5 overflow-hidden">
                  <ReactApexChart series={solana.series} options={solana.options} type="line" height={45} />
                </div>
                <div className="flex justify-between items-center font-bold text-base">
                  $21,000
                  {' '}
                  <span className="text-danger font-normal text-sm">-1.25%</span>
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
