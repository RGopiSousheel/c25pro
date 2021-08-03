class Paper
{
	constructor()
    {
		var options={
            
            restitution:0.3,
            friction:0,
            density:1.2,
        }
this.body = Bodies.circle(250,540, 25, options)
this.image = loadImage("paper.png");
World.add(world,this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        transulate(pos.x , pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        image(this.image,0,0,70,70);
        pop()
        
      }
        
        }