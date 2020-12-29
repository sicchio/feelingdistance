let node;
let junction;


function connectJunctionSuccess(connectedJunction) {
	junction = connectedJunction;
	print("Connected to Junction!");
}

function connectNodeSuccess(connectedNode) {
	node = connectedNode;
	node.connectJunctionSend("WebTest", "1111", connectJunctionSuccess);
}

function fail(errorMessage) {
	print(errorMessage);
}

function setup() {
  createCanvas(200, 800);
  OSCjunction.connect("node-1", connectNodeSuccess, fail);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    //fill(0);
  //  ellipse(mouseX, mouseY, 20, 20);
    if(junction !== undefined && junction.connected) {
      junction.send("/mouse", [0]);
			console.log("send");
    }
  }
}
