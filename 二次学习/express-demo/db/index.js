import { MongoClient, ServerApiVersion } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017/Dxx'
)

export default async function connect(cb = () => {}) {
    try {
        await client.connect()
        await cb(client)
    } catch (err) {
        client.close()
    } finally {
        client.close()
    }
}