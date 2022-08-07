img2="";

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
}
function preload(){
    img3= loadImage("pool.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('black');
    text("Pool", 60, 120);
    noFill();
    stroke('black');
    rect(60, 60, 400, 300);
}