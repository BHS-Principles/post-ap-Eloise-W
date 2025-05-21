var LIST = [
    "Frozen Burritoes ",
    "Banana Sorbet ",
    "Sandwitch"
];

var BTN = document.getElementById("mybutton");
var theAction = function(event){
    alert("Hello! You clicked the button");
    console.log(event);
}
for(let i = 0; i<3; i++){//can use let or var
    var newBTN = BTN.cloneNode(true);
    newBTN.innerHTML = LIST[i];
    document.body.append(newBTN);
    alert("Check me out "+ LIST[i]);
    newBTN.addEventListener("click", theAction);
    
}