import { createConnection } from 'mysql2/promise'

export const connection = await createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'tareas_api',
})
