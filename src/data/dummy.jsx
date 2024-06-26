export const pageLinks = [
  {
    name: 'Dashboard',
    links: [{ name: 'Sales' }, { name: 'Analytics' }, { name: 'Finance' }],
  },
  {
    name: 'Basic-demo',
    links: [
      {
        name: 'Basics',
      },
      {
        name: 'Hooks',
        links: [
          {
            name: 'useState',
          },
          {
            name: 'useReducer',
          },
          {
            name: 'useContext',
          },
          {
            name: 'useRef',
          },
          {
            name: 'useEffect',
          },
          {
            name: 'useMemo',
          },
        ],
      },
      {
        name: 'React Mini App',
        links: [
          {
            name: 'product-table',
          },
          {
            name: 'tic-tac-toe',
          },
          {
            name: 'to-do-app',
          },
        ],
      },
      {
        name: 'Routing',
        links: [
          {
            name: 'router-dom',
          },
        ],
      },
      {
        name: 'Query',
        links: [
          {
            name: 'react-query',
          },
        ],
      },
    ],
  },
]

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
]

// Sales Data
// Revenue Chart
export const revenueChart = {
  series: [
    {
      name: 'Income',
      data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
    },
    {
      name: 'Expenses',
      data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
    },
  ],
  options: {
    chart: {
      height: 325,
      type: 'area',
      fontFamily: 'Nunito, sans-serif',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
      lineCap: 'square',
    },
    dropShadow: {
      enabled: true,
      opacity: 0.2,
      blur: 10,
      left: -7,
      top: 22,
    },
    // colors: isDark ? ['#2196F3', '#E7515A'] : ['#1B55E2', '#E7515A'],
    colors: ['#1B55E2', '#E7515A'],
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 6,
          fillColor: '#1B55E2',
          strokeColor: 'transparent',
          size: 7,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: '#E7515A',
          strokeColor: 'transparent',
          size: 7,
        },
      ],
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
      },
      labels: {
        // offsetX: isRtl ? 2 : 0,
        offsetX: 0,
        offsetY: 5,
        style: {
          fontSize: '12px',
          cssClass: 'apexcharts-xaxis-title',
        },
      },
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: (value) => {
          return `${value / 1000}K`
        },
        // offsetX: isRtl ? -30 : -10,
        offsetX: -10,
        offsetY: 0,
        style: {
          fontSize: '12px',
          cssClass: 'apexcharts-yaxis-title',
        },
      },
      // opposite: !!isRtl,
    },
    grid: {
      // borderColor: isDark ? '#191E3A' : '#E0E6ED',
      borderColor: '#E0E6ED',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      fontSize: '16px',
      markers: {
        width: 10,
        height: 10,
        offsetX: -2,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
    },
    tooltip: {
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        // opacityFrom: isDark ? 0.19 : 0.28,
        opacityFrom: 0.28,
        opacityTo: 0.05,
        // stops: isDark ? [100, 100] : [45, 100],
        stops: [45, 100],
      },
    },
  },
}

// Sales By Category
export const salesByCategory = {
  series: [985, 737, 270],
  options: {
    chart: {
      type: 'donut',
      height: 460,
      fontFamily: 'Nunito, sans-serif',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 25,
      // colors: isDark ? '#0e1726' : '#fff',
      colors: '#fff',
    },
    // colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
    colors: ['#e2a03f', '#5c1ac3', '#e7515a'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      markers: {
        width: 10,
        height: 10,
        offsetX: -2,
      },
      height: 50,
      offsetY: 20,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '29px',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '26px',
              // color: isDark ? '#bfc9d4' : undefined,
              color: undefined,
              offsetY: 16,
              formatter: (val) => {
                return val
              },
            },
            total: {
              show: true,
              label: 'Total',
              color: '#888ea8',
              fontSize: '29px',
              formatter: (w) => {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
              },
            },
          },
        },
      },
    },
    labels: ['Apparel', 'Sports', 'Others'],
    states: {
      hover: {
        filter: {
          type: 'none',
          value: 0.15,
        },
      },
      active: {
        filter: {
          type: 'none',
          value: 0.15,
        },
      },
    },
  },
}

// Daily Sales
export const dailySales = {
  series: [
    {
      name: 'Sales',
      data: [44, 55, 41, 67, 22, 43, 21],
    },
    {
      name: 'Last Week',
      data: [13, 23, 20, 8, 13, 27, 33],
    },
  ],
  options: {
    chart: {
      height: 160,
      type: 'bar',
      fontFamily: 'Nunito, sans-serif',
      toolbar: {
        show: false,
      },
      stacked: true,
      stackType: '100%',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
    },
    colors: ['#e2a03f', '#e0e6ed'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      labels: {
        show: false,
      },
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%',
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 10,
        right: -20,
        bottom: -20,
        left: -20,
      },
    },
  },
}

// Total Orders
export const totalOrders = {
  series: [
    {
      name: 'Sales',
      data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
    },
  ],
  options: {
    chart: {
      height: 290,
      type: 'area',
      fontFamily: 'Nunito, sans-serif',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    // colors: isDark ? ['#00ab55'] : ['#00ab55'],
    colors: ['#00ab55'],
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    yaxis: {
      min: 0,
      show: false,
    },
    grid: {
      padding: {
        top: 125,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.3,
        opacityTo: 0.05,
        stops: [100, 100],
      },
    },
    tooltip: {
      x: {
        show: false,
      },
    },
  },
}

// Finance Data
// bitcoinoption
export const bitcoin = {
  series: [
    {
      data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
    },
  ],
  options: {
    chart: {
      height: 45,
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#00ab55'],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  },
}

// ethereumoption
export const ethereum = {
  series: [
    {
      data: [44, 25, 59, 41, 66, 25, 21, 9, 36, 12],
    },
  ],
  options: {
    chart: {
      height: 45,
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#e7515a'],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  },
}

// litecoinoption
export const litecoin = {
  series: [
    {
      data: [9, 21, 36, 12, 66, 25, 44, 25, 41, 59],
    },
  ],
  options: {
    chart: {
      height: 45,
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#00ab55'],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  },
}

// binanceoption
export const binance = {
  series: [
    {
      data: [25, 44, 25, 59, 41, 21, 36, 12, 19, 9],
    },
  ],
  options: {
    chart: {
      height: 45,
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#e7515a'],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  },
}

// tetheroption
export const tether = {
  series: [
    {
      data: [21, 59, 41, 44, 25, 66, 9, 36, 25, 12],
    },
  ],
  options: {
    chart: {
      height: 45,
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#00ab55'],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  },
}

// solanaoption
export const solana = {
  series: [
    {
      data: [21, -9, 36, -12, 44, 25, 59, -41, 66, -25],
    },
  ],
  options: {
    chart: {
      height: 45,
      type: 'line',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    colors: ['#e7515a'],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
    responsive: [
      {
        breakPoint: 576,
        options: {
          chart: {
            height: 95,
          },
          grid: {
            padding: {
              top: 45,
              bottom: 0,
              left: 0,
            },
          },
        },
      },
    ],
  },
}
// Analytics Data
// totalVisitOptions
export const totalVisit = {
  series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
  options: {
    chart: {
      height: 58,
      type: 'line',
      fontFamily: 'Nunito, sans-serif',
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        color: '#009688',
        opacity: 0.4,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#009688'],
    grid: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
  },
}
// paidVisitOptions
export const paidVisit = {
  series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
  options: {
    chart: {
      height: 58,
      type: 'line',
      fontFamily: 'Nunito, sans-serif',
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        color: '#e2a03f',
        opacity: 0.4,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#e2a03f'],
    grid: {
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
  },
}
// uniqueVisitorSeriesOptions
export const uniqueVisitorSeries = {
  series: [
    {
      name: 'Direct',
      data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
    },
    {
      name: 'Organic',
      data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
    },
  ],
  options: {
    chart: {
      height: 360,
      type: 'bar',
      fontFamily: 'Nunito, sans-serif',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      colors: ['transparent'],
    },
    colors: ['#5c1ac3', '#ffbb44'],
    dropShadow: {
      enabled: true,
      blur: 3,
      color: '#515365',
      opacity: 0.4,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 8,
        borderRadiusApplication: 'end',
      },
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 8,
        vertical: 8,
      },
    },
    grid: {
      // borderColor: isDark ? '#191e3a' : '#e0e6ed',
      borderColor: '#e0e6ed',
      padding: {
        left: 20,
        right: 20,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisBorder: {
        show: true,
        // color: isDark ? '#3b3f5c' : '#e0e6ed',
        color: '#e0e6ed',
      },
    },
    yaxis: {
      tickAmount: 6,
      // opposite: !!isRtl,
      // opposite: true,
      labels: {
        // offsetX: isRtl ? -10 : 0,
        offsetX: 0,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        // shade: isDark ? 'dark' : 'light',
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100],
      },
    },
    tooltip: {
      marker: {
        show: true,
      },
    },
  },
}
// followersOptions
export const followers = {
  series: [
    {
      data: [38, 60, 38, 52, 36, 40, 28],
    },
  ],
  options: {
    chart: {
      height: 160,
      type: 'area',
      fontFamily: 'Nunito, sans-serif',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#4361ee'],
    grid: {
      padding: {
        top: 5,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
  },
}
// referralOptions
export const referral = {
  series: [
    {
      data: [60, 28, 52, 38, 40, 36, 38],
    },
  ],
  options: {
    chart: {
      height: 160,
      type: 'area',
      fontFamily: 'Nunito, sans-serif',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#e7515a'],
    grid: {
      padding: {
        top: 5,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
  },
}
// engagementOptions
export const engagement = {
  series: [
    {
      name: 'Sales',
      data: [28, 50, 36, 60, 38, 52, 38],
    },
  ],
  options: {
    chart: {
      height: 160,
      type: 'area',
      fontFamily: 'Nunito, sans-serif',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: ['#1abc9c'],
    grid: {
      padding: {
        top: 5,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return ''
          },
        },
      },
    },
  },
}
