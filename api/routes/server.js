var express = require('express');
var router = express.Router();
const connectDB = require('./Database/connection');
var app = express();
//var UserDetails = require('./API/User');
var BodyParser = require('body-parser');

connectDB();

router.get('/', function(req,res,next){
    res.sendfile('index.html');
});

router.use(express.json({extended:false}));
router.use(BodyParser.urlencoded({extended:false}));
router.use('/',require('./API/User'));

module.exports = router;