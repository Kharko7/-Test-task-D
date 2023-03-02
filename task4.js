const blocksName = ['sideBar', 'headerLeft', 'headerRight', 'mainContent', 'footerLeft', 'footerRight'];
const colors = ['red', 'blue', 'green', 'darkmagenta', 'orange', 'gold', 'yellow', 'aquamarine', 'beige', 'aqua', 'silver',];

const getColor = (color) => {
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex].toLowerCase() === color ? getColor(color) : colors[randomIndex];
};

const changeColorAndCountClicks = (e) => {
  const element = e.target;

  const newColor = getColor(element.style.backgroundColor);
  element.style.backgroundColor = newColor;

  counterClicks[element.id]
    = counterClicks[element.id]
      ? counterClicks[element.id] + 1
      : 1;

  element.textContent = counterClicks[element.id];
};

const counterClicks = {};
const elements = {};

blocksName.forEach((name) => {
  elements[name] = document.createElement('div');

  elements[name].setAttribute("id", name);
  elements[name].classList.add(`block-${name}`);
  elements[name].textContent = 0;
  elements[name].addEventListener('click', changeColorAndCountClicks);
});

const blocks = document.createElement('div');
const mainBlock = document.createElement('div');
const header = document.createElement('div');
const footer = document.createElement('div');

blocks.classList.add("blocks");
mainBlock.classList.add("mainBlock");
header.classList.add("header");
footer.classList.add("footer");

footer.append(elements.footerLeft, elements.footerRight);
header.append(elements.headerLeft, elements.headerRight);
mainBlock.append(header, elements.mainContent, footer);
blocks.append(elements.sideBar, mainBlock);
document.body.appendChild(blocks);