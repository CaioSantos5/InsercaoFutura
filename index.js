const express = require('express');
const app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const PORT = 3000;

const Produto = require("./model/produto");


//Produto.sync({alter: true})


/*var produto = Produto.create({
    autor: "caio San",
    idade: 20,
    email: "@caio",
    end: "Rua Arcoverde",
    tit: "Motores",
    sin: "Motores em movimento"
  })
    .then(function () {
      console.log("Produto inserido com sucesso!");
    })
    .catch(function (erro) {
      console.log("Erro ao inserir produto: " + erro);
    });*/



//Produto.sync({alter: true})
//Produto.sync()


produtos = [];
app.post('/addProduto', urlencodedParser, (req, res) => {
    //var codigo1 = req.body.codigo;
    var nome1 = req.body.autor;
    var idade1 = req.body.idade;
    var email1 = req.body.email;
    var endereco1 = req.body.end;
    var titulo1 = req.body.tit;
    var sinopse1 = req.body.sin;


    var produto = Produto.create({
        //codigo: codigo1,
        autor: nome1,
        idade: idade1,
        email: email1,
        end: endereco1,
        tit: titulo1,
        sin: sinopse1,
    })
        .then(function () {
            res.send("Produto inserido com sucesso!" + produto); //console.log > res.send
        })
        .catch(function (erro) {
            res.send("Erro ao inserir produto: " + erro);
        });

    /*   var novoProduto = {codigo:codigo, nome:nome,
       idade:idade, endereco:endereco, email:email, sinopse:sinopse, titulo:titulo}
       produtos.push(novoProduto)
   
       var todosProdutos = [];
       for (var i = 0; i < novoProduto.length; i++) {
           todosProdutos += "Código: " + novoProduto[i].codigo;
           todosProdutos += "Nome: " + novoProduto[i].nome;
           todosProdutos += "idade: " + novoProduto[i].idade;
           todosProdutos += "endereco: " + novoProduto[i].endereco;
           todosProdutos += "email: " + novoProduto[i].email;
           todosProdutos += "sinopse: " + novoProduto[i].sinopse;
           todosProdutos += "titulo: " + novoProduto[i].titulo;
           todosProdutos += "<br>";
   
       } 
       res.send("<div> Seu título foi cadastrado com sucesso, confira os dados abaixo:" + "<br>" +
       "<br>" +
       "Código: " + novoProduto.codigo + "<br>"+
       "Nome: " + novoProduto.nome + "<br>" +
       "Idade: " + novoProduto.idade + "<br>"+
       "Endereço: " + novoProduto.endereco + "<br>"+
       "Email: " + novoProduto.email + "<br>"+
       "Titulo: " + novoProduto.titulo + "<br>"+
       "Sinopse: " + novoProduto.sinopse + "<br>"+    
       "</div>");*/
});

app.listen(PORT, () => {
    console.log("http://localhost:" + 3000);
});
