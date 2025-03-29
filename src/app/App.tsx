import { Button } from '@heroui/button'
import { HeroUIProvider } from '@heroui/system'

function App() {
	return (
		<HeroUIProvider>
			<div className='w-full h-screen grid place-items-center bg-gray-light text-5xl'>
				<div className='flex flex-col gap-y-2'>
					<h1>Hello world</h1>
					<Button color='primary'>Click me</Button>
				</div>
			</div>
		</HeroUIProvider>
	)
}

export default App
