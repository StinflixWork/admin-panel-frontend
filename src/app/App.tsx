import { HeroUIProvider } from '@heroui/system'
import { RouterProvider } from './providers/RouterProvider'

function App() {
	return (
		<HeroUIProvider>
			<RouterProvider />
		</HeroUIProvider>
	)
}

export default App
