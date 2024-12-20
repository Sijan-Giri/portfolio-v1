import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  build: {
    outDir: 'dist', // Ensure output goes to the dist folder
    rollupOptions: {
      input: 'index.html', // Ensure Vite is using the right HTML as entry
    },
  },
})
