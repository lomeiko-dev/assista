import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), mkcert(), svgLoader()],
  server: {
    port: 443,
    host: "0.0.0.0",
    hmr: {
        host: 'tg-mini-app.local',
        port: 443,
    },
  }
})
