// api.config.ts

export const photoApi = 'https://jsonplaceholder.typicode.com/photos'

export const API_URL = `${process.env.SERVER_URL}/api`

export const getTransactionsUrl = (string: string) =>
	`${API_URL}/transactions${string}`
