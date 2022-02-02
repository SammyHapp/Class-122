x = 0;
y = 0;
draw_circle= "";
draw_rectangle= "";

var speechRecognition= window.webkitSpeechRecognition;
var recognition= new speechRecognition;

function start(){
    document.getElementById("status").innerHTML= "System is listening, Please speak";
    recognition.start();
}

recognition.onresult= function (event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML= "The speech has been Recognized As: "+content;
    if(content == "Circle."){
        x= Math.floor(Math.random() *900);
        y= Math.floor(Math.random() *600);
        document.getElementById("status").innerHTML= "Started drawing circle! ";

        draw_circle= "set"
    }

    if(content == "Rectangle."){
        x= Math.floor(Math.random() *900);
        y= Math.floor(Math.random() *600);
        document.getElementById("status").innerHTML= "Started drawing rectangle! ";

        draw_rectangle= "set"
    }
}

function setup(){
    canvas= createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "set"){
        radius= Math.floor(Math.random()* 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML= "The circle is drawn! ";
        draw_circle= ""
    }

    if(draw_rectangle == "set"){
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML= "The rectangle is drawn! ";
        draw_rectangle= ""
    }
}