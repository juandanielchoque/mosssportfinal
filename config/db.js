const mysql = require('mysql2');
require('dotenv').config();

console.log("🚀 Verificando variables de entorno:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PORT:", process.env.DB_PORT);

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test',
  port: process.env.DB_PORT || 52215
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error conectando a la BD:', err);
    return;
  }
  console.log('✅ Conectado a MySQL en Railway');
});

module.exports = connection;
