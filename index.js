import express from 'express';
import {connection} from './db.js';
import usersRoutes from './Routes/usersRouters.js';
import taskRoutes from './Routes/taskRoutes.js';

const app = express();

app.get('/ping', async (req, res) => {
    const result = await connection.query('SELECT 1+1 AS result')
    res.json(result)
})

app.use(express.json());

app.use(usersRoutes);
app.use(taskRoutes);

app.listen(3000)
console.log("El servidor responde correctamente")