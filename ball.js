class ball
{
constructor(x,y,radius)
{
    var options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body);
}
display()
{
    fill("blue");


    var angle = this.body.angle;
    var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    pop();
    ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.radius);
    
}
}