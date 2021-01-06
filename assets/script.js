const cross = document.getElementById("small_cross");
const round = document.getElementById("small_round");
const str = document.querySelectorAll(".str");

const roundFig =document.querySelector(".round");

const crossFig =document.querySelector(".cross");
const inputRound = document.getElementById("small_round");

const inputCross =document.getElementById("small_cross");

// практика в пррототипировании

// reset
const button = new Object({
    name:"reset",
    source:document.querySelector(".reset_game"),
  
})

Object.prototype.removeDisable = function(){
    button.source.removeAttribute("disabled")
}


Object.prototype.resetGame = function(element){
    element.classList.add("hide");
}

button.removeDisable();


// создай кнопку в объекте html



//изменение атрибута инпутов радио
inputRound.addEventListener("click",()=>{
   if((inputRound.hasAttribute("checked")===false) && inputCross.hasAttribute("checked")){
    inputRound.setAttribute("checked","checked");
    inputCross.removeAttribute("checked");
   }
})


inputCross.addEventListener("click",()=>{
    if((inputCross.hasAttribute("checked")===false) && inputRound.hasAttribute("checked")){
        inputCross.setAttribute("checked","checked");
        inputRound.removeAttribute("checked");
    }
 })



console.log(str)

// построение фигур
 str.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(cross.hasAttribute("checked")){
            element.children[0].classList.remove("hide"); // 0
            // element.children[1].classList.add("hide"); //1
            if(element.children[1]){
            element.removeChild(element.children[1])
        }
            
    
        }
        if(round.hasAttribute("checked")){
            element.children[1].classList.remove("hide"); //1
            // element.children[0].classList.add("hide"); //0
            if(element.children[0]){
            element.removeChild(element.children[0]);
            }
        }
    })
    
 })


//  сброс игры


// button.source.onclick = ()=>{


//     str.forEach((element)=>{
//        element.children[0].classList.add("hide");
      
//     })
   
// }

