const router = require('express').Router();
const CustomersController = require('../controllers/customers');
const indexController = require('../controllers/index');
// console.log(CustomersController)
// rotas 
router.get('/',indexController.index); 

router.get('/register',CustomersController.index )


router.post('/register/add', CustomersController.add)

router.get('/list', CustomersController.listUsers)




//404 error ('pagina nao encontrada')
router.use((req, res) => {
     res.send('Página nao encontrada');
})
module.exports = router;