export interface IClientResource {
	id: string
	name: string
	picture: string | null
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
