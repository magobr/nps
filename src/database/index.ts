import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> =>{
    const defaultOpions = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOpions, {
            database: process.env.NODE_ENV === "test"
            ? "./src/database/database.test.sqlite" 
            : defaultOpions.database
        })
    )
}