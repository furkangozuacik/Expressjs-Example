const mysql=require('mysql2');

const connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  database:'node-app',
  password:'YES'
});

module.exports=connection.promise();

