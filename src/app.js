import "bootstrap";
import "./style.css";
import "./assets/img/excusa.png";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
 
function excuse(who,action,what,when){
  let quien=Math.floor(Math.random()*who.length);
  let accion=Math.floor(Math.random()*action.length);
  let que=Math.floor(Math.random()*what.length);
  let cuando=Math.floor(Math.random()*when.length); 
  return who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando] + ".";
};

window.onload = function() {
    document.querySelector('#excuse').innerHTML = excuse(who, action, what, when);
};