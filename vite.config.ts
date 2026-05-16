import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// NOTE: The Gemini API key is intentionally NOT exposed to the client bundle.
// All Gemini calls go through /api/chat (Netlify Function), which reads
// GEMINI_API_KEY server-side only.
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
