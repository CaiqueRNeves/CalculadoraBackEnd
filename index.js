// run `node index.js` in the terminal
const express = require('express');
const calculadora = express();
const bodyparser = require('body-parser');

calculadora.use(bodyparser.urlencoded({extended:true}))
calculadora.get('/', (req,res) =>{
  res.sendFile(__dirname + "/index.html")
})

calculadora.post('/' , (req,res)=>{
  const n1 = Number(req.body.num1)
  const n2 = Number(req.body.num2)

  const soma = n1 + n2
  res.send("O resultado da operação é: "+ soma )
})


calculadora.listen(8080 , (erro) => {
  if(erro){
    console.log("Servidor foi pro ralo!")
  }else{
    console.log("Servidor tá ok!")
  }
})
