class Umbrella{

    constructor(x,y,r){
     
        var options={
            friction :0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.x = x;
        this.y = y;
        this.r = r;
        
    }
    
    display()

    image = addImage(boyWalkingImage);
}