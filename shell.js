img1="";

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
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