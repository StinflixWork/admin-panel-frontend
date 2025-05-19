export interface IClientResource {
	id: string
	name: string
	identifier: string
	picture: string | null
	active: boolean
	connection: IClientConnectionResource
}

interface IClientConnectionResource {
	id: string
	connection: string
	host: string
	port: number
	database: string
	username: string
	password: string
}
