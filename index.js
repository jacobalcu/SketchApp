let outerDiv = document.getElementById("outer");

for (let i = 0; i < 16 * 16; i++) {
  let div = document.createElement("div");
  div.classList.add("inner");
  outerDiv.appendChild(div);
}
