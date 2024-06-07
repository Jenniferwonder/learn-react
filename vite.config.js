import path from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
// import UnocssIcons from '@unocss/preset-icons'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [UnoCSS(), react()],
  base: '/learn-react/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  resolve: {
    alias: {
      '@': '/src',
      '@utils': '/src/utils',
      '@layouts': '/src/layouts',
      '@data': '/src/data',
      '@router': '/src/router',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@Basic-demo': '/src/pages/Basic-demo',
      '@Dashboard': '/src/pages/Dashboard',
      // '@': path.resolve(__dirname, './src'),
      // '@utils': path.resolve(__dirname, './src/utils'),
      // '@layouts': path.resolve(__dirname, './src/layouts'),
      // '@data': path.resolve(__dirname, './src/data'),
      // '@router': path.resolve(__dirname, './src/router'),
      // '@components': path.resolve(__dirname, './src/components'),
      // '@contexts': path.resolve(__dirname, './src/contexts'),
      // '@Basic-demo': path.resolve(__dirname, './src/pages/Basic-demo'),
      // '@Dashboard': path.resolve(__dirname, './src/pages/Dashboard'),
    },
  },
})
