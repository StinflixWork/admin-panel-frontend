import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { HeroUIProvider } from '@heroui/system'
import App from './app/App.tsx'
import { StoreProvider } from './app/providers/StoreProvider'
import './app/styles/global.css'

createRoot(document.getElementById('root')!).render(
	<HeroUIProvider>
		<StoreProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StoreProvider>
	</HeroUIProvider>
)
