import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: [
      '3000-izqjv3tcj2vuz2lxn54hn-eb4e6748.sg2.manus.computer',
      '8328-izqjv3tcj2vuz2lxn54hn-eb4e6748.sg2.manus.computer',
      '3000-ib5t222i0al2olbmzvqoy-bafa14d2.sg2.manus.computer',
    ],
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
