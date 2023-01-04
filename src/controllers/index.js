function index (req, res) {
     res.render('index',{
          title:"Pagina de inicio"
     })
}

module.exports ={
     index,
}