
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1;

function setup()
 {
  createCanvas(1000,500);

  engine = Engine.create();
    world = engine.world;

  stand1 = new stand(350,350,200,20);
  stand2 = new stand (700,200,200,20);

polygon = new ball(100,200,50);


attach = new slingshot(polygon.body,{x:100,y:200});
Engine.run(engine);
//yellow
  block1= new block(265,320,30,40);
  block2= new block(290,320,30,40);
  block3= new block(320,320,30,40);
  block4= new block(350,320);
  block5= new block(380,320);
  block6= new block(410,320);
  block7= new block(440,320);


  block8= new block(610,170);
  block9= new block(640,170);
  block10= new block(670,170);
  block11= new block(700,170);
  block12= new block(730,170);
  block13= new block(760,170);
  block14= new block(790,170);
//green
  block15= new green(290,280);
  block16= new green(320,280);
  block17= new green(350,280);
  block18= new green(380,280);
  block19= new green(410,280);

 block20= new green(640,130);
 block21= new green(670,130);
 block22= new green(700,130);
 block23= new green(730,130);
 block24= new green(760,130);
 //purple
  block25= new purple(320,240);
  block26= new purple(350,240);
  block27= new purple(380,240);

  block28= new purple(670,90);
 block29= new purple(700,90);
 block30= new purple(730,90);
 //orange
 block31= new orange(350,200);
 block32= new orange(700,50);
}

function draw() {
  background("pink"); 
text("Press space to get another chance",450,480);
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();


block8.display();
block9.display();
block9.display();
block9.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

block15.display();
block16.display();
block17.display();
block18.display();
block19.display();

block20.display();
block21.display();
block22.display();
block23.display();
block24.display();

block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();

block31.display();
block32.display();


polygon.display();
  drawSprites();
}
function mouseDragged()
{
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  attach.fly();
}
function keyPressed(){
  if( keyCode===32)
  {
  attach.join(polygon.body);
  }
}