class Slingshot{
 constructor(bodyA,pointB){
   
    var options = {

        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        lenght: 10
    
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);


 }

  fly(){

 this.sling.bodyA = null;

  }

 }