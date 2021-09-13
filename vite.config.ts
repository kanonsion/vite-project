import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')
import {svgBuilder} from './src/plugins/svgBuilder.js'
// @ts-ignore
import VitePluginElementPlus from 'vite-plugin-element-plus'

const resolve = (dir: string) => path.join(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        plugins: [
            vue(),
            [svgBuilder('./src/assets/icon/svg/')],
            VitePluginElementPlus({
                // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
                // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
                // 的文档注释
                // useSource: true
                format: mode === 'development' ? 'esm' : 'cjs',
            }),
        ],
        resolve: {
            alias: {
                '@': resolve('src'),
                'store': resolve('src/store')
            }
        },
        server: {
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
    }
})
