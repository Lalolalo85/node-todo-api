// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost: 27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //   _id:new ObjectID('5b9a8d5f9a1206efe03d4162')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

      db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b9986cd70b56d41e05b5efc')
      }, {
        $set: {
          name: 'Luis'
        },
         $inc: {
              age: 1
            }
      }, {
        returnOriginal: false
      }).then((result) => {
        console.log(result);
      });
    //client.close();
});
