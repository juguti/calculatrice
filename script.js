var ch=document.getElementById('cal')
var cha=document.getElementById('acal')
var ancien=""
document.getElementById("un").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='1'    
});
document.getElementById("deux").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='2'    
});
document.getElementById("trois").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='3'    
});
document.getElementById("quatre").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='4'    
});
document.getElementById("cinq").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='5'    
});
document.getElementById("six").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='6'    
});
document.getElementById("sept").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='7'    
});
document.getElementById("huit").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='8'    
});
document.getElementById("neuf").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='9'    
});
document.getElementById("zero").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='0'    
});
document.getElementById("x").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='*'    
});
document.getElementById("+").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='+'    
});
document.getElementById("-").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='-'    
});
document.getElementById("divi").addEventListener("click", function(){
    ancien=ch.innerHTML
    ch.innerHTML+='/'    
});
document.getElementById("éga").addEventListener("click", function(){
    cha.innerHTML=ch.innerHTML
    ch.innerHTML= eval(ch.innerHTML)    
});
document.getElementById("sup").addEventListener("click", function(){
    ch.innerHTML= ""    
});
document.getElementById("retour").addEventListener("click",function(){
    ch.innerHTML=ancien
});