import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_GITHUB_TOKEN || 'http://localhost:3000', // URL flexível
        changeOrigin: true, // Permite redirecionar chamadas CORS
        secure: false, // Desativa SSL (caso o backend esteja sem HTTPS)
        ws: true, // Suporte a WebSockets
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
