import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine the base URL based on the environment
const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';
const base = isGitHubPages ? '/book_timeline/' : '/';

export default defineConfig({
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'd3-vendor': ['d3'],
            'lucide-vendor': ['lucide-react']
          }
        }
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
});
