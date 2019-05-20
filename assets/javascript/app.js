"use strict";
var questionAsk = ["In one year, how many tree's does one person go through?<br /><br />", "What is the most common item recycled in the US?<br /><br />", 
"How many gallons of water does one leaky faucet waste over one year?<br /><br />", "What item can be recycled over and over again? (and gets prettier!)"]
{/* <button type="button" class="btn btn-outline-dark">Dark</button> */}
var answer1 = ["<button type='button' class='btn btn-outline-dark' onclick=questionI()> 1 tree per year</button>", 
"<button type='button' class='btn btn-outline-dark' onclick=questionI()>Clothing</button>", 
"<button type='button' class='btn btn-outline-dark' onclick=questionI()> 20 gallons</button>",
"<button type='button' class='btn btn-outline-dark' onclick=questionC()> Glass</button>"];

var answer2 = ["<button type='button' class='btn btn-outline-dark' onclick=questionI()> 12 trees per year</button>",
"<button type='button' class='btn btn-outline-dark' onclick=questionC()> Aluminum</button>",
"<button type='button' class='btn btn-outline-dark' onclick=questionC()> 540 gallons</button>",
"<button type='button' class='btn btn-outline-dark' onclick=questionI()> Plastic</button>"];

var answer3 = ["<button type='button' class='btn btn-outline-dark' onclick=questionC()> 7 trees per year</button>",
"<button type='button' class='btn btn-outline-dark'onclick=questionI()> Paper</button>",
"<button type='button' class='btn btn-outline-dark'onclick=questionI()>75 gallons</button>",
"<button type='button' class='btn btn-outline-dark' onclick=questionI()> Rubber</button>"];

var correct = ["Correct", "Correct", "Correct"]
var incorrect = ["Incorrect", "Incorrect", "Incorrect"]



var s = 0; s++;
var c = 30;
var next = document.getElementById("next");
 
var counter = 0;

var update;

var clear= document.getElementById("container");

var disappear= document.getElementById("disappear");
var clickStart= document.getElementById("clickStart");
var option1= document.getElementById("option1");
var option2= document.getElementById("option2");
var option3= document.getElementById("option3");



function Start() {
    window.clearInterval(update)
    update = setInterval(timer, 1000);
    disappear.innerHTML = "";
    clickStart.innerHTML = "";
    question1.innerHTML = questionAsk[counter];
    option1.innerHTML = answer1[counter];
    option2.innerHTML = answer2[counter];
    option3.innerHTML = answer3[counter];
    counter++;


}

function questionC() {
    answer1.innerHTML = correct[0];
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    next.innerHTML = "<button onclick='Start()'>Next</button>";
    score.innerHTML = s++;

    console.log("questionC")


}
function questionI() {
    answer1.innerHTML = incorrect[0];
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    next.innerHTML = "<button onclick='Start()'>Next</button>";
    
}


function timer() {
    c = c - 1;
    if (c < 30) {
        time.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
        clear.innerHTML = "Game Over";
        
        //once timer hits 0, game needs to alert that Time's up. 
    }


}


