// 1)
console.log('1)---------------------------');

const textInput = document.getElementsByName('tekstas');
const btn = document.getElementsByTagName('button');

console.log(textInput);
console.log(btn);

btn.addEventListener('click', () => {
  console.log(textInput.value);
});