let ischng = document.querySelector("#strgr")
let btn = document.querySelector("#btn")
flag = 0;
btn.addEventListener("click",function(){
    if(flag==0){
    ischng.innerHTML="Friend";
    ischng.style.color ="green";
    btn.innerHTML="Remove";
    btn.style.color="white";
    btn.style.backgroundColor="red"
    flag = 1;
    }
    else{
        ischng.innerHTML="Stranger";
    ischng.style.color ="Red";
    btn.innerHTML="Add Friend";
    btn.style.color="white";
    btn.style.backgroundColor="cadetblue"; 
    flag = 0;
    }
})
