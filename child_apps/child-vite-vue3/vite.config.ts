import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    (function () {
      let basePath = ''
      return {
        name: "vite:micro-app",
        apply: 'build',
        configResolved(config) {
          basePath = `${config.base}${config.build.assetsDir}/`
        },
        renderChunk(code, chunk) {
          if (chunk.fileName.endsWith('.js') && /(from|import)(\s*['"])(\.\.?\/)/g.test(code)) {
            code = code.replace(/(from|import)(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
              return all.replace($3, new URL($3, basePath))
            })
          }
          return code
        }
      }
    })() as any,
  ],
  server: {
    port: 4007,
  },
  base: `${process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:8080' : ''}/child-vite/`,
  build: {
    outDir: 'child-vite',
  },
})
