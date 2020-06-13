const express = require('express');

const mongoose = require('mongoose');

const User = require('../Database/User');

const BodyParser = require('body-parser');

const route = express.Router();

route.use(express.json({extended:false}));
route.use(BodyParser.urlencoded({extended:false}));

route.post('/myaction',async(req,res)=>{

    var userModel = new User({
    FirstName : req.body.f_name,
    LastName : req.body.l_name,
    EmailID : req.body.email,
    PhoneNo : req.body.phone,
    Image : req.body.img
    });

    //res.json(userModel);
    console.log("Here");
    console.log(userModel);
    await userModel.save();
    res.sendfile('./public/index.html');
});

module.exports = route;