const express = require('express');
const criarDocumento = require('../controladores/criarDocumento');
const deletarDocumento = require('../controladores/deletarDocumento');
const listarUsuarios = require('../controladores/listarUsuarios');
const retornarDomcumento = require('../controladores/retornarDocumento');

const rotasDocumentos = express();

rotasDocumentos.post('/documents', criarDocumento);
rotasDocumentos.get('/documents', listarUsuarios);
rotasDocumentos.get('/documents/:documentId', retornarDomcumento);
rotasDocumentos.delete('/documents/:documentId', deletarDocumento);

module.exports = rotasDocumentos;