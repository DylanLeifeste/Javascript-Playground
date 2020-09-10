"use strict";

alert("a game in progress with much more work to come");

document.getElementById("image").onclick = function() {
    if(this.src === "peter-punch.png"){
        this.src = "peter-punched.png";
    } else {
        this.src = "peter-punch.png";
    }
};

