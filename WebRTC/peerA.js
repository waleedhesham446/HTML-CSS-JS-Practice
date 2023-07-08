const lc = new RTCPeerConnection();
const dc = lc.createDataChannel("channel");

dc.onmessage = e => console.log("Just got a message: " + e.data);
dc.onopen = e => console.log("Connection opened!");
dc.onclose = e => console.log("Connection closed!");

lc.onicecandidate = e => console.log("New Ice Candidate! SDP: " + JSON.stringify(lc.localDescription));

lc.createOffer().then(o => lc.setLocalDescription(o)).then(a => console.log("Set Successfully!"));

const answer = "Answer Object from peerB";

lc.setRemoteDescription(answer);

dc.send("Yo peerB what up");