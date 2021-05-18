var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload()
{
   music=loadSound("music.mp3"); 
}


function setup()
{
    canvas = createCanvas(800,600);

    block1 = createSprite(96,580,190,30);
    block1.shapeColor = "blue";

    block2 = createSprite(296,580,190,30);
    block2.shapeColor = "orange";

    block3 = createSprite(496,580,190,30);
    block3.shapeColor = "red";

    block4 = createSprite(696,580,190,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=8;
    ball.velocityY=8;
    
}

function draw() 
{
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
 
    if(ball.isTouching(block1))
    {
        ball.bounceOff(block1); 
        ball.shapeColor = "blue";
        music.play();
    }

    if(ball.isTouching(block2))
    {
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    }

    if(ball.isTouching(block3))
    {
        ball.bounceOff(block3); 
        ball.shapeColor = "red";
        music.play();
    }

    if(ball.isTouching(block4))
    {
        ball.bounceOff(block4); 
        ball.shapeColor = "green";
        music.play();
    }

    drawSprites();
}
