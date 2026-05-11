import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'
import sitemap from 'vite-plugin-sitemap'
import { mkdirSync } from 'fs'

mkdirSync('dist', { recursive: true })

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mkcert(),
    sitemap({
      hostname: 'https://darshgandhi.dev',
      dynamicRoutes: ['/', '/resume']
    })
  ]
})
