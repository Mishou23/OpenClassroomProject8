import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ViteSassPlugin from 'vite-plugin-sass'; // Import the SASS plugin


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteSassPlugin(), // Add the SASS plugin
  ],
})
