import { Client, Account } from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('660e74d578dd8d4d9466') // Replace with your project ID

export const account = new Account(client)
export { ID } from 'appwrite'
