var toggle;

function getBody() {
  return document.getElementsByTagName('body')[0];
}
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toggleMode() {
  const body = getBody();
  if (toggle) clearInterval(toggle);
  toggle = setInterval(function() {
    const color = randomColor();
    if (!body.style) body.style = {};
    body.style['background-color'] = color;
  }, 500);
}
function stopToggle() {
  clearInterval(toggle);
}

function reset() {
  const body = getBody();
  stopToggle();
  body.style['background-color'] = 'white';
}
function setBodyStyle(style) {
  const body = getBody();
  Object.keys(style).forEach((a) => {
    body.style[a] = style[a];
  });
}
function nightMode() {
  const style = getBody().style;
  setBodyStyle({
    'background-color': style['background-color'] === 'black' ? 'white' : 'black',
    color: style.color === 'white' ? 'black' : 'white',
  });
}
