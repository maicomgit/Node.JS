const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password');

const defaultTitle = 'cadastro de clientes'
function index (req, res) 
     {res.render('register',{
          title:"Teste"
     })
}
async function add(req, res){
     const {
          name,
          age,
          email,
          password,
          celular,
          principal,
     } = req.body
     const  passwordCrypto = await crypto(password)
     const register = new CustomersModel({
          name,
          age,
          email,
          celular,
          principal,
          password:passwordCrypto,
     })

     register.save()
     res.render('register',{
          title: defaultTitle,
          message: 'Cadastro Realizado com Sucessso'
     })
}

async function listUsers (req, res) {
     const users = await CustomersModel.find()
     res.render('listUsers',{
          title:'Clientes',
          users,

     } )
}

module.exports = {
     add,
     index,
     listUsers,
}