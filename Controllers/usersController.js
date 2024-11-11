import {connection} from '../db.js';

export const registerUsers = async (req, res)=>{
    const { nombre, ap_paterno, ap_materno, correo, password } = req.body;
    const sql = 'INSERT INTO users (nombre, ap_paterno, ap_materno, correo, password) VALUES (?, ?, ?, ?, ?)';
    connection.query(sql, [nombre, ap_paterno, ap_materno, correo, password], (err, result) => {
      if (err){
        console.log(err);
        res.status(500).json({message:'error al insertar un usuario'});
      }
      res.status(201).json({ message: 'Usuario creado correctamente' });
    });
};

export const loginUsers = async (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ message: 'El correo y la contraseña son requeridos' });
    }

    try {
        // Buscar el usuario por el correo
        const [user] = await connection.execute('SELECT * FROM users WHERE correo = ?', [correo]);

        if (user.length === 0 || user[0].password !== password) {
            return res.status(401).json({ message: 'Credenciales invalidas' });
        }

        // Si las credenciales son correctas, retornamos los datos del usuario
        return res.status(200).json({
            message: 'Inicio de sesion exitosamente',
            userId: user[0].id,
            name: user[0].nombre,
        });
    } catch (err) {
        console.error('Error durante el inicio de sesión:', err);
        return res.status(500).json({ message: 'Error durante el inicio de sesión' });
    }
}
    

