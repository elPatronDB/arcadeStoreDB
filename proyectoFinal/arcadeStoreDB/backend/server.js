const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/arcadeStoreDB')
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });


// Rutas
app.get('/api/test', (req, res) => {
    res.json({ 
      message: '🚀 API ArcadeStore funcionando correctamente!',
      timestamp: new Date().toISOString()
    });
  });

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Corriendo en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
