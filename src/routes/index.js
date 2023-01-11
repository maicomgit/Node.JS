const router = require('express').Router();
const CustomersController = require('../controllers/customers');
const indexController = require('../controllers/index');
// console.log(CustomersController)



// rotas 
router.get('/',indexController.index); 
//Rotas para criar um novo registro 
router.get('/register',CustomersController.index )
router.post('/register/add', CustomersController.add)
////////////////-------------------------------------
//Rotas Para Listar os Clientes 
router.get('/list', CustomersController.list)



// Rotas para Fazer a edição do item

router.get('/edit',CustomersController.formEdit)
router.post('/edit/:id',CustomersController.edit)
// -------------------------------



//404 error ('pagina nao encontrada')
router.use((req, res) => {
     res.send('Página nao encontrada');
})
module.exports = router;