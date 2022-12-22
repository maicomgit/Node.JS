const router = require('express').Router();
const CustomersController = require('../controllers/customers');
// console.log(CustomersController)
// rotas 
router.get('/', (req, res) => {
     res.render('index',{
          title:"Pagina de inicio"
     })
})
router.get('/register', (req, res) => {
     res.render('register',{
          title:"Teste"
     })
})




router.post('/register/add', CustomersController.add)






//404 error ('pagina nao encontrada')
router.use((req, res) => {
     res.send('Página nao encontrada');
})
module.exports = router;