class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }
    join(body)
    {
        this.polygon.bodyA = body;
    }

    display(){
    
        
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                
        }
    }
    
}