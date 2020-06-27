const express = require('express'); //importar o express utilizano o require
const cors = require('cors'); // Importando o módulo que permite acesso de outros domínios
const mongoose = require('mongoose'); // Importando o banco
const requireDir = require('require-dir');// Importando o require dir

// Iniciando o App
const app = express(); //criar uma variavel para executar a função do express()
app.use(cors({ origin: 'https://notes-react-dac.herokuapp.com' })); // É possível passar os domínios que você quiser dentro dos parênteses ((www.teste.com.br))
app.use(express.json()); //Permitir envio de dados em formato de JSON.

// Iniciando o DB
 //URL de conexao com o MongoDB(se tiver usuario e senha informar)
mongoose.connect(
    process.env.MONGO_URL, 
    { 
        useNewUrlParser: true
    }
); 

requireDir('./src/models') //Registro do model na aplicação

//Rotas
app.use('/', require('./src/routes'));

app.listen(process.env.PORT || 3000);// ouvir a porta 