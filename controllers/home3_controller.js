const Todo = require("../models/schema");



module.exports.delete=function(req, res){
    console.log(req.query);
    let id = req.query.id

    Todo.findOneAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the object');
            return;
        }
        return res.redirect('/');
    })


   
}