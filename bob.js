class Bob{

    constructor(x,y,r){
        
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2

        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);
        pop();

    }
}