import "./styles.css";

let array;
let player;

const wins = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

let tiles = Array.from(document.querySelectorAll("#board td"));
document.getElementById("board").addEventListener("click", makeMove);
let parent = document.getElementById("board");
let child = parent.querySelectorAll("td");

function init() {
  array = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  player = "X";
  load();
}

function checkWin() {
  wins.forEach(function (check, i) {
    if (
      array[check[0]] &&
      array[check[0]] === array[check[1]] &&
      array[check[0]] === array[check[2]] &&
      array[check[0]] === array[check[4]] &&
      array[check[0]] === array[check[4]]
    ) {
      if (array[check[0]] !== "") {
        if (array[check[0]] === "X") {
          alert("Player 1 won!");
        } else {
          alert("Player 2 won!");
        }
      }
    }
  });
}

function load() {
  let parent = document.getElementById("board");
  let child = parent.querySelectorAll("td");
  array.forEach(function (mark, i) {
    tiles[i].textContent = mark;
    child[i].style.className = ".player1tile";
  });
  checkWin();
}

function makeMove() {
  let index = tiles.findIndex(function (tile) {
    return tile === event.target;
  });
  array[index] = player;
  if (array[index] === "X") {
    child[index].style.backgroundColor = "rgb(124, 252 , 0 )";
  } else {
    child[index].style.backgroundColor = "rgb(250, 128, 114)";
  }

  player = changeTurn();
  resetCounter();
  load();
}

function changeTurn() {
  if (player === "X") {
    player = "O";
  } else if (player === "O") {
    player = "X";
  }
  return player;
}

let count = setInterval(counter, 1000);
let time = 10;
var width = 10;

function counter() {
  let elem = document.getElementById("bar");
  let dispTime = document.getElementById("timer");

  width = time;
  dispTime.innerHTML = time + "s Left";

  if (time === 0) {
    resetCounter();
    changeTurn();
  }
  elem.style.width = width + "%";
  time--;
}

function resetCounter() {
  clearInterval(count);
  time = 10;
  width = 10;
  createCounter();
}

function createCounter() {
  let count = setInterval(counter, 1000);
}

init();
