import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: 'istanbul',
      reporter: ['html'],
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    }
  }
})
