import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AppLoaderProvider } from '@/app/providers/AppLoaderProvider'
import { StoreProvider } from '@/app/providers/StoreProvider'
import App from './app/App.tsx'
import './app/styles/global.scss'

createRoot(document.getElementById('root')!).render(
	<StoreProvider>
		<BrowserRouter>
			<AppLoaderProvider>
				<App />
			</AppLoaderProvider>
		</BrowserRouter>
	</StoreProvider>
)
