class Paperball{
constructor(){
var options={
'restitution':0.3,
'isStatic':false,
'friction':0.5,
'density':1.2
}
this.body=Bodies.rectangle(200,650,50,50,options);
World.add(world,this.body);
this.image=loadImage("paper.png");
}
display(){
var pos=this.body.position;
var angle=this.body.angle;
push ();
translate (pos.x,pos.y);
rotate (angle);
imageMode (CENTER);
image (this.image,0,0,65,65);
pop();
}
}