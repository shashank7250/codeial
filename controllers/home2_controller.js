
const Todo = require("../models/schema");

module.exports.list= function(req,res){
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date

    }, function(err,newlist){
        if(err){
            console.log('error in rendering');
            return;
        }
        console.log('*******',newlist);
        return res.redirect('/');
    }

    )}