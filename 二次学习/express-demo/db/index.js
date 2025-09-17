/**
 * @description：mongodb原生链接方式, 实验性质。 mongoose是封装好的，使用起来更方便
 */
import { MongoClient, ServerApiVersion } from 'mongodb'

const client = new MongoClient('mongodb://localhost:27017/Dxx')

export default async function connect(cb = () => {}) {
    try {
        // 链接
        await client.connect()
        
        const collection = client.db('Dxx').collection('test')
        const result = await collection.find().toArray()
        console.log(result)
        // await cb(client)
    } catch (err) {
        client.close()
    } finally {
        console.log('close')
        client.close()
    }
}

connect()