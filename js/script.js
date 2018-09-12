const secretCode = 'finmavis';
const pressed = [];

window.addEventListener('keyup', (e) => {
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length + 1);
  pressed.push(e.key);
  if(pressed.join('').includes(secretCode)){
    cornify_add();
  }
  // console.log(pressed);
});