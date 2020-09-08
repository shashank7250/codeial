const express= require('express');


const app= express();
const db=require('./config/mongoose');
const port=8000;
app.use(express.urlencoded());
// connecting to assets
app.use(express.static('assets'));
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
if(err){
console.log(`error in running server: ${err}`);
}
console.log(`server running on port: ${port}`);
});