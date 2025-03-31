import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		plugins: [react()],
		define: {
			__API__: JSON.stringify(env.VITE_API_URL)
		},
		resolve: {
			alias: {
				'@': path.resolve(process.cwd(), 'src'),
				'@icons': path.resolve(process.cwd(), 'src/shared/assets/icons'),
				'@images': path.resolve(process.cwd(), 'src/shared/assets/images')
			}
		}
	}
})
