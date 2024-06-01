import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces
    port: 3000, // Puedes ajustar el puerto según tus necesidades
  },
  preview: {
    host: '0.0.0.0', // Escuchar en todas las interfaces para la vista previa de producción
    port: 3000, // Asegúrate de que coincide con el puerto que usas en Render
  },
})
