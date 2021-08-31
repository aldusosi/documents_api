const express = require('express');
const criarDocumento = require('../controladores/criarDocumento');
const listarUsuarios = require('../controladores/listarUsuarios');

const rotasDocumentos = express();

rotasDocumentos.post('/documents', criarDocumento);
rotasDocumentos.get('/documents', listarUsuarios);

module.exports = rotasDocumentos;