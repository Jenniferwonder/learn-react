import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'
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
})
