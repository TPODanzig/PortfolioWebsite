import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const basePath = '/PortfolioWebsite/';

export default defineConfig({
  plugins: [tailwindcss(), react() ],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': 'index.html',
      },
    },
  },
});