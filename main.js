x=0;
y=0;
draw_circle="";
minecraft="minecraft.png";

var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML="SPEAK PEASANT";
    recognition.start();
}

recognition.onresult=function(event){

console.log(event);

var content=event.results[0][0].transcript;

to_number=Number(content);

screen_width=window.innerWidth;

document.getElementById("status").innerHTML="You have spoken " + content;
if (Number.isInteger==to_number)
{
document.getElementById("status").innerHTML=to_number + "grass blocks(s) are being drawn";
draw_circle="set";
}
}

function setup()
{
    canvas=createCanvas(900,600);
}

function draw()
{
    if(draw_circle=="set")
    {
        for(var i=1; i<= to_number; i++)
        {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        image(minecraft,x,y,50,50);
        document.getElementById("status").innerHTML="DA CIRCLE HAS BEAN DRAWN";
        draw_circle="";
        }
    }
}