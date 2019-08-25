var a='X';
var b='O';
var array=[];
var i=1;
array[0]=document.getElementById("a1");
array[1]=document.getElementById("a2");
array[2]=document.getElementById("a3");
array[3]=document.getElementById("a4");
array[4]=document.getElementById("a5");
array[5]=document.getElementById("a6");
array[6]=document.getElementById("a7");
array[7]=document.getElementById("a8");
array[8]=document.getElementById("a9");
function clickTik1(){
   
    if(i%2==1){
    document.getElementById("a1").textContent=a;
    }
    else{
        document.getElementById("a1").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[0].removeEventListener('click',clickTik1);
    }
}
array[0].addEventListener('click',clickTik1);
function clickTik2(){
   
    if(i%2==1){
    document.getElementById("a2").textContent=a;
    }
    else{
        document.getElementById("a2").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[1].removeEventListener('click',clickTik2);
    }
}
array[1].addEventListener('click',clickTik2);
function clickTik3(){
   
    if(i%2==1){
    document.getElementById("a3").textContent=a;
    }
    else{
        document.getElementById("a3").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[2].removeEventListener('click',clickTik3);
    }
}
array[2].addEventListener('click',clickTik3);

function clickTik4(){
   
    if(i%2==1){
    document.getElementById("a4").textContent=a;
    }
    else{
        document.getElementById("a4").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[3].removeEventListener('click',clickTik4);
    }
}
array[3].addEventListener('click',clickTik4);

function clickTik5(){
   
    if(i%2==1){
    document.getElementById("a5").textContent=a;
    }
    else{
        document.getElementById("a5").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[4].removeEventListener('click',clickTik5);
    }
}
array[4].addEventListener('click',clickTik5);

function clickTik6(){
   
    if(i%2==1){
    document.getElementById("a6").textContent=a;
    }
    else{
        document.getElementById("a6").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[5].removeEventListener('click',clickTik6);
    }
}
array[5].addEventListener('click',clickTik6);

function clickTik7(){
   
    if(i%2==1){
    document.getElementById("a7").textContent=a;
    }
    else{
        document.getElementById("a7").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[6].removeEventListener('click',clickTik7);
    }
}
array[6].addEventListener('click',clickTik7);

function clickTik8(){
   
    if(i%2==1){
    document.getElementById("a8").textContent=a;
    }
    else{
        document.getElementById("a8").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[7].removeEventListener('click',clickTik8);
    }
}
array[7].addEventListener('click',clickTik8);

function clickTik9(){
   
    if(i%2==1){
    document.getElementById("a9").textContent=a;
    }
    else{
        document.getElementById("a9").textContent=b;
    }
    i++;
    if(i>1)
    {
        array[8].removeEventListener('click',clickTik9);
    }
}
array[8].addEventListener('click',clickTik9);


var a1=document.getElementById("a1").value;
var a2=document.getElementById("a2").value;
var a3=document.getElementById("a3").value;
var a4=document.getElementById("a4").value;
var a5=document.getElementById("a5").value;
var a6=document.getElementById("a6").value;
var a7=document.getElementById("a7").value;
var a8=document.getElementById("a8").value;
var a9=document.getElementById("a9").value;

