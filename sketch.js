var shipANI,ship
var seaIMG, sea
function preload(){
shipANI = loadAnimation("ship-1.png" , "ship-2.png" , "ship-3.png" , "ship-4.png")
seaIMG = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
sea = createSprite(400,200)
sea.addImage(seaIMG)
sea.scale = 0.4
sea.velocityX = -2
ship = createSprite(100,270)
ship.addAnimation("ship",shipANI)
ship.scale = 0.3


}


function draw() {
  if (sea.x < 100 ){
    sea.x = 400
    }
  drawSprites()
}