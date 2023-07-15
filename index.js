let outerDiv = document.getElementById("outer");

for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
  div.classList.add("inner");
  outerDiv.appendChild(div);
}

let divs = document.querySelectorAll(".inner");
divs.forEach((div) => {
  div.addEventListener("mousemove", (e) => {
    e.target.classList.add("triggered");
  });
});

let resetFunc = () => {
  divs.forEach((div) => {
    div.classList.remove("triggered");
  });
};

let button = document.querySelector(".reset");
button.addEventListener("click", resetFunc);
