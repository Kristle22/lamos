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

const checked = document.querySelectorAll('#checked input');
console.log(checked);

checked.forEach(ch => ch.addEventListener('change', (e) => {
  console.log(e.target.checked ? ch.value : '');
}));

// 6)
console.log('6) 1.---------------------------');

const h1 = document.getElementById('h1');
console.log(h1);

btn.addEventListener('click', () => {
  h1.innerHTML = textInput.value;
});

// 6) console.log('6) 2.---------------------------');
para.addEventListener('change', () => {
  h1.innerHTML = para.value;
});

// 6) console.log('6) 3.---------------------------');

radio_btns.forEach(btn => btn.addEventListener('click', () => {
  h1.innerHTML = btn.value;
}));

// 6) console.log('6) 4.---------------------------');

javaScript.addEventListener('click', e => {
  h1.innerHTML = e.target.checked ? 'pazymeta' : 'nepazymeta';
});

// 6) console.log('6) 5.---------------------------');

checked.forEach(ch => ch.addEventListener('change', e => {
  let text = e.target.checked ? ch.value + ' ' : '';
  h1.innerHTML += text;
}))
