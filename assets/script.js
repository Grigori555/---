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


const player = Object.create(button);
player.name = "player";
const string = new String(player.name); // cоздаем строку через глобальный класс




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

// Score - счетчик ходов

const countResult = new Array([
    0,0,0,0,0,0,0,0,0
])

// Составление кейсов

 let case1,case2,case3,case4,case5,case6,case7,case8;
        


// вывод  фигур
 str.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        if(cross.hasAttribute("checked")){
            element.children[0].classList.remove("hide"); // 0
           
        
            
            if(element.children[1]){
            element.children[1].classList.add("hide");
        }
            
    
        }
        if(round.hasAttribute("checked")){
            element.children[1].classList.remove("hide"); //1
            
            if(element.children[0]){
                element.children[0].classList.add("hide");
            }
        }
     
        countResult[index]=1;  // запись ходов
        // горизонт
       case1 = countResult[0]+countResult[1]+ countResult[2];
        case2 =countResult[3]+countResult[4]+ countResult[5];
        case3 =countResult[6]+countResult[7]+ countResult[8];
        // вертикаль
         case4 =countResult[0]+countResult[3]+ countResult[6];
         case5 =countResult[1]+countResult[4]+ countResult[7];
         case6 =countResult[2]+countResult[5]+ countResult[8];
        // диагонали
         case7 =countResult[0]+countResult[4]+ countResult[8];
        case8 =countResult[2]+countResult[4]+ countResult[6];
       
        messageWin(case1);
        messageWin(case2);
        messageWin(case3);
        messageWin(case4);
        messageWin(case5);
        messageWin(case6);
        messageWin(case7);
        messageWin(case8);
        // Информация для модального окна
        function messageWin(num){
                 if(num===3){
                     alert("Победа");

                     countResult[index] = 0// очистка массива
                     
                 }
             }

    })
    
   
 })









 // Условия победы
//  if(case1 ===3){
//      console.log("Hello")
//  }
//  if((countResult[0]+countResult[1]+countResult[3]) ===3 || 
//     (countResult[4]+countResult[5]+countResult[6]) ===3 ||
//     (countResult[7]+countResult[8]+countResult[9]) ===3||
//     (countResult[1]+countResult[4]+countResult[7]) ===3||
//     (countResult[2]+countResult[5]+countResult[8]) ===3||
//     (countResult[3]+countResult[6]+countResult[9]) ===3||
//     (countResult[1]+countResult[5]+countResult[9]) ===3 ||
//     (countResult[3]+countResult[5]+countResult[7]) ===3){
//         console.log("Победа")
//     }


//  сброс игры
button.source.onclick = ()=>{

    str.forEach((element)=>{
            button.resetGame(element.children[0]);
            button.resetGame(element.children[1]);
      
        })
        // сброс input
        // inputRound.setAttribute("checked","checked");
        // inputCross.removeAttribute("checked");
       
    }



