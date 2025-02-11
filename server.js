require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');

// Configuración de CORS
app.use(cors({
  origin: 'https://tu-frontend-en-vercel.vercel.app', // Reemplaza con la URL de tu frontend en Vercel
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Configuración de la base de datos en el contexto de la aplicación
app.set('db', db);

// Importación de rutas existentes
const torneoRoutes = require('./routes/torneoRoutes');
const equipoRoutes = require('./routes/equipoRoutes');
const partidoRoutes = require('./routes/partidoRoutes');
const jugadorRoutes = require('./routes/jugadorRoutes');
const authRoutes = require('./routes/authRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const disciplinaRoutes = require('./routes/disciplinasRoutes');
const resultadoRoutes = require('./routes/resultadoRoutes');
const evidenciaRoutes = require('./routes/evidenciaRoutes');
const torneoDisciplinaRoutes = require('./routes/torneoDisciplinaRoutes');
const disciplinaCategoriaRoutes = require('./routes/disciplinaCategoriaRoutes');  
const uploadRoutes = require('./routes/uploadRoutes');
const competicionRoutes = require('./routes/competicionRoutes');
const puntajesRoutes = require('./routes/puntajeRoutes');
const estadisticaRoutes = require('./routes/estadisticaRoutes');

// Definición de rutas
app.use('/api/torneos', torneoRoutes);
app.use('/api/equipos', equipoRoutes);
app.use('/api/partidos', partidoRoutes);
app.use('/api/jugadores', jugadorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/disciplinas', disciplinaRoutes);
app.use('/api/resultados', resultadoRoutes);
app.use('/api/evidencias', evidenciaRoutes);
app.use('/api/competicion', competicionRoutes);
app.use('/api/puntajes', puntajesRoutes);
app.use('/api/estadisticas', estadisticaRoutes);
app.use('/api/torneo-disciplinas', torneoDisciplinaRoutes);
app.use('/api/disciplina-categorias', disciplinaCategoriaRoutes);
app.use('/api/upload', uploadRoutes);

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en https://mosssportfinal-production.up.railway.app`);
});

