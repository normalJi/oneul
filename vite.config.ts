import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'oneul',
        short_name: 'oneul',
        description: '오늘을 만들다 - oneul',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'public/vite.svg',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'public/vite.svg',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
