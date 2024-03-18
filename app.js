const container=document.querySelector(".conatiner")
var count=1
var arr=[[null,null,null],[null,null,null],[null,null,null]]
const redo=document.querySelector(".redo")

container.addEventListener("click",(obj)=>{
    obj.preventDefault();
    var wins=0;
    if (count%2!=0){
        var index=String(obj.target.classList[0])
        arr[index.slice(0,1)][index.slice(1)]="X"
        obj.target.innerHTML=`
        <img src="cross-svgrepo-com.png" class="image"  alt="">`
    }
    
    else{
        var index=String(obj.target.classList[0])
        arr[index.slice(0,1)][index.slice(1)]="O"
        obj.target.innerHTML=`
        <img src=" circle-svgrepo-com.png" class="image"  alt="">`
    }
    
    
    if(arr[1][1]=="X"&&arr[0][0]=="X"&&arr[2][2]=="X" || arr[1][1]=="O"&&arr[0][0]=="O"&&arr[2][2]=="O"){
        console.log("cross wins")
        wins=1
    }
    else if(arr[0][2]=="O"&&arr[1][1]=="O"&&arr[2][0]=="O" || arr[0][2]=="X"&&arr[1][1]=="X"&&arr[2][0]=="X"){
        console.log("circle wins")
        wins=1
    }

    else if(1){
        var c=0;
        var o=0;
        for (let i=0;i<3;i++){
            if(arr[i][0]=="X"){
                c++;
            }
            else if(arr[i][0]=="O"){
                c++
            }
        }
        if(c==3){
        console.log("cross wins")
        wins=1
    }
    else if(o==3){
        console.log("circle wins")
        wins=1;
    }
    }

    else if(1){
        var c=0;
        var o=0;
        for (let i=0;i<3;i++){
            if(arr[i][1]=="X"){
                c++;
            }
            else if(arr[i][1]=="O"){
                o++
            }
        }
        if(c==3){
        console.log("cross wins")
        wins=1
    }
    else if(o==3){
        console.log("circle wins")
        wins=1;
    }
    }

    else if(1){
        var c=0;
        var o=0;
        for (let i=0;i<3;i++){
            if(arr[i][2]=="X"){
                c++;
            }
            else if(arr[i][2]=="O"){
                o++
            }
        }
        if(c==3){
        console.log("cross wins")
        wins=1
    }
    else if(o==3){
        console.log("circle wins")
        wins=1;
    }
    }

    else if(1){
    var c=0;
    var o=0;
    for (const i of arr[0]) {
        if(i=="X"){
            c++;
        }
        else if(i=="O"){
            o++;
        }
    }
    if(c==3){
        console.log("cross wins")
        wins=1
    }
    else if(o==3){
        console.log("circle wins")
        wins=1;
    }
}
    
    else if(1){
    var c=0;
    var o=0;
    for (const i of arr[1]) {
        if(i=="X"){
            c++;
        }
        else if(i=="O"){
            o++;
        }
    }
    if(c==3){
        console.log("cross wins")
        wins=1
    }
    else if(o==3){
        console.log("circle wins")
         wins=1;
    }

    }
    else {
    var c=0;
    var o=0;
    for (const i of arr[2]) {
        if(i=="X"){
            c++;
        }
        else if(i=="O"){
            o++;
        }
    }
    if(c==3){
        console.log("cross wins")
         wins=1;
    }
    else if(o==3){
        console.log("circle wins")
        wins=1;
    }
    }    
    if (wins==0){
    count++;
}
else if(wins=1){
    arr=[[null,null,null],[null,null,null],[null,null,null]]
    const buttons=document.querySelectorAll(".box")
    buttons.forEach((button)=>{
        button.disabled=true
    })
}
})

redo.addEventListener("click",(obj)=>{
    const buttons = document.querySelectorAll('.box');
    buttons.forEach((button) => {
        const imgElement = button.querySelector('img');

        if (imgElement) {
            button.removeChild(imgElement);
        }
})
})
