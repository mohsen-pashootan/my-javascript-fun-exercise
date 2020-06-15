const clickme = document.querySelectorAll(".clickme");
let turn = 1;
let score = [0, 0];

clickme.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.innerHTML === "" && turn === 1) {
      item.innerHTML = "X";
      turn = 0;
    } else if (item.innerHTML === "" && turn === 0) {
      item.innerHTML = "O";
      turn = 1;
    }
    calculateWiner();
  });
});

function calculateWiner() {
  let winingArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  // score[0] for X player & score[1] for O player

  for (let i = 0; i < winingArr.length; i++) {
    const [a, b, c] = winingArr[i];
    if (
      clickme[a].innerHTML !== "" &&
      clickme[a].innerHTML === clickme[b].innerHTML &&
      clickme[a].innerHTML === clickme[c].innerHTML
    ) {
      document.getElementById(
        "winner"
      ).innerHTML = `Winner is ${clickme[a].innerHTML}`;
      if (clickme[a].innerHTML === "X") {
        document.getElementById(
          "Xscore"
        ).innerHTML = `Player X's Score : ${++score[0]}`;
      } else {
        document.getElementById(
          "Oscore"
        ).innerHTML = `Player O's score : ${++score[1]}`;
      }
      clickme.forEach((item) => {
        item.innerHTML = "";
      });
      return;
    }
  }
}
