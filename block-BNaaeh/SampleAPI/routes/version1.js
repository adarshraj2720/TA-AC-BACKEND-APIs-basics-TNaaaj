var express = require('express');
var router = express.Router();

var Book = require('../modals/book')

router.get('/',(req,res,next)=>{
    Book.find({},(err,books)=>{
        if(err) return res.status(500).json(err);
        res.json({books})
    })
})

router.get('/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findById(id,(err,book)=>{
        if(err) return res.status(500).json(err);
        res.json({book})
    })
})

router.post('/',(req,res,next)=>{
    Book.create(req.body,(err,books)=>{
        if(err) return res.status(500).json(err)
        res.json({books})
    })
})





router.put('/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findByIdAndUpdate(id,(err,update)=>{
        if(err) return res.status(500).json(err);
        res.json({update});
    })
})

router.get('/:id/delete',(req,res,next)=>{
    Book.findByIdAndDelete(id,(err,dele)=>{
        if(err) return res.status(500).json(err);
        res.json({dele});
    })
})




module.exports=router;