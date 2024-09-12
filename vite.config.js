import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://aarevalo3108.github.io/NewPortafolio/',
  plugins: [react()],
})
