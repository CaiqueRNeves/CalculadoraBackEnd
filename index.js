// run `node index.js` in the terminal
const express = require('express');
const calculadora = express();
const bodyparser = require('body-parser');
const path = require('path');

// Configurar o middleware apenas uma vez
calculadora.use(bodyparser.urlencoded({extended: true}));

// Rota para a página inicial
calculadora.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Rota para processamento da soma
calculadora.post('/', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const soma = n1 + n2;
  res.send(`
    <h2>Resultado da Soma</h2>
    <p>${n1} + ${n2} = ${soma}</p>
    <a href="/">Voltar para a calculadora</a>
  `);
});

// Rota para a página de subtração (redireciona para a página principal)
calculadora.get('/subtracao', (req, res) => {
  res.redirect('/');
});

// Rota para processamento da subtração
calculadora.post('/subtracao', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const subtracao = n1 - n2;
  res.send(`
    <h2>Resultado da Subtração</h2>
    <p>${n1} - ${n2} = ${subtracao}</p>
    <a href="/">Voltar para a calculadora</a>
  `);
});

// Rota para a página de multiplicação (redireciona para a página principal)
calculadora.get('/multiplicacao', (req, res) => {
  res.redirect('/');
});

// Rota para processamento da multiplicação
calculadora.post('/multiplicacao', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  const multiplicacao = n1 * n2;
  res.send(`
    <h2>Resultado da Multiplicação</h2>
    <p>${n1} × ${n2} = ${multiplicacao}</p>
    <a href="/">Voltar para a calculadora</a>
  `);
});

// Rota para a página de divisão (redireciona para a página principal)
calculadora.get('/divisao', (req, res) => {
  res.redirect('/');
});

// Rota para processamento da divisão
calculadora.post('/divisao', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  
  // Verificar divisão por zero
  if (n2 === 0) {
    return res.send(`
      <h2>Erro na Divisão</h2>
      <p>Não é possível dividir por zero!</p>
      <a href="/">Voltar para a calculadora</a>
    `);
  }
  
  const divisao = n1 / n2;
  res.send(`
    <h2>Resultado da Divisão</h2>
    <p>${n1} ÷ ${n2} = ${divisao}</p>
    <a href="/">Voltar para a calculadora</a>
  `);
});

// Iniciar o servidor
calculadora.listen(8080, (erro) => {
  if(erro) {
    console.log("Erro ao iniciar servidor:", erro);
  } else {
    console.log("Servidor iniciado com sucesso na porta 8080!");
  }
});