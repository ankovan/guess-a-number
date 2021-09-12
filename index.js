numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
console.log(randomNumber);

window.addEventListener('load', ()=> {
  answerBox = document.getElementById('answer');
  mainText = document.getElementById('main');
})

function checkNumber(){
  console.log(randomNumber, answerBox.value)
  const value = parseInt(answerBox.value);
  if(randomNumber == value){
    mainText.innerHTML = "You've guessed!"
  }
  if(value > randomNumber){
    mainText.innerHTML = "Lesser!"
  }
  if(value < randomNumber){
    mainText.innerHTML = "Bigger!"
  }
  if(!value){
    mainText.innerHTML = "You need to write a number"
  }
  if(value > 10 || value < 1){
    mainText.innerHTML = "Your answer is not in the set boundaries"
  }
}