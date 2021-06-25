const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

let moves = 30;

function flipCard() {
  //this.classList.toggle('flip');
  if (lockBoard) return;
  if (this === firstCard) return;

  moves--;
  document.querySelector("span").innerHTML = moves;
  /*if(moves === 0){
    document.querySelector(".popup").style.display="flex";
    document.querySelector(".container").style.display="none";
    let h2=document.createElement("h2");
    document.querySelector(".popup > div > h2").innerHTML="You Lose !!";
  }*/

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  //hasFlippedCard = false;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    //lockBoard = false;
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

document.getElementById("reload").addEventListener("click", (e)=>{
  window.location.reload();
})