var express = require('express');
var router = express.Router();


var Country = require('../modals/country');
var State = require('../modals/state');


router.get('/',(req,res,next)=>{
    State.find({},(err,state)=>{
        let asc = state.map((p)=>p.name).sort()

        if(err) return res.status(500).json(err);
        res.json({asc});
    })
})



router.post('/:id/updatestate',(req,res,next)=>{
    var id= req.params.id;
    State.findOneAndUpdate(id,req.body,(err,state)=>{
        if(err) return res.status(500).json(err);
        res.json({state});
    })
})



router.delete('/:id/deletstate',(req,res,next)=>{
    var id = req.params.id;

    State.findById(id,(err,state)=>{
        if(err) return res.status(500).json(err)
        Country.findByIdAndUpdate(state.country,{$pull:{neighbouring_states:id}},
            (err,country)=>{
                if(err) return res.status(500).json(err)
                res.json({country});
            })
    })
})


module.exports=router;