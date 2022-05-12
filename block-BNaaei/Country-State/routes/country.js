var express = require('express');
var router = express.Router();


var Country = require('../modals/country');
var State = require('../modals/state');

router.post('/',(req,res,next)=>{
    Country.create(req.body,(err,country)=>{
        if(err) return res.status(500).json(err);
        res.json({country});
    })
})

router.get('/',(req,res,next)=>{
    Country.find({},(err,country)=>{
        if(err) return res.status(500).json(err);
        res.json({country});
    })
})

router.put('/:id',(req,res,next)=>{
    var id = req.params.id
    Country.findByIdAndUpdate(id,req.body,(err,updcountry)=>{
        if(err) return res.status(500).json(err);
        res.json({updcountry});
    })
})


router.delete('/:id',(req,res,next)=>{
    var id = req.params.id
    Country.findByIdAndDelete(id,(err,delcountry)=>{
        if(err) return res.status(500).json(err);
        res.json({delcountry});
    })
})































router.post('/:id',(req,res,next)=>{
    var id = req.params.id;
    State.create(id,req.body,(err,state)=>{
        if(err) return res.status(500).json(err);
        Country.findByIdAndUpdate(id,{$push:{states:state.id}},(err,country)=>{
            res.json({state});
        })
    })
})





module.exports= router;