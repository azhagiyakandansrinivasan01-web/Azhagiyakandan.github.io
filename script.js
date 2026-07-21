const text = "Initializing Portfolio...";

let i = 0;

const typing = document.getElementById("typing");

function type(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(type,70);

}

else{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

},1000);

}

}

type();
/* ===========================
Typing Animation
=========================== */

const words = [

"Python Developer",

"Cybersecurity Enthusiast",

"Future Software Engineer",

"Open Source Learner"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typedText = document.getElementById("typed-text");

function typingAnimation(){

const currentWord = words[wordIndex];

if(!deleting){

typedText.textContent =
currentWord.substring(0,letterIndex);

letterIndex++;

if(letterIndex > currentWord.length){

deleting = true;

setTimeout(typingAnimation,1500);

return;

}

}else{

typedText.textContent =
currentWord.substring(0,letterIndex);

letterIndex--;

if(letterIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(
typingAnimation,
deleting ? 40 : 90
);

}

typingAnimation();
/* ==========================
Skill Animation
========================== */

const skillSection = document.querySelector(".skills");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

document.querySelectorAll(".progress-bar").forEach(bar=>{

bar.style.width = bar.classList.contains("python") ? "90%" :
                  bar.classList.contains("html") ? "80%" :
                  bar.classList.contains("css") ? "75%" :
                  bar.classList.contains("js") ? "60%" :
                  bar.classList.contains("cyber") ? "70%" :
                  "65%";

});

}

});

});

observer.observe(skillSection);
/* ===========================
TERMINAL
=========================== */

const terminal = document.getElementById("terminal");

const terminalInput = document.getElementById("terminal-command");

const output = document.getElementById("terminal-output");

document.addEventListener("keydown",function(e){

if(e.ctrlKey && e.shiftKey && e.key==="K"){

terminal.style.display="flex";

terminalInput.focus();

}

});

terminalInput.addEventListener("keydown",function(e){

if(e.key==="Enter"){

const command=this.value.toLowerCase();

output.innerHTML+=`<p>AK@Portfolio:~$ ${command}</p>`;

switch(command){

case "help":

output.innerHTML+=`

<p>

about

<br>

skills

<br>

projects

<br>

github

<br>

contact

<br>

clear

<br>

exit

</p>

`;

break;

case "about":

output.innerHTML+=`

<p>

I'm Azhagiyakandan.

Python Developer & Cybersecurity Enthusiast.

</p>

`;

break;

case "skills":

output.innerHTML+=`

<p>

Python

<br>

HTML

<br>

CSS

<br>

JavaScript

<br>

Cybersecurity

</p>

`;

break;

case "projects":

output.innerHTML+=`

<p>

1. AZCruiser

<br>

2. More Projects Coming Soon

</p>

`;

break;

case "github":

output.innerHTML+=`

<p>

https://github.com/azhagiyakandansrinivasan01-web

</p>

`;

break;

case "contact":

output.innerHTML+=`

<p>

Email:
yourmail@gmail.com

</p>

`;

break;

case "clear":

output.innerHTML="";

break;

case "exit":

terminal.style.display="none";

break;

default:

output.innerHTML+=`

<p>

Command not found.

Type help.

</p>

`;

}

this.value="";

output.scrollTop=output.scrollHeight;

}

});
// ===========================
// ACTIVE NAVBAR
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});


navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#"+current){

link.classList.add("active");

}

});

});