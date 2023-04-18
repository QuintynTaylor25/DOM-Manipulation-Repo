var express = require('express');
var router = express.Router();
var contact = require('/views');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.use('/',contact);
module.exports = router;
