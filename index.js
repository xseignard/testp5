const W = 640;
const H = 480;

preload = () => {
	console.log(loadSound);
};

setup = () => {
	createCanvas(W, H, SVG);
};

draw = () => {
	ellipse(50, 50, 80, 80);
};

windowResized = () => {
	console.log('resize');
};

keyPressed = () => {
	console.log('keypressed');
};
