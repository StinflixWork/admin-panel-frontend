import { ElementType } from 'react'
import { LucideProps } from 'lucide-react'

export type TypeSidebar = {
	label: string
	href: string
	Icon: ElementType<LucideProps>
}

export type TypeSideBarMenu = TypeSidebar & {
	id: string
}
