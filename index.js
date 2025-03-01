const express = require('express');
const calculadora = express();
const bodyparser = require('body-parser');

calculadora.use(bodyparser.urlencoded({extended: true}));


calculadora.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


calculadora.post('/', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const soma = n1 + n2;
  res.send("O resultado da operação é: " + soma);
});


calculadora.get('/subtracao', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


calculadora.post('/subtracao', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const subtracao = n1 - n2;
  res.send("O resultado da operação é: " + subtracao);
});

calculadora.get('/Multiplicacao', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

calculadora.post('/Multiplicacao', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const multiplicacao = n1 * n2;
  res.send("O resultado da operação é: " + multiplicacao);
});

calculadora.get('/Divisao', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

calculadora.post('/Divisao', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const divisao = n1 * n2;
  res.send("O resultado da operação é: " + divisao);
});


calculadora.listen(8080, (erro) => {
  if(erro) {
    console.log("Erro ao iniciar servidor:", erro);
  } else {
    console.log("Servidor iniciado com sucesso na porta 8080!");
  }
});