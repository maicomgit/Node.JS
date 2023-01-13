const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password');

const defaultTitle = 'Cadastro de Clientes'


function index (req, res) 
     {res.render('register',{
          title: defaultTitle,
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
// PEga os dados do banco de dados
async function list (req, res) {
     const users = await CustomersModel.find()
     res.render('list',{
          title:'Clientes',
          users,

     } )
}

async  function formEdit (req, res) {
     const {id}  = req.query
     const user = await CustomersModel.findById(id)

     res.render('edit',{
          title:'Editar Usuario',
          user,
     })

}
async function edit(req,res){
const {
     name,
     age,
     email,
     celular,
     principal,
     } = req.body
     
     const {id} = req.params

     const user = await CustomersModel.findById(id)

     user.name = name
     user.age = age
     user.email = email
     user.celular = celular
     user.principal = principal

     user.save()
     res.render('edit', {
          title: 'Editar Usuario',
          user,
          message: 'Usuario Alterado com sucesso',
     })
}

// remover

async function remove(req, res) {
     const {id} = req.params

     const remove = await  CustomersModel.deleteOne({_id: id})
     if (remove.ok) {
          res.redirect('/list')
     }
}



module.exports = {
     add,
     index,
     list,
     formEdit,
     edit,
     remove,
}