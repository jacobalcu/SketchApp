let outerDiv = document.getElementById("outer");
let size = 16;

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
    div.classList.remove("triggered");
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
    div.addEventListener("mousemove", (e) => {
      e.target.classList.add("triggered");
    });
  });
};

createBoard(size);
setActive();

let changeSize = document.querySelector(".size");
changeSize.addEventListener("click", () => {
  let newSize = prompt("What should the new size be?");
  if (newSize > 99) {
    alert("Must be less than or equal to 100");
    exit;
  }
  deleteBoard();
  createBoard(newSize);
  setActive();
});

let button = document.querySelector(".reset");
button.addEventListener("click", resetFunc);
