var img;
var r=0;
function preload() {
  img = loadImage('assets/world.jpg');
}
function setup() {
  createCanvas(2000, 2000);

}

function draw() {
background(90,100,200,100);
push();

translate(width/2, height/2);
rotate(radians(r));
r=r+1;

//head
fill(90,80,100);
ellipse(365,286,30,30);

//rightarm
line(379,306,414,283);

//leftarm
line(354,307,318,290);

//legright
line(353,333,339,362);

//legleft
line(380,332,387,362);

//body
fill(0,0,255);
rect(350,300,30,30);
pop();
imageMode(CENTER);
image(img, width/2, height/2);

}
function mousePressed(){
  console.log(mouseX, mouseY);
}
