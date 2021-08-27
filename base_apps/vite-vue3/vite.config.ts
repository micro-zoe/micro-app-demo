import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    (function () {
      let baseUrl = ''
      return {
        name: "vite:micro-app",
        apply: 'build',
        configResolved(config) {
          baseUrl = `${config.base}${config.build.assetsDir}/`
        },
        renderChunk(code, chunk) {
          if (chunk.fileName.endsWith('.js') && /(from|import)(\s*['"])(\.\.?\/)/g.test(code)) {
            code = code.replace(/(from|import)(\s*['"])(\.\.?\/)/g, (all, $1, $2, $3) => {
              return all.replace($3, new URL($3, baseUrl))
            })
          }
          return code
        }
      }
    })() as any,
  ],
  server: {
    port: 3000,
  },
})
