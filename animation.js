var i=0;
var txt=`Welcome to Sri Lanka`;
var speed=13;

function typeWriter(){
    if(i<txt.length){
        document.getElementById('index').innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);    
    }
}
typeWriter();


var p = function(){
    var e = document.createElement("div");
    e.setAttribute('class','pulse'),document.body.appendChild(e),e.style.top=event.pageY+'px',e.style.left=event.pageX+'px';
};
document.addEventListener('click', p);


