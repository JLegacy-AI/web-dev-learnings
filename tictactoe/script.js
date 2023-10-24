document.addEventListener("DOMContentLoaded", function () {
  let playerTurn = 0;
  const elements = document.querySelectorAll(".tictac-box");

  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      const boxNumber = e.target.dataset.number;
      const clickedElement = elements[boxNumber];
      if (clickedElement.getAttribute("data-clicked") === "true") return;
      else {
        clickedElement.setAttribute("data-clicked", "true");
        if (playerTurn === 0)
          clickedElement.innerHTML = `<i class="bi bi-circle text-primary"></i>`;
        else {
          clickedElement.innerHTML = `<i class="bi bi-x fs-3 text-danger"></i>`;
        }
        playerTurn = playerTurn === 0 ? 1 : 0;
      }
    });
  });
});
