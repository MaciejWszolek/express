var express = require('express');
const { route } = require('.');
const News = require('../models/news')
var router = express.Router();
router.all('*', (req, res, next)=>{
  if(!req.session.admin){
    res.redirect('login')
return
  }
  next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('admin/index', { title: 'admin' });
});
// Tworzenie formularza dodawania modulu
router.get('/news/add',(req,res)=>{
res.render('admin/news-form', {title: "Dodaj news", body:{},errors:{}})
})

router.post('/news/add',(req,res)=>{
const body = req.body
  const newsData = new News(body)
const errors = newsData.validateSync()
console.log(errors)

    newsData.save((err)=>{
      if(err){
        res.render('admin/news-form', {title: "Dodaj news", errors, body:{}})
        return
      }
      res.redirect('/admin')

    })

 
  })

module.exports = router;
