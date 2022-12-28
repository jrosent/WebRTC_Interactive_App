//create websocket for signaling
let ws = new WebSocket("ws://localhost:8001", ['json']);

//Turn server configuration for peer connection (open source)
const config = {
    iceServers: [
      {
        urls: "stun:relay.metered.ca:80",
      },
      {
        urls: "turn:relay.metered.ca:80",
        username: "your-turn-server-username",
        credential: "your-turn-server-password",
      },
      {
        urls: "turn:relay.metered.ca:443",
        username: "your-turn-server-username",
        credential: "your-turn-server-password",
      },
      {
        urls: "turn:relay.metered.ca:443?transport=tcp",
        username: "your-turn-server-username",
        credential: "your-turn-server-password",
      },
    ],
  };

//create webRTC connection
let pc = new RTCPeerConnection(config);

//Handle websocket open
ws.addEventListener('open', (event) => {
  console.log("Opened.");
  ws.send(JSON.stringify({msg : "Websocket connection opened."}));
  
});

//Websocket message event listener
//Move functionality to its own module
ws.addEventListener('message', async (event) =>{
    //Parse the message data from the signal server
    let msg = JSON.parse(event.data);
    
    //Handle any possible message from the signal server
    switch(msg){
        //Login
        //Users
        //Offer
        //Answer
        //New Ice Candidate
    }
});

