import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config
export default defineConfig((config) => {
  const { mode } = config
  const isDevelopment = mode === 'development'

  return {
    root: isDevelopment ? process.cwd() : `./src`,
    plugins: [vue()]
  }
});
