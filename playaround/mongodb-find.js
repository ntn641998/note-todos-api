//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    db.collection('Todos').find({
        _id: new ObjectID('5b6557e27d036304a81e785d')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log('Unable to fetch Todos');
    });

  
     client.close();
});