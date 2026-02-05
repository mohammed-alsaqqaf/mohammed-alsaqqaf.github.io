import path from 'path';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import { loadEnv } from 'vite';

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, '.', '');
  const geminiApiKey =
    env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';

  return {
    base: '/', // ✅ required for mohammed-alsaqqaf.github.io

    plugins: [react(), mdx()],

    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(geminiApiKey),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    css: {
      postcss: './postcss.config.js',
    },

    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: false,
      rollupOptions: {
        input: './index.html',
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'framer-motion': ['framer-motion'],
            'google-genai': ['@google/genai'],
          },
        },
      },
    },
  };
};
