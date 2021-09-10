import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')
import {svgBuilder} from './src/plugins/svgBuilder.js'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      [svgBuilder('./src/assets/icon/svg/')]
  ],
  resolve: {
    alias:{
      '@': resolve('src')
    }
  },
  server:{
    port: 3000,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: false,
    //自定义代理规则
    proxy: {
      // 选项写法
      '/api': {
        target: '//jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
