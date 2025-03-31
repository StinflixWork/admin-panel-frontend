import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode, command }) => {
	const env = loadEnv(mode, process.cwd(), '')
	const isDev = command === 'serve'

	return {
		plugins: [react()],
		define: {
			__API__: JSON.stringify(isDev ? '/api' : env.VITE_API_URL)
		},
		resolve: {
			alias: {
				'@': path.resolve(process.cwd(), 'src'),
				'@icons': path.resolve(process.cwd(), 'src/shared/assets/icons'),
				'@images': path.resolve(process.cwd(), 'src/shared/assets/images')
			}
		},
		server: {
			proxy: {
				'/api': {
					target: env.VITE_API_URL,
					changeOrigin: true,
					secure: true,
					rewrite: path => path.replace(/^\/api/, '')
				}
			}
		}
	}
})
