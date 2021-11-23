var fixedRect, movingRect;

function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor="brown";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="brown";
}

function draw(){
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
//height
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    ){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="brown";
    fixedRect.shapeColor="brown";
  }
  drawSprites();
}