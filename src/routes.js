const express = require('express'); //importar o express
const routes = express.Router(); // criar uma variavel para chamar a rota e usar a funcionalidade o express

const NoteController = require('./controllers/NoteController');//importar o controller de NoteController

// Rotas
//variavel.metodo(rota,controlador.metodo)
routes.get('/', NoteController.index);
routes.get('/:id', NoteController.show);
routes.post('/', NoteController.criacao);
routes.put('/:id', NoteController.update);
routes.delete('/:id', NoteController.delete)


module.exports = routes; // exportar a rota