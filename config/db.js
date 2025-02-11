const mysql = require('mysql2/promise'); // Usa mysql2 con soporte para promesas
require('dotenv').config();

console.log("🚀 Verificando variables de entorno:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PORT:", process.env.DB_PORT);

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test',
  port: process.env.DB_PORT || 52215,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log('✅ Conectado a MySQL en Railway');
    connection.release(); // Libera la conexión
  })
  .catch(err => {
    console.error('❌ Error conectando a la BD:', err);
  });

module.exports = pool;
