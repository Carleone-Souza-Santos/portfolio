import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // Usa a variável de ambiente VITE_API_URL para configurar o proxy.
        // Se não estiver definida, usa localhost para desenvolvimento.
        target: process.env.VITE_API_URL || 'http://localhost:3000', // URL do backend
        changeOrigin: true, // Redireciona chamadas CORS (útil para chamadas cross-origin)
        secure: false, // Desativa SSL, útil se o backend não tiver HTTPS
        ws: true, // Suporte a WebSockets
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescreve a URL, removendo /api
      },
    },
  },

  // Outras configurações úteis para tornar a configuração mais flexível:
  resolve: {
    alias: {
      '@': '/src', // Alias para simplificar importações dentro do projeto
    },
  },

  build: {
    outDir: 'dist', // Configura a pasta de saída para a build
    sourcemap: true, // Gera um arquivo de mapa de origem para depuração
  },

  // Configurações de ambiente para diferentes ambientes (ex: desenvolvimento, produção)
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), // Definir o ambiente de execução
  },
});
