import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: Number(process.env.PORT) || 5173,
    // Only force the exact port when one is explicitly provided (e.g. by
    // dev tooling); plain `npm run dev` falls back to the next free port.
    strictPort: Boolean(process.env.PORT),
    watch: {
      // Photoshop's Generator panel writes a locked *.log file into
      // src/assets when exporting layers, which crashes Vite's watcher
      // with EBUSY on Windows. Asset log files aren't source anyway.
      ignored: ['**/src/assets/**/*.log'],
    },
  },
})
