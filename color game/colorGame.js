var numsquares=6;
var colors= generaterandomcolors(numsquares);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedcolor= pickColor();
var message=document.getElementById("message");
var display=document.getElementById("display");
var newcolors=document.querySelector("button");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function(){
	
	this.classList.add("selected");
	hard.classList.remove("selected");
	numsquares=3;
	colors=generaterandomcolors(numsquares);
	pickedcolor=pickColor();
	display.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.background="none";
		}
	}
    
	
});
hard.addEventListener("click",function(){
	
	this.classList.add("selected");
	easy.classList.remove("selected");
	numsquares=6;
	colors=generaterandomcolors(numsquares);
	pickedcolor=pickColor();
	display.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];

	}
	
})
newcolors.addEventListener("click",function(){
	this.textContent="new colors";
	colors=generaterandomcolors(numsquares);
	pickedcolor=pickColor();
	message.textContent="";
	display.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];

	}
	h1.style.background="steelblue";

})

display.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		var compsq=this.style.backgroundColor;

		if(compsq === pickedcolor){
			newcolors.textContent="play again";
			h1.style.backgroundColor=pickedcolor;
			message.textContent="correct color";
			newcolors.textcontent="play again";

			changecolor(pickedcolor);
			
			
		}
		else{
			message.textContent="wrong";
			this.style.background="#232323";

		}
	})
	

}
function changecolor(color){
	for(var i=0;i<=squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generaterandomcolors(num){
	var arr=[];
 for(var i=0;i<num;i++){
  arr.push(randomcolor());
 }
 return arr;
}
function randomcolor(){
	var	r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")" ;
}
