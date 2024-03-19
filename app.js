var c=0
const buttons = document.querySelectorAll('.box');
const container=document.querySelector(".conatiner")
var count=1
var b1=undefined
var b2=undefined
var b3=undefined
var arr=[[undefined,undefined,undefined],[undefined,undefined,undefined],[undefined,undefined,undefined]]
const redo=document.querySelector(".redo")
var winner =""

container.addEventListener("click",(obj)=>{
    obj.preventDefault();
    var wins=0;

    if (count%2!=0){
        var index=String(obj.target.classList[0])
        arr[index.slice(0,1)][index.slice(1)]=1
        obj.target.innerHTML=` <img class="image-cross" src="cross-svgrepo-com.png" alt="">`
    }
    
    else{
        var index=String(obj.target.classList[0])
        arr[index.slice(0,1)][index.slice(1)]=0
        obj.target.innerHTML=`
        <img src=" circle-svgrepo-com.png" class="image-circle"  alt="">`
    }


        if  (parseInt(arr[0][0])+parseInt(arr[0][1])+parseInt(arr[0][2])==3){
                console.log("cross wins")
                winner="player-1 wins"
                wins=1
                b1=document.querySelector(".box00")
                b1.style.backgroundColor="rgb(249, 212, 89)"
                b2=document.querySelector(".box01")
                b2.style.backgroundColor="rgb(249, 212, 89)"
                b3=document.querySelector(".box02")
                b3.style.backgroundColor="rgb(249, 212, 89)"
                
            }
          
            
        
        
    
            if(parseInt(arr[1][0])+parseInt(arr[1][1])+parseInt(arr[1][2])==3){
                console.log("cross wins")
            winner="player-1 wins"
            wins=1  
            b1=document.querySelector(".box10")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box11")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box12")
            b3.style.backgroundColor="rgb(249, 212, 89)"
        }
    
        
        if(parseInt(arr[2][0])+parseInt(arr[2][1])+parseInt(arr[2][2])==3){
            console.log("cross wins")
        winner="player-1 wins"
        wins=1  
        b1=document.querySelector(".box20")
        b1.style.backgroundColor="rgb(249, 212, 89)"
        b2=document.querySelector(".box21")
        b2.style.backgroundColor="rgb(249, 212, 89)"
        b3=document.querySelector(".box22")
        b3.style.backgroundColor="rgb(249, 212, 89)"
    }
        
    if(parseInt(arr[0][0])+parseInt(arr[1][0])+parseInt(arr[2][0])==3){
        console.log("cross wins")
    winner="player-1 wins"
    wins=1  
    b1=document.querySelector(".box00")
    b1.style.backgroundColor="rgb(249, 212, 89)"
    b2=document.querySelector(".box10")
    b2.style.backgroundColor="rgb(249, 212, 89)"
    b3=document.querySelector(".box20")
    b3.style.backgroundColor="rgb(249, 212, 89)"
}


if(parseInt(arr[0][1])+parseInt(arr[1][1])+parseInt(arr[2][1])==3){
    console.log("cross wins")
winner="player-1 wins"
wins=1  
b1=document.querySelector(".box01")
b1.style.backgroundColor="rgb(249, 212, 89)"
b2=document.querySelector(".box11")
b2.style.backgroundColor="rgb(249, 212, 89)"
b3=document.querySelector(".box21")
b3.style.backgroundColor="rgb(249, 212, 89)"
}


if(parseInt(arr[0][2])+parseInt(arr[1][2])+parseInt(arr[2][2])==3){
    console.log("cross wins")
winner="player-1 wins"
wins=1  
b1=document.querySelector(".box02")
b1.style.backgroundColor="rgb(249, 212, 89)"
b2=document.querySelector(".box12")
b2.style.backgroundColor="rgb(249, 212, 89)"
b3=document.querySelector(".box22")
b3.style.backgroundColor="rgb(249, 212, 89)"
}


if(parseInt(arr[0][0])+parseInt(arr[1][1])+parseInt(arr[2][2])==3){
    console.log("cross wins")
winner="player-1 wins"
wins=1  
b1=document.querySelector(".box00")
b1.style.backgroundColor="rgb(249, 212, 89)"
b2=document.querySelector(".box11")
b2.style.backgroundColor="rgb(249, 212, 89)"
b3=document.querySelector(".box22")
b3.style.backgroundColor="rgb(249, 212, 89)"
}

if(parseInt(arr[0][2])+parseInt(arr[1][1])+parseInt(arr[2][0])==3){
    console.log("cross wins")
winner="player-1 wins"
wins=1  
b1=document.querySelector(".box02")
b1.style.backgroundColor="rgb(249, 212, 89)"
b2=document.querySelector(".box11")
b2.style.backgroundColor="rgb(249, 212, 89)"
b3=document.querySelector(".box20")
b3.style.backgroundColor="rgb(249, 212, 89)"
}


        if  (parseInt(arr[0][0])+parseInt(arr[0][1])+parseInt(arr[0][2])==3){
                console.log("cross wins")
                winner="player-1 wins"
                wins=1
                b1=document.querySelector(".box00")
                b1.style.backgroundColor="rgb(249, 212, 89)"
                b2=document.querySelector(".box01")
                b2.style.backgroundColor="rgb(249, 212, 89)"
                b3=document.querySelector(".box02")
                b3.style.backgroundColor="rgb(249, 212, 89)"
                
            }
          
            
        
        
    
            if(parseInt(arr[1][0])+parseInt(arr[1][1])+parseInt(arr[1][2])==3){
                console.log("cross wins")
            winner="player-1 wins"
            wins=1  
            b1=document.querySelector(".box10")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box11")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box12")
            b3.style.backgroundColor="rgb(249, 212, 89)"
        }
    
        
        if(parseInt(arr[2][0])+parseInt(arr[2][1])+parseInt(arr[2][2])==3){
            console.log("cross wins")
        winner="player-1 wins"
        wins=1  
        b1=document.querySelector(".box20")
        b1.style.backgroundColor="rgb(249, 212, 89)"
        b2=document.querySelector(".box21")
        b2.style.backgroundColor="rgb(249, 212, 89)"
        b3=document.querySelector(".box22")
        b3.style.backgroundColor="rgb(249, 212, 89)"
    }
        
    if(parseInt(arr[0][0])+parseInt(arr[1][0])+parseInt(arr[2][0])==3){
        console.log("cross wins")
    winner="player-1 wins"
    wins=1  
    b1=document.querySelector(".box00")
    b1.style.backgroundColor="rgb(249, 212, 89)"
    b2=document.querySelector(".box10")
    b2.style.backgroundColor="rgb(249, 212, 89)"
    b3=document.querySelector(".box20")
    b3.style.backgroundColor="rgb(249, 212, 89)"
        }


        if(parseInt(arr[0][1])+parseInt(arr[1][1])+parseInt(arr[2][1])==3){
            console.log("cross wins")
        winner="player-1 wins"
        wins=1  
        b1=document.querySelector(".box01")
        b1.style.backgroundColor="rgb(249, 212, 89)"
        b2=document.querySelector(".box11")
        b2.style.backgroundColor="rgb(249, 212, 89)"
        b3=document.querySelector(".box21")
        b3.style.backgroundColor="rgb(249, 212, 89)"
        }


        if(parseInt(arr[0][2])+parseInt(arr[1][2])+parseInt(arr[2][2])==3){
            console.log("cross wins")
        winner="player-1 wins"
        wins=1  
        b1=document.querySelector(".box02")
        b1.style.backgroundColor="rgb(249, 212, 89)"
        b2=document.querySelector(".box12")
        b2.style.backgroundColor="rgb(249, 212, 89)"
        b3=document.querySelector(".box22")
        b3.style.backgroundColor="rgb(249, 212, 89)"
        }


        if(parseInt(arr[0][0])+parseInt(arr[1][1])+parseInt(arr[2][2])==3){
            console.log("cross wins")
        winner="player-1 wins"
        wins=1  
        b1=document.querySelector(".box00")
        b1.style.backgroundColor="rgb(249, 212, 89)"
        b2=document.querySelector(".box11")
        b2.style.backgroundColor="rgb(249, 212, 89)"
        b3=document.querySelector(".box22")
        b3.style.backgroundColor="rgb(249, 212, 89)"
        }

        if(parseInt(arr[0][2])+parseInt(arr[1][1])+parseInt(arr[2][0])==3){
            console.log("cross wins")
        winner="player-1 wins"
        wins=1  
        b1=document.querySelector(".box02")
        b1.style.backgroundColor="rgb(249, 212, 89)"
        b2=document.querySelector(".box11")
        b2.style.backgroundColor="rgb(249, 212, 89)"
        b3=document.querySelector(".box20")
        b3.style.backgroundColor="rgb(249, 212, 89)"
        }


      
      if  (parseInt(arr[0][0])+parseInt(arr[0][1])+parseInt(arr[0][2])==0){
        console.log("circle wins")
        winner="player-2 wins"
        wins=1
        b1=document.querySelector(".box00")
        b1.style.backgroundColor="rgb(249, 212, 89)"
        b2=document.querySelector(".box01")
        b2.style.backgroundColor="rgb(249, 212, 89)"
        b3=document.querySelector(".box02")
        b3.style.backgroundColor="rgb(249, 212, 89)"
        
    }
  
    



            if(parseInt(arr[1][0])+parseInt(arr[1][1])+parseInt(arr[1][2])==0){
                console.log("circle wins")
            winner="player-2 wins"
            wins=1  
            b1=document.querySelector(".box10")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box11")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box12")
            b3.style.backgroundColor="rgb(249, 212, 89)"
        }


            if(parseInt(arr[2][0])+parseInt(arr[2][1])+parseInt(arr[2][2])==0){
                console.log("circle wins")
            winner="player-2 wins"
            wins=1  
            b1=document.querySelector(".box20")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box21")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box22")
            b3.style.backgroundColor="rgb(249, 212, 89)"
            }

            if(parseInt(arr[0][0])+parseInt(arr[1][0])+parseInt(arr[2][0])==0){
            console.log("circle wins")
            winner="player-2 wins"
            wins=1  
            b1=document.querySelector(".box00")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box10")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box20")
            b3.style.backgroundColor="rgb(249, 212, 89)"
            }


            if(parseInt(arr[0][1])+parseInt(arr[1][1])+parseInt(arr[2][1])==0){
            console.log("circle wins")
            winner="player-2 wins"
            wins=1  
            b1=document.querySelector(".box01")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box11")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box21")
            b3.style.backgroundColor="rgb(249, 212, 89)"
            }


            if(parseInt(arr[0][2])+parseInt(arr[1][2])+parseInt(arr[2][2])==0){
            console.log("circle wins")
            winner="player-2 wins"
            wins=1  
            b1=document.querySelector(".box02")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box12")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box22")
            b3.style.backgroundColor="rgb(249, 212, 89)"
            }


            if(parseInt(arr[0][0])+parseInt(arr[1][1])+parseInt(arr[2][2])==0){
            console.log("circle wins")
            winner="player-2 wins"
            wins=1  
            b1=document.querySelector(".box00")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box11")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box22")
            b3.style.backgroundColor="rgb(249, 212, 89)"
            }

            if(parseInt(arr[0][2])+parseInt(arr[1][1])+parseInt(arr[2][0])==0){
            console.log("circle wins")
            winner="player-2 wins"
            wins=1  
            b1=document.querySelector(".box02")
            b1.style.backgroundColor="rgb(249, 212, 89)"
            b2=document.querySelector(".box11")
            b2.style.backgroundColor="rgb(249, 212, 89)"
            b3=document.querySelector(".box20")
            b3.style.backgroundColor="rgb(249, 212, 89)"
            }
    if (wins==0){
    count++;
}
else if(wins=1){
    arr=[[undefined,undefined,undefined],[undefined,undefined,undefined],[undefined,undefined,undefined]]
    const buttons=document.querySelectorAll(".box")
    buttons.forEach((button)=>{
        button.disabled=true
    })
c++
}
if(c==9){
    c=0
    arr=[[undefined,undefined,undefined],[undefined,undefined,undefined],[undefined,undefined,undefined]]
    buttons.forEach((button) => {
        const imgElement = button.querySelector('img');
        
        if (imgElement) {
            button.removeChild(imgElement);
        }
        button.disabled=false
    }) 
}
})
redo.addEventListener("click",(obj)=>{
    arr=[[undefined,undefined,undefined],[undefined,undefined,undefined],[undefined,undefined,undefined]]
    buttons.forEach((button) => {
        const imgElement = button.querySelector('img');
        if (imgElement) {
            button.removeChild(imgElement);
        }
        button.disabled=false
    })
    b1.style.backgroundColor="rgb(254, 103, 114"
    b2.style.backgroundColor="rgb(254, 103, 114)"
    b3.style.backgroundColor="rgb(254, 103, 114)"
})
