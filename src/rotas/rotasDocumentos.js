const express = require('express');
const criarDocumento = require('../controladores/criarDocumento');

const rotasDocumentos = express();

rotasDocumentos.post('/documents', criarDocumento);

module.exports = rotasDocumentos;