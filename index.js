//alert("Welcome to Site"); For checking tha js is conected or not to the web page


//document.querySelector("button").addEventListener("click",handleClick);
/*document.querySelector(".w").addEventListener("click",handleClick);
document.querySelector(".a").addEventListener("click",handleClick);
document.querySelector(".s").addEventListener("click",handleClick);
document.querySelector(".d").addEventListener("click",handleClick);
document.querySelector(".j").addEventListener("click",handleClick);
document.querySelector(".k").addEventListener("click",handleClick);
document.querySelector(".l").addEventListener("click",handleClick);*/


/*function handleClick()
{
	alert("I am Clicked");
}*/

// now we can do this work by Annomus Function also i-e:

/*document.querySelector("button").addEventListener("click",function(){
	alert("Hi I am clicked");
});*/

/*var n=document.querySelectorAll("button").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
	alert("Hi I am clicked");
})
}*/


var numberOfDrumsButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumsButtons;i++)
{
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
	/*alert("Hi I am clicked");*/

   /*var innerHTML= document.querySelectorAll(".drum")[i].innerHTML;
   console.log(innerHTML);
*/     
     /*console.log(this.innerHTML);*/
     /*console.log(this.style.color='white');*/


    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    //console.log(buttonInnerHtml);
   
     switch(buttonInnerHtml) {
       case 'w':
             var tom1= new Audio("sounds/tom-1.mp3");
    		     tom1.play();
         break;
       case 'a':
              var tom2= new Audio("sounds/tom-2.mp3");
    		     tom2.play();
         break;

         case 's':
              var tom3= new Audio("sounds/tom-3.mp3");
    		     tom3.play();
         break;

         case 'd':
              var tom4= new Audio("sounds/tom-4.mp3");
    		     tom4.play();
         break;

         case 'j':
              var snare= new Audio("sounds/snare.mp3");
    		     snare.play();
         break;
         case 'k':
              var kickBass= new Audio("sounds/kick-bass.mp3");
    		     kickBass.play();
         break;
         case 'l':
              var crash= new Audio("sounds/crash.mp3");
    		     crash.play();
         break;
       default:
         console.log(buttonInnerHtml);
     }
    	
});
}

 document.addEventListener("keypress",function(event)
 {
 	//alert("key was pressed");
 	//var keyPressed=console.log(event);
     makeSound(event.key);
     buttonAnimation(event.key);


 });

 function makeSound(key)
 {
 	switch(key) {
       case 'w':
             var tom1= new Audio("sounds/tom-1.mp3");
    		     tom1.play();
    		     
         break;
       case 'a':
              var tom2= new Audio("sounds/tom-2.mp3");
    		     tom2.play();
         break;

         case 's':
              var tom3= new Audio("sounds/tom-3.mp3");
    		     tom3.play();
         break;

         case 'd':
              var tom4= new Audio("sounds/tom-4.mp3");
    		     tom4.play();
         break;

         case 'j':
              var snare= new Audio("sounds/snare.mp3");
    		     snare.play();
         break;
         case 'k':
              var kickBass= new Audio("sounds/kick-bass.mp3");
    		     kickBass.play();
         break;
         case 'l':
              var crash= new Audio("sounds/crash.mp3");
    		     crash.play();
         break;
       default:
               console.log(key);
     }


 }
 
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}






