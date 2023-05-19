var express = require("express")
var app = express()
require('./dbConnection');
let router = require('./route/route');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

io.on('connection', (socket)=>{
    console.log('connected a client');
    socket.on('disconnect', ()=>{
        console.log('a client has disconnected');
    });

    setInterval(()=>{
        socket.emit('number' + parseInt(Math.random() * 10));
    }, 1000);
});

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




var port = process.env.port || 3000;
http.listen(port,()=>{
    console.log("App listening to: "+port)
    
});