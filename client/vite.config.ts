import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist', // Change this to a directory inside the client workspace
    emptyOutDir: true, // Ensure the directory is emptied before building
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});