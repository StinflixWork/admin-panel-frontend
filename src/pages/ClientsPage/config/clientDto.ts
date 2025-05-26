import { IClientResource } from '@/entities/Client/api/clientTypes.ts'
import { ClientFormFieldsType } from '@/pages/ClientsPage/config/clientFormSchema.ts'

export const clientDto = (data: IClientResource): ClientFormFieldsType => ({
	client_name: data.name,
	client_identifier: data.identifier,
	username: '',
	password: '',
	connection: data.connection.connection,
	database: data.connection.database,
	host: data.connection.host,
	port: data.connection.port
})
