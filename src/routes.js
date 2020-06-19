const express = require('express'); //importar o express
const routes = express.Router(); // criar uma variavel para chamar a rota e usar a funcionalidade o express

const NoteController = require('./controllers/NoteController');//importar o controller de NoteController

// Rotas
//variavel.metodo(rota,controlador.metodo)
routes.get('/note', NoteController.index);
routes.get('/note/:id', NoteController.show);
routes.post('/note', NoteController.criacao);
routes.put('/note/:id', NoteController.update);
routes.delete('/note/:id', NoteController.delete)


module.exports = routes; // exportar a rota