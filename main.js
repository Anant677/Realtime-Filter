moustache_x = 0;
moustache_y = 0;
function preload(){
    moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
canvas = createCanvas(400,400);
canvas.center();
Video = createCapture(VIDEO);
Video.size(400,400);
Video.hide();
poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function draw(){
image(Video,0,0,400,400);
image(moustache,moustache_x,moustache_y,80,30);
}
function take_snapshot(){
    save(my_filter_image.png);
}
function modelLoaded(){
    console.log("poseNet is Loaded");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    moustache_x=results[0].pose.nose.x-37;
    moustache_y=results[0].pose.nose.y+10;
    console.log(results[0].pose.nose.x);
    console.log(results[0].pose.nose.y);
    
}
}








