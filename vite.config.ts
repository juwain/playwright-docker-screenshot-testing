import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { resolve } from 'path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src')
    }
  },
  server: {
    port: 5173,
    host: true
  },
  // Exclude Playwright from Vite's dependency optimization
  optimizeDeps: {
    exclude: ['@playwright/test', 'playwright-core']
  },
  build: {
    rollupOptions: {
      input: resolve(dirname, 'index.html')
    }
  }
});
