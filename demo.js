window.onload=()=>{
    console.log("windows loaded");
    var a=10;
    var b=20;
    let numbers=[10,20,30,40,50,60];
    document.getElementById("btn").onclick=()=>{
    var ammu =document.getElementById("heading");
    ammu.innerHTML="Introduction to JS"; 
    let sumoffirstlast=numbers[0]+numbers[numbers.length-1];
    console.log("sum of first and last numbers:",sumoffirstlast);
    if(a>b){
        console.log("a is greater than b");
    }else{
        console.log("a is not greater than b");
    }
    console.log (a-=3);
    console.log("button clicked");
    };
};