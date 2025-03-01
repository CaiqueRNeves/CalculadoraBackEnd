// run `node index.js` in the terminal
const express = require('express');
const calculadora = express();
const bodyparser = require('body-parser');

// Configurar o middleware apenas uma vez
calculadora.use(bodyparser.urlencoded({extended: true}));

// Rota para a página inicial (soma)
calculadora.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Rota para processamento da soma
calculadora.post('/', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const soma = n1 + n2;
  res.send("O resultado da operação é: " + soma);
});

// Rota para a página de subtração
calculadora.get('/subtracao', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Rota para processamento da subtração
calculadora.post('/subtracao', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const subtracao = n1 - n2;
  res.send("O resultado da operação é: " + subtracao);
});

// Iniciar o servidor
calculadora.listen(8080, (erro) => {
  if(erro) {
    console.log("Erro ao iniciar servidor:", erro);
  } else {
    console.log("Servidor iniciado com sucesso na porta 8080!");
  }
});