// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Backend conectado a Docker!'));

app.listen(port, () => console.log(`Backend corriendo en el puerto ${port}`));
