var Bullet , Wall , Thickness;
var Speed , Weight , BulletSpeed , BulletWeight; 

function setup() {
createCanvas(400,1600);

Speed = random(55,90)
Weight = random(400,1500)
Thickness = random(22,83)
BulletSpeed = random(223,321)
BulletWeight = random(30,52)
Bullet = createSprite(50,200,20,20);
Bullet.velocityX = Speed;
Wall = createSprite(1200,203,Thickness,height/2);
Wall.shapeColor=color(80,80,80);
}

function draw() {
background(255,255,255);  
if (Wall.x-Bullet.x < (Bullet.width+Wall.width)/2)
{
Bullet.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180)
{
Bullet.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100) 
{
Bullet.shapeColor=color(230,230,0);
}
if(deformation<100)
{
Bullet.shapeColor=color(0,255,0);
}
}
drawSprites();
}
function hasCollided(lbullet,lwall)
{
BulletRightEdge = lbullet.x + lbullet.width;
WallLeftEdge = lwall.x;
if (BulletRightEdge>=WallLeftEdge)
{
return true  
}
return false
}