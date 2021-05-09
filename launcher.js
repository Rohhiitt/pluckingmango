class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject);
    }

    fly(){
        this.launcherObject.bodyA = null;
    }

    display(){

            
            var pointA = this.launcherObject.bodyA.position;
            var pointB = this.pointB;
        
            push();
            
            stroke(48,22,8);

            line(pointA.x,pointA.y,pointB.x,pointB.y);
           
            
            pop();

        
    }
    
}