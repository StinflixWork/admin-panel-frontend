import { ToastProvider } from '@heroui/react'
import { RouterProvider } from './providers/RouterProvider'

function App() {
	return (
		<>
			<ToastProvider placement='top-right' toastOffset={10} />
			<RouterProvider />
		</>
	)
}

export default App
