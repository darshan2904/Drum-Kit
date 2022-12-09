var n=document.querySelectorAll(".drum");
/*
n[0].addEventListener("click",function(){ 
    var audio = new Audio("sounds/drum4.mp3");
    audio.play();
});
n[1].addEventListener("click",function(){ 
    var audio = new Audio("sounds/drum5.mp3");
    audio.play();
});
n[2].addEventListener("click",function(){ 
    var audio = new Audio("sounds/drum6.mp3");
    audio.play();
});
n[3].addEventListener("click",function(){ 
    var audio = new Audio("sounds/drum0.mp3");
    audio.play();
});
n[4].addEventListener("click",function(){ 
    var audio = new Audio("sounds/drum3.mp3");
    audio.play();
});
n[5].addEventListener("click",function(){ 
    var audio = new Audio("sounds/drum1.mp3");
    audio.play();
});
n[6].addEventListener("click",function(){ 
    var audio = new Audio("sounds/drum2.mp3");
    audio.play();
});
*/
/*
for(var i=0;i<n.length;i++){
   n[i].addEventListener("click",function(){
        var a=this.innerHTML;
        var src="sounds/"+a+".mp3";
        var audio = new Audio(src);
        audio.play();
   });
   n[i].addEventListener("mousedown",function(){
    var b="."+this.innerHTML;
    var d=document.querySelector(b);
    d.style.color="white";    
    });
    n[i].addEventListener("mouseup",function(){
    var b="."+this.innerHTML;
    var d=document.querySelector(b);
    d.style.color="#DA0463";
    });    
}
*/
for(var i=0;i<n.length;i++){
    n[i].addEventListener("click",function(){
        var a=this.innerHTML;
        addAnimation(a);
        addSounds(a);
        
    });
}



 document.addEventListener("keydown",function(event){
    addAnimation(event.key);
    addSounds(event.key);
    
 })

 function addSounds(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/w.mp3");
            audio.play();
            d.style.color="white";
            break;

        case "a":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/d.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/j.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/k.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/l.mp3");
            audio.play();
            break;


        case "s":
            var audio = new Audio("sounds/s.mp3");
            audio.play();
            break;
      
        default:
            console.log("alerdy played!!");
            break;
    }
 }

function addAnimation(wordName){
    var n = document.querySelector("."+wordName);
    n.classList.add("pressed");

    setTimeout(function(){
        n.classList.remove("pressed");
    },100);

}