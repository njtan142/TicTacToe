const canvasButtons = document.querySelectorAll(".canvas button");
const canvas = document.querySelector(".canvas");
const title = document.getElementById("title");
const resetButton = document.getElementById("reset");
const gameOver = document.getElementById("gameOver");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const buttonsArray = [
  button1,
  button2,
  button3,
  button4,
  button4,
  button5,
  button6,
  button7,
  button8,
  button9,
];
var b1, b2, b3, b4, b5, b6, b7, b8, b9;
var rowArray = [
  [b1, b2, b3],
  [b4, b5, b6],
  [b7, b8, b9],
];
var columnArray = [
  [b1, b4, b7],
  [b2, b5, b8],
  [b3, b6, b9],
];
var diagonalArray = [
  [b1, b5, b9],
  [b3, b5, b7],
];
let colorToggle = 0;
canvasButtons.forEach(function (buttons) {
  buttons.onclick = function () {
    let clicked =
      (buttons.style.backgroundColor == "white" ||
        buttons.style.backgroundColor == "") == false;
    if (colorToggle % 2 == 0 && !clicked) {
      buttons.style.backgroundColor = "black";
      buttons.style.border = "none";
      colorToggle++;
    } else if (!clicked) {
      buttons.style.backgroundColor = "blue";
      buttons.style.border = "none";
      colorToggle++;
    }
    setTimeout(function () {
      if (
        isGameOver(rowArray) ||
        isGameOver(columnArray) ||
        isGameOver(diagonalArray)
      ) {
        gameOver.style.display = "flex";
        gameOver.style.opacity = "1";
        animation(buttonsArray);
       
        if (colorToggle % 2 == 0) {
          gameOver.innerHTML +=
            '<p style="font-size:2em">Blue Player Wins!</p>';
        } else {
          gameOver.innerHTML +=
            '<p style="font-size:2em">Black Player Wins!</p>';
        }
      }
    }, 1);
  };
});
resetButton.addEventListener("click", function () {
  gameOver.style.display = "none";
  gameOver.style.opacity = "0";
  gameOver.innerHTML = "<h1>Game Over</h1>";
  b1 = undefined;
  b2 = undefined;
  b3 = undefined;
  b4 = undefined;
  b5 = undefined;
  b6 = undefined;
  b7 = undefined;
  b8 = undefined;
  b9 = undefined;
  canvasButtons.forEach(function (buttons) {
    buttons.style.backgroundColor = "white";
    buttons.style.border = "1px solid gray";
  });
});
canvas.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    title.style.color = "black";
  } else {
    title.style.color = "blue";
  }
});
button1.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b1 = "x";
  } else {
    b1 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button2.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b2 = "x";
  } else {
    b2 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button3.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b3 = "x";
  } else {
    b3 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button4.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b4 = "x";
  } else {
    b4 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button5.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b5 = "x";
  } else {
    b5 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button6.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b6 = "x";
  } else {
    b6 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button7.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b7 = "x";
  } else {
    b7 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button8.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b8 = "x";
  } else {
    b8 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
button9.addEventListener("click", function () {
  if (colorToggle % 2 == 0) {
    b9 = "x";
  } else {
    b9 = "o";
  }
  rowArray = [
    [b1, b2, b3],
    [b4, b5, b6],
    [b7, b8, b9],
  ];
  columnArray = [
    [b1, b4, b7],
    [b2, b5, b8],
    [b3, b6, b9],
  ];
  diagonalArray = [
    [b1, b5, b9],
    [b3, b5, b7],
  ];
});
function checkDuplicate(array) {
  let arrayList = {};
  let isDuplicate = false;
  for (let input of array) {
    if (input == undefined) {
    } else if (arrayList[input] == 3) {
      isDuplicate = true;
      break;
    } else if (arrayList[input] == undefined) {
      arrayList[input] = 1;
    } else {
      arrayList[input] += 1;
      if (arrayList[input] == 3) {
        isDuplicate = true;
        break;
      }
    }
  }
  return isDuplicate;
}
function isGameOver(array) {
  for (let row of array) {
    if (checkDuplicate(row)) {
      return true;
    }
  }
}
function animation(buttonsArray) {
  setTimeout(function () {
    button1.style.height = "110px";
    button1.style.width = "110px";
  }, 100);
  setTimeout(function () {
    button1.style.width = "100px";
    button1.style.height = "100px";
  }, 1000);
  setTimeout(function () {
    button2.style.height = "110px";
    button2.style.width = "110px";
  }, 300);
  setTimeout(function () {
    button2.style.width = "100px";
    button2.style.height = "100px";
  }, 1200);
  setTimeout(function () {
    button3.style.height = "110px";
    button3.style.width = "110px";
  }, 500);
  setTimeout(function () {
    button3.style.width = "100px";
    button3.style.height = "100px";
  }, 1400);
  setTimeout(function () {
    button4.style.height = "110px";
    button4.style.width = "110px";
  }, 700);
  setTimeout(function () {
    button4.style.width = "100px";
    button4.style.height = "100px";
  }, 1600);
  setTimeout(function () {
    button5.style.height = "110px";
    button5.style.width = "110px";
  }, 900);
  setTimeout(function () {
    button5.style.width = "100px";
    button5.style.height = "100px";
  }, 1800);
  setTimeout(function () {
    button6.style.height = "110px";
    button6.style.width = "110px";
  }, 1100);
  setTimeout(function () {
    button6.style.width = "100px";
    button6.style.height = "100px";
  }, 2000);
  setTimeout(function () {
    button7.style.height = "110px";
    button7.style.width = "110px";
  }, 1300);
  setTimeout(function () {
    button7.style.width = "100px";
    button7.style.height = "100px";
  }, 2200);
  setTimeout(function () {
    button8.style.height = "110px";
    button8.style.width = "110px";
  }, 1500);
  setTimeout(function () {
    button8.style.width = "100px";
    button8.style.height = "100px";
  }, 2400);
  setTimeout(function () {
    button9.style.height = "110px";
    button9.style.width = "110px";
  }, 1700);
  setTimeout(function () {
    button9.style.width = "100px";
    button9.style.height = "100px";
  }, 2600);
}
animation(buttonsArray);
setInterval(function () {
  animation(buttonsArray);
}, 7000);
