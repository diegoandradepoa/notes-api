const mongoose = require('mongoose'); //Importando o Mongoose
const mongoosePaginate = require('mongoose-paginate');

const NoteSchema = new mongoose.Schema({ //Criar a variavel  chamando o mongoose e criando os campos do banco de dados.
    title: {
    type: String,
    required: true,
    },
    description: {
     type: String,                      
    required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now, 
    },
});

NoteSchema.plugin(mongoosePaginate);//plugin do mongoose

mongoose.model('Note', NoteSchema);//Código para registrar um model na aplicação