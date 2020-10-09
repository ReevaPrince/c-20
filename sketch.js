var mrect,frect

function setup() {
  createCanvas(800,400);
  mrect = createSprite(200, 200, 30, 60);
  mrect.shapeColor  = "yellow"
  frect = createSprite(400, 200,60, 30);
  frect.shapeColor  = "yellow"

 mrect.debug = true
frect.debug = true
}

function draw() {
  background(10,10,10);  

  mrect.x = World.mouseX;
  mrect.y = World.mouseY;

if(mrect.x-frect.x < frect.width/2+mrect.width/2 && frect.x - mrect.x < frect.width/2+mrect.width/2 
  && mrect.y-frect.y < frect.height/2+mrect.height/2 && frect.y - mrect.y < frect.height/2+mrect.height/2 ){
  frect.shapeColor  = "blue"
  mrect.shapeColor  = "blue"
}
else{
  frect.shapeColor  = "yellow"
  mrect.shapeColor  = "yellow"
}
  drawSprites();
}