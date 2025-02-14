const mysql = require('mysql2/promise'); // Usa mysql2 con soporte para promesas
require('dotenv').config();

console.log("🚀 Verificando variables de entorno:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_NAME:", process.env.DB_NAME);

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

// Función para probar la conexión y obtener datos
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado a MySQL en Railway');

    // Prueba de consulta (cambia 'usuarios' por una tabla válida de tu BD)
    const [rows] = await connection.query('SELECT * FROM usuarios LIMIT 5');
    console.log('📊 Datos obtenidos de la base de datos:', rows);

    connection.release(); // Libera la conexión
  } catch (err) {
    console.error('❌ Error conectando a la BD:', err.message);
    console.error('Detalles del error:', err);
  }
}

// Llamar a la función de prueba
testConnection();

module.exports = pool;
