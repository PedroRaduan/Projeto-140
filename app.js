function setup(){
    canvas = createCanvas(700, 500);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(700, 500);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    console.log('oi');
}


function draw(){
    image(video, 0, 0, 700, 500);
    console.log('oi');
}


function modelLoaded(){
    console.log('Carreguei');
}


function gotPoses(results){
    console.log(results);
}