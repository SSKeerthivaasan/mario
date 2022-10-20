function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet=ml5.poseNet(video, modelloaded);
	poseNet.on('pose',gotPoses);
}

function modelloaded(){
	console.log('modelloded');
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX=results[0].pose.nose.X;
		noseY=results[0].pose.nose.Y;
	}
}
function draw() {
	game()
}






