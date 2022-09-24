const area = document.querySelector(".area");
let statusPlayer = "x";

area.addEventListener("click", (e) => {
  let hut = e.path[0];

  if (
    hut.innerHTML === `<i class="fas fa-times" id="cross" style="display: flex;"></i>` ||
    hut.innerHTML === `<i class="far fa-circle" id="circle" style="display: flex;"></i>` ||
    e.target.id === "cross" ||
    e.target.id === "circle" ||
    e.target.id === ""
  ) {
    return;
  } else {
    switch (statusPlayer) {
      case "x":
        hut.innerHTML = `<i class="fas fa-times" id="cross" style="display: flex;"></i>`;
        statusPlayer = "o";
        break;
      case "o":
        hut.innerHTML = `<i class="far fa-circle" id="circle" style="display: flex;"></i>`;
        statusPlayer = "x";
      default:
        null;
        break;
    }
  }
});
