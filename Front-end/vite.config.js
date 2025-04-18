import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  // server: {
  //   hmr: true
  // }
  server: {
    host: '0.0.0.0', // Makes the server accessible on your local network
    port: 5173,      // Default Vite port (you can change this if needed)
    hmr: true
  },
})
