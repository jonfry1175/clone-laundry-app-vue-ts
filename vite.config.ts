// main.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
const proxyOptions = {
  target: (import.meta as unknown as { env: { VITE_API_URL: string } }).env?.VITE_API_URL,
  changeOrigin: true,
  secure: false,
  ws: true,
};

const customProxyOptions = {
  ...proxyOptions,
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Sending Request to the Target: ${req.method} ${req.url}`);
  },
};

export default defineConfig({
  // ... konfigurasi lainnya
  plugins: [vue()],
  server: {
    proxy: {
      '/api': customProxyOptions
    }
  }
});