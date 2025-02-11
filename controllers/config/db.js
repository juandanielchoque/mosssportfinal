require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, // Asegúrate de que se esté usando
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

db.getConnection()
    .then(conn => {
        console.log('✅ Conexión exitosa a la base de datos');
        conn.release();
    })
    .catch(err => {
        console.error('❌ Error conectando a la BD:', err.message);
    });

module.exports = db;
