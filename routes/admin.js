const express=require('express');

const router=express.Router();

const path=require('path');

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    ;
    
   });


router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
   });

   module.exports=router;

   /* 
router.get('/add-product',(req,res,next)=>{
    res.send(
       `
       <html>
           <head>
   
           </head>
           <body>
               <form action='/add-product' method="POST">
               <input type="text" name="productName"></input>
               <button type="submit">save</button>
               </form>
           </body>
       </html>
       `
     )
    
   });
*/