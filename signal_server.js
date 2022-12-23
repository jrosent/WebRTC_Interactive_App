import http from 'http';
import { WebSocketServer } from 'ws';

//Create http server to be converted to Web Socket Server
const httpServer = http.createServer().listen(8080, () => {
    console.log("HttpServer listening on port 8080");
})

//new websocket for signal server
const wsServer = new WebSocketServer({
    server : httpServer,
});


//Handle opening of new websocket server
wsServer.onopen = (event) => {
    console.log("[open] Connection established");

}

//Handle incoming messages
wsServer.onmessage = (event) => {
    //Receive message from peer, parse, and send to other peer
}

//Handle websocket server closing
wsServer.onclose = (event) => {
    console.log("[closed] Connection closed cleanly.");
}

//Handle server errors
wsServer.onerror = (error) => {
    console.log('[error]');
}
