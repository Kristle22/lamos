// 1)
console.log('1)---------------------------');

const textInput = document.getElementById('tekstas');
const btn = document.getElementById('button');

console.log(textInput);
console.log(btn);

btn.addEventListener('click', () => {
  console.log(textInput.value);
});

// 2)
console.log('2)---------------------------');

const para = document.getElementById('para');
console.log(para);

para.addEventListener('change', () => {
  console.log(para.value);
})

// 3)
console.log('3)---------------------------');

const radio_btns = document.querySelectorAll('.radio-btns input');
console.log(radio_btns);

radio_btns.forEach(btn => btn.addEventListener('click', () => {
  console.log(btn.value);
}));

// 4)
console.log('4)---------------------------');

const javaScript = document.getElementById('javaScript');
console.log(javaScript);

javaScript.addEventListener('change', e => {
  console.log(e.target.checked ? 'pazymeta' : 'nepazymeta');
});

// 5)
console.log('5)---------------------------');