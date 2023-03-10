var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('WholeServer');
});
router.get('/ServerRoom',function(req,res){
  res.render('ServerRoom');
});
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
router.get('/WholeServer', function(req,res){
  res.render('WholeServer')
});
module.exports = router;
