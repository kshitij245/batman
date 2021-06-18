class Rain {
    constructor(x, y) {
      var options = {
          
          'friction':5,
          'density':1.0,
          'isStatic':false,
          'restitution':0.3,
      }
      this.rain = Bodies.circle(x, y,5,options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      
      fill("blue");
      circle(0, 0, this.radius);
      pop();
    }
  };