const offer = "Offer Object From peerA";

const rc = new RTCPeerConnection();

rc.onicecandidate = e => console.log("New Ice Candidate! SDP: " + JSON.stringify(rc.localDescription));

rc.ondatachannel = e => {
    rc.dc = e.channel;
    rc.dc.onmessage = e => console.log("Just got a message: " + e.data);
    rc.dc.onopen = e => console.log("Connection opened!");
    rc.dc.onclose = e => console.log("Connection closed!");
}

rc.setRemoteDescription(offer).then(a => console.log("Offer Set!"));

rc.createAnswer().then(a => rc.setLocalDescription(a)).then(a => console.log("Answer Created!"));

rc.dc.send("Fine, what about you peerA");