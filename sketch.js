var name;
var gameState = 0;
function preload(){
 i1 = loadImage("images/images/1.jpg");
 i2 = loadImage("images/images/2.jpg");
 i3 = loadImage("images/images/3.jpg");
 i4 = loadImage("images/images/4.jpg");
 i5 = loadImage("images/images/5.jpg");
 i6 = loadImage("images/images/6.jpg");
 i7 = loadImage("images/images/7.jpg");
 i8 = loadImage("images/images/8.jpg");
 i9 = loadImage("images/images/9.jpg");
 i10 = loadImage("images/images/10.jpg");
 i11 = loadImage("images/images/11.jpg");
 i12 = loadImage("images/images/Add a heading.png");



}

function setup(){
createCanvas(windowWidth,windowHeight)
name = prompt("Enter your name");
}

function draw(){
    if(gameState === 0){
    background(i12)
    fill(0)
    textSize(35)
    text("Hi "+ name,width/2,50);
    gameState = 1
    }
    if(gameState===1){
    if(keyDown("space")||touches.length>0){
    switch(Math.round(random(1,11))){
        case 1: background(i1)
        touches=[]
        break;
        case 2: background(i2)
        touches=[]
        break;
        case 3: background(i3)
        touches=[]
        break;
        case 4: background(i4)
        touches=[]
        break;
        case 5: background(i5)
        touches=[]
        break;
        case 6: background(i6)
        touches=[]
        break;
        case 7: background(i7)
        touches=[]
        break;
        case 8: background(i8)
        touches=[]
        break;
        case 8: background(i9)
        touches=[]
        break;
        case 10: background(i10)
        touches=[]
        break;
        case 11: background(i11)
        touches=[]
        break;
    }
}
}
}