const cross = document.getElementById("small_cross");
const round = document.getElementById("small_round");
const str = document.querySelectorAll(".str");
const scoreZero =document.getElementById("count0");
const scoreX =document.getElementById("countX");
const alonePlayer =document.getElementById("1player");
const two2Players =document.getElementById("2players");

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


HTMLDivElement.prototype.classToggle = function(num1,num2){
    this.children[num1].classList.remove("hide")
    this.children[num2].classList.add("hide");
}




const player = Object.create(button);
player.name = "player";
const string = new String(player.name); // cоздаем строку через глобальный класс




//изменение атрибута инпутов радио
round.addEventListener("click",()=>{
   if((round.hasAttribute("checked")===false) && cross.hasAttribute("checked")){
    round.setAttribute("checked","checked");
    cross.removeAttribute("checked");
   }
})


cross.addEventListener("click",()=>{
    if((cross.hasAttribute("checked")===false) && round.hasAttribute("checked")){
        cross.setAttribute("checked","checked");
        round.removeAttribute("checked");
    }
 })

// Score - счетчик ходов

const countResultX = new Array([
    0,0,0,0,0,0,0,0,0
])

const countResult0 = new Array([
    0,0,0,0,0,0,0,0,0
])

// Составление кейсов

 let case1,case2,case3,case4,case5,case6,case7,case8;
        


// вывод  фигур

// Запуск игры 2 игрока





two2Players.onclick =()=>{
    twoPlayers();
    
}


// один игрок



function getRandomArr(min, max) {
     
    function getRandomNum(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }
   
    let arrayOfData = [];
    let newArr = [];

    for(let i = 0; i<=8;i++){
        
        arrayOfData.push(getRandomNum(1, 8))
       

    }

    newArr = arrayOfData.map(function (elem, pos, arr) {
        return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
    });

    for(let j =0; j<=8-1;j++){
        if(newArr[j] ===true){

            getRandomArr(newArr[j], 8)

        }
    }


 console.log(arrayOfData);
  console.log(newArr);
  debugger;
}   


// getRandomArr(1, 8)
// console.log("myarr",getRandomArr(1, 8))

// var test = [1, 4, 1, 5, 6, 4];
// var test1
// test = test.map(function (elem, pos, arr) {
//     return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
// });
// console.log("mytest",test);



//  let arrayOfData = getRandomArr(1, 8)


alonePlayer.onclick =()=>{
    
    

    


     
   

    
    str.forEach((element,index)=>{
        
        element.addEventListener("click",()=>{
            
            if(cross.hasAttribute("checked")){
                element.children[0].classList.remove("hide"); // 0
            //    str[robot.RandomNum1].children[1].classList.remove("hide");
            
                        // console.log(arrayOfData[index]);
                       // проверка масссива случайных чисел

                     

                            str[arrayOfData[index]].children[1].classList.remove("hide");
                           
                       
       

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
      
        })

    })

    
}


// функция 2 игроков

function twoPlayers(){

    str.forEach((element,index)=>{
        
        element.addEventListener("click",()=>{
            
            if(cross.hasAttribute("checked") && 
            element.children[0].classList.contains("hide") &&
             element.children[1].classList.contains("hide")
            ){
                cross.removeAttribute("checked")
                round.setAttribute("checked","checked")
                element.classToggle(0,1); // смотри прототипирование
                // element.children[0].classList.remove("hide"); // 0
                //  element.children[1].classList.add("hide");
                }
            if(round.hasAttribute("checked") && 
            element.children[1].classList.contains("hide")&& 
            element.children[0].classList.contains("hide")){
                
                round.removeAttribute("checked")
                cross.setAttribute("checked","checked")
                element.classToggle(1,0);  // смотри прототипирование
                // element.children[1].classList.remove("hide"); //1
                //  element.children[0].classList.add("hide");
                
                }    
        
      // Сценарии
    
      // Запись ходов
                if((element.children[0].classList.contains("hide")===false)
                && element.children[1].classList.contains("hide")){
    
                
          countResultX[index]=1;  // запись ходов X
          
                } else if ((element.children[1].classList.contains("hide")===false)
                && element.children[0].classList.contains("hide")){
            countResult0[index]=1;  // запись ходов 0
    
                }
               // Случаи для X
                  // горизонт
           caseX1 = countResultX[0]+countResultX[1]+ countResultX[2];
           caseX2 =countResultX[3]+countResultX[4]+ countResultX[5];
           caseX3 =countResultX[6]+countResultX[7]+ countResultX[8];
           // вертикаль
            caseX4 =countResultX[0]+countResultX[3]+ countResultX[6];
            caseX5 =countResultX[1]+countResultX[4]+ countResultX[7];
            caseX6 =countResultX[2]+countResultX[5]+ countResultX[8];
           // диагонали
            caseX7 =countResultX[0]+countResultX[4]+ countResultX[8];
           caseX8 =countResultX[2]+countResultX[4]+ countResultX[6];
    
          // Случаи для 0
              // горизонт
              case01 = countResult0[0]+countResult0[1]+ countResult0[2];
              case02 =countResult0[3]+countResult0[4]+ countResult0[5];
              case03 =countResult0[6]+countResult0[7]+ countResult0[8];
              // вертикаль
               case04 =countResult0[0]+countResult0[3]+ countResult0[6];
               case05 =countResult0[1]+countResult0[4]+ countResult0[7];
               case06 =countResult0[2]+countResult0[5]+ countResult0[8];
              // диагонали
               case07 =countResult0[0]+countResult0[4]+ countResult0[8];
              case08 =countResult0[2]+countResult0[4]+ countResult0[6];
    
           messageWin(caseX1,case01);
           messageWin(caseX2,case02);
           messageWin(caseX3,case03);
           messageWin(caseX4,case04);
           messageWin(caseX5,case05);
           messageWin(caseX6,case06);
           messageWin(caseX7,case07);
           messageWin(caseX8,case08);
          
            // Информация для модального окна
            function messageWin(num1,num2){
                
                     if(num1===3){
                         alert("Победа крестиков");
    
                         countResultX[index] = 0// очистка массива
                         countResult0[index] = 0
                         resetRound();
                         scoreX.textContent++
                         
                     } else if (num2===3){
                        alert("Победа ноликов");
    
                        countResult0[index] = 0// очистка массива
                        countResultX[index] = 0
                        resetRound();
                        scoreZero.textContent++
                        
                     }
                 }
    
        })
        
       
     })
    
    
    

}

 







//  сброс игры
button.source.onclick = ()=>{
    
    
    resetAll()
    
    
        
       
    }



    function resetAll(){ 
        resetRound()
        scoreZero.textContent=0
        scoreX.textContent=0
        
    
        }



function resetRound(){
    str.forEach((element,index)=>{
        button.resetGame(element.children[0]);
        button.resetGame(element.children[1]);
        countResultX[index] = 0// очистка массива
        countResult0[index] = 0 // очистка массива
        
  
    })
}





