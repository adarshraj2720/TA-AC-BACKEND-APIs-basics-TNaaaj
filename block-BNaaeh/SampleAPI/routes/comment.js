var express = require('express');
var router = express.Router();

router.get('/api/v2/comment',(req,res,next)=>{
    Comment.find({},(err,comments)=>{
        if(err) return res.status(500).json(err);
        res.json({comments})
    })
})

router.get('/api/v2/comment/:id',(req,res,next)=>{
    var id = req.params.id;
    Comment.findById(id,(err,comment)=>{
        if(err) return res.status(500).json(err);
        res.json({comment})
    })
})

router.post('/api/v2/comment',(req,res,next)=>{
    Comment.create(req.body,(err,comments)=>{
        if(err) return res.status(500).json(err)
        res.json({comments})
    })
})



router.put('/api/v2/commnet/:id',(req,res,next)=>{
    var id = req.params.id;
    Comment.findByIdAndUpdate(id,(err,update)=>{
        if(err) return res.status(500).json(err);
        res.json({update});
    })
})

router.delete('/api/v2/comment/:id',(req,res,next)=>{
    Comment.findByIdAndDelete(id,(err,delecom)=>{
        if(err) return res.status(500).json(err);
        res.json({delecom});
    })
})




module.exports=router;