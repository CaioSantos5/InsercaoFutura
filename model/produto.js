//conexão com o Banco

const Sequelize = require('sequelize')
const sequelize = new Sequelize('Futura2', 'root', 'rover', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(function () {
    console.log("Conectado!!")
}).catch(function (erro) {
    console.log("Erro ao conectar: " + erro)
});

//model

const Produto = sequelize.define('produto', {
    id_cliente: {
        type: Sequelize.INTEGER,
    },
    autor: {
      type: Sequelize.STRING,
    },
    idade: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
    },
    end: {
        type: Sequelize.STRING,
    },
    tit: {
        type: Sequelize.STRING,
    },    
    sin: {
        type: Sequelize.STRING,
        
    },
  })
  module.exports = Produto

