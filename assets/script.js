const cross = document.getElementById("small_cross");
const round = document.getElementById("small_round");
const str = document.querySelectorAll(".str");

const roundFig =document.querySelector(".round");

const crossFig =document.querySelector(".cross");
const inputRound = document.getElementById("small_round");

const inputCross =document.getElementById("small_cross");





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


 str.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(cross.hasAttribute("checked")){
            crossFig.classList.remove("hide");
            roundFig.classList.add("hide");
    
        }
        if(round.hasAttribute("checked")){
            roundFig.classList.remove("hide");
            crossFig.classList.add("hide");
        }
    })
    
 })


