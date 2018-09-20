const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


 // Todo.deleteMany({}).then((result) => {
 //   console.log(result);
 // });


// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()
var id = "5ba3bcfb34d6de7164f8fe48"

Todo.findOneAndDelete(id).then((todo) => {
    console.log(todo);
});
