const mongoose = require('mongoose');    //Os controllers Lidam com as operações com os models, de GET, PUT, DEL

const Note = mongoose.model('Note');

module.exports = { //exportar a função
    async index(req, res) { ///Retorna todos os registros
        const { page = 1 } = req.query;
        const note = await Note.paginate({}, { page, limit: 10 });

        return res.json(note);
    },

    async show(req, res) { // Retorna um registro
        const note = await Note.findById(req.params.id); // No parêntese coloca a chamada do parâmetro ex: ID

        return res.json(note);
    },

    async criacao (req, res) { // Cria o produto
    const note = await Note.create(req.body); //Passar os dados do corpo da requisição criada anteriormente no model.
    
        return res.json(note);  
    },

    async update (req, res) { // Update do produto 
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, 
            { new: true 
        });
        
        return res.json(note);
    },

    async delete (req, res) { // Delete do produto 
     await Note.findByIdAndRemove(req.params.id)

     return res.send();
    }
};