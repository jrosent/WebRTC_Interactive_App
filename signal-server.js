//Environment variables
import "dotenv/config.js"

const PORT = process.env.PORT;

//Node modules
import http from 'http';
import { WebSocketServer } from 'ws';


//Create http server to be converted to Web Socket Server
const httpServer = http.createServer().listen(PORT, () => {
    console.log(`HttpServer listening on port ${PORT}.`);
})

//new websocket for signal server
const wsServer = new WebSocketServer({
    server : httpServer
});

//Log websocket server listening initiation
wsServer.on('listening', (event) =>{
    console.log(`Websocket Server listening at port ${PORT}.`);
});

wsServer.on('connection', (connection) => {
    
    //Handle connection open
    connection.on('open', (event) => {
        //Open handling
        console.log("New websocket connected to server.");
    })
    //Handle messages to the websocket server
    connection.on('message', (message) => {
        let mess = JSON.parse(message);
        //Message handling
            console.log(`Received message: ${mess.msg}`)
    });

    //Handle connection close
    connection.on('close', (event) => {
        //CLose handling
    })
});