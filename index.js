const origColor = "antiquewhite";

let outerDiv = document.getElementById("outer");
let size = 16;
let currColor = "aqua";

let createBoard = (size) => {
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("inner");
    div.style.width = `${480 / size}px`;
    div.style.height = `${480 / size}px`;
    outerDiv.appendChild(div);
  }
};

let resetFunc = () => {
  let divs = document.querySelectorAll(".inner");

  divs.forEach((div) => {
    div.style["background-color"] = origColor;
  });
};

let deleteBoard = () => {
  let myNode = document.getElementById("outer");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
};

let setActive = () => {
  let divs = document.querySelectorAll(".inner");
  divs.forEach((div) => {
    div.addEventListener("mousemove", () => {
      //   e.target.classList.add("triggered");
      div.style["background-color"] = currColor;
    });
  });
};

createBoard(size);
setActive();

let changeSize = document.querySelector(".size");
changeSize.addEventListener("click", () => {
  size = prompt("What should the new size be?");
  if (size > 99) {
    size = 16;
    alert("Must be less than or equal to 100");
    exit;
  }
  deleteBoard();
  createBoard(size);
  setActive();
});

let button = document.querySelector(".reset");
button.addEventListener("click", resetFunc);

let changeColor = document.querySelector(".color");
changeColor.addEventListener("click", () => {
  currColor = prompt("Change color");
});
