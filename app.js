//formdan gelen bilgileri consoleda döndürmece


const express=require('express');
const app=express();
const adminRoutes=require('./routes/admin');
const userRoutes=require('./routes/user');
const bodyParser=require('body-parser');
const path=require('path');

app.use(bodyParser.urlencoded({extended:false}));

const connection=require('./utility/database');
connection.execute('SELECT * FROM products')
  .then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });

app.use(express.static(path.join(__dirname,'publlic')));

app.use(adminRoutes);
app.use(userRoutes);



app.use((req,res)=>{
 //hata sayfası yapması
 res.status(404);
 res.send('<h1>Sayfa Bulunamadı</h1>');
});

app.listen(3000,()=>{
console.log("listening on port 3000");
});

