img3="";
status="";
object=[];
results=[];

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status= Detecting Objects";
}
function preload(){
    img3= loadImage("tree.jpg");
}
function draw(){
    image(img3, 0, 0, 640, 420);
    fill('black');
    text("Tree", 60, 120);
    noFill();
    stroke('black');
    rect(60, 60, 400, 300);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status="true";
    objectDetector.detect(img3, gotResult);
}
function draw(){
    if(status !="")
    {
        for(i=0; i < object.length; i++)
        {
            percent= floor(object[i].confidence * 100);
            text(object[i].label+"" +percent+"%", object[i].x, object[i].y);
            rect(object[i].x, object[i].y, object[i].height, object[i].width);
        }
    }
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object= results;
}