import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { StoreProvider } from '@/app/providers/StoreProvider'
import App from './app/App.tsx'
import './app/styles/global.scss'

createRoot(document.getElementById('root')!).render(
	<StoreProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StoreProvider>
)
