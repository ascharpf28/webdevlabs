var x,y;
x=5;
y=7;
var z=x+y;
console.log(z)

var A, B;
A="Hello ";
B="world!";
var C=A+B;
console.log(C);

function SumNPrint(x1, x2){
    var x3=x1+x2;
    return x3;
}

console.log(SumNPrint(x,y));
console.log(SumNPrint(A,B));

if (C.length>z){
    console.log(C);
}
if (C.length<z){
    console.log(z);
}
else{
    console.log("good job!");
}

var L1=["Watermelon", "Pineapple", "Pear", "Banana"];
var L2=["Apple", "Banana", "Kiwi", "Orange"];

/*function findTheBanana(list){
    for (var i=0; i<list.length; i++){
        fruit=list[i];
        if (fruit=="Banana"){
            return alert("found the Banana in" + i);
        }
    }
}*/

/*findTheBanana(L1)
findTheBanana(L2)
*/

function findTheBanana(item, list){
    var loc;
    if (list==L1){
        loc="first array";
    }
    else{
        loc="second array";
    }
    if (item=="banana"){
         return alert("found the Banana in" + loc); 
    }
}

L1.forEach(element => {
    if (element == "Banana"){
        alert("We found banana in first array")

    }
});

L2.forEach(element =>{
    if (element == "Banana"){
        alert("We found banana in second array")

    }
});


L1.forEach(findTheBanana);
L2.forEach(findTheBanana); 

function greetingFunc(){
    var d=new Date();
    var h=d.getHours();
    var element = document.getElementById("greeting");
    var nameText = "I am Alexandra Scharpf";
    if (h>=5 && h<12){
        element.innerHTML="Good night";
    }
    else if (h>=12 && h<18){
        element.innerHTML=  "Good afternooon";
    }
    else if (h>=18 && h<20){
        element.innerHTML= "Good evening";
    }
    else{
        element.innerHTML="Good night";
    }
    console.log(element.innerHTML);
    element.innerHTML=element.innerHTML+", "+nameText;
}

if (window.location.href=="https://ascharpf28.github.io/webdevlabs/index.html" || window.location.href=="https://ascharpf28.github.io/webdevlabs/"){
    greetingFunc();
}

function addYear(){
    var date=new Date();
    var year=date.getFullYear();
    var elem = document.getElementById("copyYear");
    elem.innerHTML=year;
}

function showList(){
    var elem=document.getElementById("list");
    var btn=document.getElementById("btn");
    var display=window.getComputedStyle(elem).display;
    if (display=="block"){
        elem.style.display="none";
        btn.innerHTML="Show List";
    }
    else{
        elem.style.display="block";
        btn.innerHTML="Hide List";
    }
}


