const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password');


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
     } = req.body

     const  passwordCrypto = await crypto(password)

     const register = new CustomersModel({
          name,
          age,
          email,
          password:passwordCrypto,
     })

     register.save()
     res.send("Cadastrado")
}

module.exports = {
     add,
     index,
}