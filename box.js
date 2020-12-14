class Box  {
  constructor(x, y, width, height) {
    var options = {
//        'restitution':0.8,
  //      'friction':0.3,
    //  'density':1.0,

    }
    this.Visiblity = 255;

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){ 
      if(this.body.speed < 5){
   
   
var pos =this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(9)
fill("blue");
rect(0, 0, this.width, this.height);
pop();
   }
   else{
     push();
     World.remove(world, this.body);

     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
   }
  }
  
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
};
