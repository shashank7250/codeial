
const Todo = require("../models/schema");
module.exports.home= function(req,res){
    Todo.find({}, function(err, todo){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home',{
            title: "todo List",
            todo_list: todo
        });
})
    }