var bgImg
var cat,mouse;
var catImg,happycatImg,walkingcat1Img,walkingcat2Img;
var mouseImg,happymouseImg,mouseteasingImg;
function preload() {
    //load the images here
    bgImg = loadImage("Images/garden.png");
    catImg = loadImage("Images/cat1.png");
    mouseImg = loadImage("Images/mouse1.png");
    happycatImg = loadImage("Images/cat4.png");
    happymouseImg = loadImage("Images/mouse4.png");
    walkingcat1Img = loadImage("Images/cat2.png");
    mouseteasingImg = loadImage("Images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,700,);
    cat.addAnimation("catsleeping",catImg);
    cat.scale = 0.2;
    mouse = createSprite(100,700);
    mouse.addAnimation("mousestanding",mouseImg);
    mouse.scale =0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catlastImage",happycatImg);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("catlastImage");
        mouse.addAnimation("mouselastImage",happymouseImg);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouselastImage");

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === RIGHT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catwalking",walkingcat1Img);
        cat.changeAnimation("catwalking");
        mouse.addAnimation("mouseteasing",mouseteasingImg);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseteasing");
    }

}
