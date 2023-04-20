var express = require("express")
var app = express()
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://adityacalvin:Usainbolt958@cluster0.titln9f.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
let dbcollection;
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
    {
        title: "Kitten 2",
        image: "kitten2.jpg",
        link: "About Kitten 2",
        description: "This kitten is cute!!"
    },
    {
        title: "Kitten 3",
        image: "kitten3.jpg",
        link: "About Kitten 3",
        description: "I'm actually a dog person"
    }
];

app.get('/api/projects',(req,res) => {
   res.json({statusCode: 200, data: cardList, message:"Success"})
})

function dbConnection(collectionName) {
    client.connect(err => {
        dbcollection = client.db().collection(collectionName);
        if (!err) {
            console.log('DB connected');
        }
        else {
            console.log(err);
        }
    });
}
var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to: "+port)
    dbConnection('Cats');
});