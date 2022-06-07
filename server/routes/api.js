const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
const institute = require('../models/institutions');

const db = "mongodb+srv://skv221:policecomplaintkodukranee@cms.f9kay8z.mongodb.net/CMS";
mongoose.Promise = global.Promise;
mongoose.connect(db, err=>{
    if(err){
        console.log(err);
    }
});

router.get('/institutions', (req,res)=>{
    institute.find()
    .exec((err,institutions)=>
    {
        res.json(institutions);
    });
});

router.get('/institutions/:id', (req,res)=>{
    institute.findById(req.params.id)
    .exec((err,institution)=>
    {
        res.json(institution);
    });
});

router.post('/institutions', (req,res)=>{
    var newInstitute = new institute();
    newInstitute.name = req.body.name;
    newInstitute.email = req.body.email;
    newInstitute.phone = req.body.phone;
    newInstitute.password = req.body.password;
    newInstitute.type = req.body.type;
    newInstitute.complaints = [];
    newInstitute.save((err,insertedInstitute)=>{
        res.json(insertedInstitute)
    });
});

router.put('/institutions/:id',(req,res)=>{
    institute.findByIdAndUpdate(req.params.id,
    {
        $set : {
                complaints : req.body.complaints,
                type : req.body.type,
                name : req.body.name,
                email : req.body.email,
                phone : req.body.phone,
                password : req.body.password
             }
    },
    {
        new: true
    },
    (err, updatedInstitute)=>{
        res.json(updatedInstitute);
    });
});

router.delete('/institutions/:id',(req,res)=>{
    institute.findByIdAndRemove(req.params.id,(err,deletedInstitute)=>{
        res.json(deletedInstitute);
    })
});

router.post('/s-analyzer', (req, res)=> {
    const { feedback } = req.body;
    var analysis = sentiment.analyze(feedback);
    res.json( analysis );
  });

module.exports = router;