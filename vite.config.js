import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true, // permite acesso externo, equivalente a "0.0.0.0"
    port: 5173, // opcional: define a porta que deseja usar
  },
  optimizeDeps: {
    include: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome'
    ]
  },
  resolve: {
    alias: {
      '@fortawesome/fontawesome-svg-core': '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome'
    }
  }
})
