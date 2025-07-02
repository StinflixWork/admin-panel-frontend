import { HeroUIProvider } from '@heroui/system'
import { ToastProvider } from '@heroui/toast'
import { RouterProvider } from './providers/RouterProvider'

function App() {
	return (
		<HeroUIProvider>
			<ToastProvider placement='top-right' toastOffset={10} />
			<RouterProvider />
		</HeroUIProvider>
	)
}

export default App
