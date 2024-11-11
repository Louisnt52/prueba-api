import {connection} from '../db.js';

//listar tarea
export const getTasks = async (req, res) => {
    const usuario_id = 1;  // Simulamos un usuario autenticado
    const sql = 'SELECT * FROM tasks WHERE user_id = ?';
    connection.query(sql, [usuario_id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(result);
    });
}

//obtener tareas por su id
export const getTaskById = async (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM tasks WHERE id = ?'
    const result = await connection.query(query, [id])
    res.json(result.rows[0])
}

//crear tarea
export const createTask = async (req, res) => {
    const { usuario_id, nombre, descripcion, fecha } = req.body;
    const sql = 'INSERT INTO tasks (user_id, nombre, description, fecha) VALUES (?, ?, ?, ?)';
    try {
        connection.query(sql, [usuario_id, nombre, descripcion, fecha], (error, result) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({ message: 'Tarea creada', taskId: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//actualizar tarea
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { usuario_id, nombre, descripcion, fecha } = req.body;
    const query = 'UPDATE tasks SET user_id = ?, nombre = ?, description = ?, fecha = ? WHERE id = ?';
    
    connection.query(query, [usuario_id, nombre, descripcion, fecha, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada o no existe cambios' });
        }

        res.json({ message: 'Tarea actualizada con exito' });
    });
}

//eliminar tarea
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tasks WHERE id = ?';
    
    connection.query(query, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.json({ message: 'Tarea eliminada con éxito' });
    });
}