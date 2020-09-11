"use strict";

alert("a game in progress with much more work to come");

// document.getElementById("image").onclick = function() {
//     if(this.src === "peter-punch.png"){
//         this.src = "peter-punched.png";
//     } else {
//         this.src = "peter-punch.png";
//     }
// };

var x=0;
var lv=1;
function punch(){
    x+=lv;
    textUpdate();

}
function textUpdate(){
    document.getElementById("punches").innerHTML=x+" Punches";
}

let peterPunch = document.getElementById("peterPunch");
let punchButton = document.getElementById("punchButton");

    function changeImg() {
        if (peterPunch.getAttribute('src') === "./Images/peter-punch.png") {
            peterPunch.setAttribute('src', "./Images/peter-punched.png");
        } else {
            peterPunch.setAttribute('src', "./Images/peter-punch.png")
        }
    }

    punchButton.addEventListener("click", changeImg);