
var bob






function setup() {
  createCanvas(1000,1000);
  bob = createSprite(500,500)
}

function draw() 
{
  if(keyDown(UP_ARROW)){

    bob.y = bob.y - 1

  }
  background(30);
  drawSprites()

}




