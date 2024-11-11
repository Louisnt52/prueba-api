## Las tecnologias utilizadas 
- Node.js
- Express
- Nodemon
- MySQL

## Instalación

Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/tu-repositorio.git
    ```
Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
Instala las dependencias:
    ```bash
    npm install
    ```
Configura tu base de datos MySQL. Asegúrate de tener una base de datos configurada y con las tablas necesarias.

En la carpeta db.js encontraras la configuracion de la base de datos:
    ```
    host: 'localhost',
    port: puerto,
    user: tu_usuario,
    password: tu_contraseña,
    database: nombre_de_la_base_de_datos,
    ```
## Uso

Inicia el servidor:
    ```bash
    npm run dev
    ```