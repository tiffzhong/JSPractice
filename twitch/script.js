const column = document.getElementsByTagName("td");
let letters = [];
function getLetters() {
  for (let i = 0; i < column.length; i++) {
    let getColors = Array.from(column).map(color => color.style.color);
    let getBackgroundColor = Array.from(column).map(
      BGcolor => BGcolor.style.backgroundColor
    );
    let tagText = Array.from(column).map(text => text.textContent);

    if (getColors[i] !== getBackgroundColor[i]) {
      letters.push(tagText[i]);
    }
  }
  return letters;
}
getLetters();
