import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/get-airport': {
        target: 'https://flyez.ai',
        changeOrigin: true,
        secure: false,
      },
      '/travel-gpt': {
        target: 'https://flyez.ai',
        changeOrigin: true,
        secure: false,
      },
      '/popular-routes': {
        target: 'https://flyez.ai',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

