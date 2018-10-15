var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '404411224', name: '丁俊嘉' });
});

module.exports = router;