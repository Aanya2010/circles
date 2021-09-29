canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var mouse_event="empty";
var lastpositionofx;
var lastpositionofy;
color="black";
widthofline=1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    color = document.getElementById("color").value; width_of_line = document.getElementById("width_of_line").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    currentpositionofx=e.clientX - canvas.offsetLeft;
    currentpositionofy=e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.arc(currentpositionofx, currentpositionofy, 20 ,0 , 2 * Math.PI); 
    ctx.stroke();
}
lastpositionofx=currentpositionofx;
lastpositionofy=currentpositionofy;

}