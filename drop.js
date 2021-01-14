class Drops{

    constructor(x,y,r){
        
        var options={
            friction = 0.1,
            isStatic = false
        }
         
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body)
    }
    display();
}