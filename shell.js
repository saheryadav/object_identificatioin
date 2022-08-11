img1="";
status="";

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting Objects";
}
function preload(){
    img= loadImage("shell.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('black');
    text("Shell", 60, 120);
    noFill();
    stroke('black');
    rect(60, 60, 400, 300);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status="true";
    objectDetector.detect(img, gotResult);
}