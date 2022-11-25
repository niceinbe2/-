/*
function changeColor(){
    document.body.style.background = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}
let Name='alex'
alert(a)

var iceCream = 'вилку в глаз';
if (iceCream === 'в нос раз') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
  function multiply(num1,num2) {
    var result = num1 * num2;
    return result;  
 }
 console.log(multiply(2,6))
 

document.querySelector('html').onclick = function() {
    alert('вас зщаскамили :)');
}
 
let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Приветствуем Вас, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Приветствуем Вас, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  
let select = document.querySelector('select');
let para = document.querySelector('p');
select.addEventListener('change', setWeather);
function setWeather() {
  
  var choice = select.value;
  if (choice === 'sunny') {
   para.textContent = 'сегодня солнечно купите мусорное ведро и на полните его водой';
  }
  else if (choice === 'rainy') {
    para.textContent = 'не ьерите зонтик';
  }
  else if (choice === 'snowing') {
    para.textContent = '-100';
  }
  else if (choice === 'overcast') {
    para.textContent = 'круто';
  }

  
}
let select = document.querySelector('select');
let html = document.querySelector('html');
document.body.style.padding ='10px';

function update(bgColor,textColor){
html.style.backgroundColor = ;
html.style.color = textColor;
}
select.onchange = function(){
(select.value ==='black') ? update ('black','white') : update('white','black')

}

var flowers= ["rose ", "lily" ];
for (var i =0;i<flowers.length;i++){

  alert (flowers[i] + "'это цветок")
}*/
var i=1;
var msg ="";
while (i<10){
msg+= i+ "x3 =" + (i*3) + "<br/>";
i++;
}
document.write(msg);