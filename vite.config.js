import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' lets the built site run from any folder on your host.
export default defineConfig({
  plugins: [react()],
  base: './',
});
