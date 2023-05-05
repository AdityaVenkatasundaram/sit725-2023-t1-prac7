const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://adityacalvin:Usainbolt958@cluster0.titln9f.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);


client.connect(err => {
        dbcollection = client.db().collection(collectionName);
        if (!err) {
            console.log('DB connected');
        }
        else {
            console.log(err);
        }
});

module.exports = client;