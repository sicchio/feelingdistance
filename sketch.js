let node;
let junction;
let img;

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


// function preload() {
//   img = loadImage('images/words_buttons.jpg');
// }

function setup() {
  createCanvas(200, 800);
	 background(0);
  OSCjunction.connect("node-1", connectNodeSuccess, fail);

	// image(img, 0, 0);
}

function draw() {

  if (mouseIsPressed) {
    //fill(0);
  //  ellipse(mouseX, mouseY, 20, 20);
    if(junction !== undefined && junction.connected) {
      junction.send("/mouse", [mouseX/width]);
			console.log("send");
    }
  }
}
