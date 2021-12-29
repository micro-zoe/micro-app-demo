import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => /^micro-app/.test(tag)
        }
      }
    }),
  ],
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        '/mygit/micro-zoe/micro-app/'
      ]
    }
  },
  resolve: {
    alias: {
      // "@micro-zoe/micro-app": path.join(__dirname, '../../../micro-app/lib/index.esm.js'),
    },
  },
  base: '/main-vite/',
  build: {
    outDir: 'main-vite',
  },
})
