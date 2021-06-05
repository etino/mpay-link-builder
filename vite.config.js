import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mpay-link-builder/',
  plugins: [
    vue(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [
        path.resolve(process.cwd(), './node_modules/bootstrap-italia/dist/svg'),
      ],
      // Specify symbolId format
      symbolId: '[name]',
    }),
  ],
})
