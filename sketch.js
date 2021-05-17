const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,d ;

function preload() {
    getBackgroundImg();
    text(getBackgroundImg)
}

function setup(){
canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){

        background(backgroundImg);}
        
        

    Engine.update(engine);


}

async function getBackgroundImg(){
 var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
var responseJSON = await response.json();
var datetime1 = responseJSON.datetime;
 d = datetime1.slice(11,13);
if(d>04 && d<06){
    backgroundImg = loadImage("sunrise1.png");
}
else if(d>06 && d<08){
backgroundImg = loadImage("sunrise2.png")}

else if(d>08 && d<10){
    backgroundImg = loadImage("sunrise3.png")
}
else if(d>10 && d<12){
    backgroundImg = loadImage("sunrise4.png")}
    
    else if(d>12 && d<14){
        backgroundImg = loadImage("sunrise5.png")
    }
    else if(d>14 && d<16){
        backgroundImg = loadImage("sunrise6.png")}
        
        else if(d>16 && d<18){
            backgroundImg = loadImage("sunrise7.png")
        }
        else if(d>18 && d<20){
            backgroundImg = loadImage("sunrise8.png")}
            
            else if(d>20 && d<22){
                backgroundImg = loadImage("sunrise9.png")
            }
            else if(d>22 && d<24){
                backgroundImg = loadImage("sunrise10.png")
            }
            else if(d>24 && d<02){
                backgroundImg = loadImage("sunrise11.png")}
                
                else {
                    backgroundImg = loadImage("sunrise12.png")
                }}
        
