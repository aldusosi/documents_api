require('dotenv').config();
const express = require('express');
const rotasDocumentos = require('./rotas/rotasDocumentos');

const servidor = express();

servidor.use(express.json());
servidor.use(rotasDocumentos);

servidor.listen(3000);