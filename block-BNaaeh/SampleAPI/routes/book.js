var express = require('express');
var router = express.Router();

router.get('/v1/books/',(req,res,next)=>{
    Book.find({},(err,books)=>{
        if(err) return res.status(500).json(err);
        res.json({books})
    })
})

router.get('/v1/books/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findById(id,(err,book)=>{
        if(err) return res.status(500).json(err);
        res.json({book})
    })
})

router.post('/v1/books/',(req,res,next)=>{
    Book.create(req.body,(err,books)=>{
        if(err) return res.status(500).json(err)
        res.json({books})
    })
})



router.put('/books/v1/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findByIdAndUpdate(id,(err,update)=>{
        if(err) return res.status(500).json(err);
        res.json({update});
    })
})

router.delete('/books/v1/:id',(req,res,next)=>{
    Book.findByIdAndDelete(id,(err,dele)=>{
        if(err) return res.status(500).json(err);
        res.json({dele});
    })
})


//v2

router.get('/books/v2',(req,res,next)=>{
    Book.find({},(err,books)=>{
        if(err) return res.status(500).json(err);
        res.json({books})
    })
})

router.get('/books/v2/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findById(id,(err,book)=>{
        if(err) return res.status(500).json(err);
        res.json({book})
    })
})

router.post('/books/v2',(req,res,next)=>{
    Book.create(req.body,(err,books)=>{
        if(err) return res.status(500).json(err)
        res.json({books})
    })
})



router.put('/books/v2/:id',(req,res,next)=>{
    var id = req.params.id;
    Book.findByIdAndUpdate(id,(err,update)=>{
        if(err) return res.status(500).json(err);
        res.json({update});
    })
})

router.delete('/books/v2/:id',(req,res,next)=>{
    Book.findByIdAndDelete(id,(err,dele)=>{
        if(err) return res.status(500).json(err);
        res.json({dele});
    })
})



module.exports=router;