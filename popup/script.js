const startButton = document.getElementById('start');
const timer = document.getElementById('timer');
const score = document.getElementById('score');
const boxes = document.querySelectorAll('.box');

console.log(timer.innerText);
let activeGame = timer.innerText == 0;
console.log(activeGame);

startButton.addEventListener('click', () => {
  if (activeGame) return;

  const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
  randomBox.classList.add('active');
  
  setInterval(function () {
    if (timer.innerText == 0) { 
      boxes.forEach((box) => box.classList.remove('active'));
      alert(`The timer has ended, you've set a score of ${score.innerText}`);
      location.reload();
    }
    timer.innerText -= 1;
  }, 1000);
});

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    let boxIsActive = Object.values(box.classList).indexOf('active') > -1;
    console.log(boxIsActive);

    if (!boxIsActive) return;

    score.innerText = parseInt(score.innerText) + 1;
    box.classList.remove('active');

    const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
    randomBox.classList.add('active');
  });
});
