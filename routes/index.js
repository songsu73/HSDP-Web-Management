var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */

Lobis_web_list = fs.readFileSync('routes/Lobis_web.list','utf-8')

Lobis_web_list = Lobis_web_list.split("\t")

router.get('/', function(req, res, next) {
  res.render('index', { Lobis_web_list: Lobis_web_list });
});
router.get('/ServerRoom',function(req,res){
  res.render('ServerRoom');
})
router.get('/101', function(req,res) {
  res.render('101' );
});
router.get('/102', function(req,res) {
  res.render('102' );
});
router.get('/103', function(req,res) {
  res.render('103' );
});
router.get('/104', function(req,res) {
  res.render('104' );
});
module.exports = router;
