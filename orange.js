class orange extends BaseClass
{
    constructor(x, y,width,height)
    {
      super(x,y,30,40);
      
    }
  display()
  { 
    fill("orange");
    
    if(this.body.speed<3){
      var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    super.display();
    }
    else{
    World.remove(world,this.body);
    push();
   this.Visibility = this.Visibility-5;
   tint(255,this.Visibility);
   pop();
    }
  }
  };