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
  console.log(e.target.checked ? ch.value : e.target.ch.value);
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
  e.target.checked ? h1.innerHTML += ch.value + ' ' : e.target.ch.value;
}));

// 7) console.log('7)---------------------------');

const h3 = document.createElement('h3');
const arr = document.getElementById('arr');
document.body.insertBefore(h3, arr);
h3.style.color = 'orange';
console.log(h3, arr);

// 7)
console.log('7) 1.---------------------------');
btn.addEventListener('click', () => {
  h3.innerHTML = textInput.value;
})

// 7) 
console.log('7) 2.---------------------------');
para.addEventListener('change', (e) => {
  h3.innerHTML = e.target.value
});

// 7) 
console.log('7) 3.---------------------------');
radio_btns.forEach(btn => {
  btn.addEventListener('change', (e) => {
    h3.innerHTML = e.target.value;
  })
})

// 7) 
console.log('7) 4.---------------------------');
javaScript.addEventListener('change', () => {
  h3.innerHTML = javaScript.checked ? 'pazymeta' : 'nepazymeta';
})

// 7) 
console.log('7) 5.---------------------------');
checked.forEach(ch => ch.addEventListener('change', (e) => {
  e.target.checked ? h3.innerHTML += ch.value + ' ' : e.target.value = '';
}));


// )8
console.log('8) 1.---------------------------');
const inputReiksmes = []
btn.addEventListener('click', () => {
  inputReiksmes.push(textInput.value);
})
console.log(inputReiksmes);

// 8) 
console.log('8) 2.---------------------------');
const selectReiksmes = [];
para.addEventListener('change', e => {
  selectReiksmes.push(e.target.value);
})
console.log(selectReiksmes);

// 8) 
console.log('8) 3.---------------------------');
const radioReiksmes = [];
radio_btns.forEach(btn => {
  btn.addEventListener('change', () => {
    radioReiksmes.push(btn.value);
  })
})
console.log(radioReiksmes);

// 8) 
console.log('8) 4.---------------------------');
const checkOrNot = [];
javaScript.addEventListener('change', e => {
  checkOrNot.push(e.target.checked ? 'pazymeta' : 'nepazymeta');
})
console.log(checkOrNot);

// 8) 
console.log('8) 5.---------------------------');
const chboxReiksmes = [];
checked.forEach(ch => ch.addEventListener('change', e => {
  chboxReiksmes.push(e.target.checked ? ch.value : ch.value = '');
}))
console.log(chboxReiksmes);

// 9) 
console.log('9)---------------------------');
const results = document.getElementById('results');

const go_btn = document.getElementById('go-btn');
console.log(go_btn, results);

// 9) 
console.log('9) 1.---------------------------');

go_btn.addEventListener('click', () => {
  for (let i = 0;i < inputReiksmes.length;i++) {
    const h3arr = document.createElement('h3');
    h3arr.innerHTML += inputReiksmes[i];
    results.appendChild(h3arr);
  }
  console.log(inputReiksmes);
})

// 9) 
console.log('9) 2.---------------------------');

go_btn.addEventListener('click', () => {
  for (let i = 0;i < selectReiksmes.length;i++) {
    const h3ar2 = document.createElement('h3');
    h3ar2.innerHTML += selectReiksmes[i];
    results.appendChild(h3ar2);
    console.log(selectReiksmes);
  };
})

// 9) 
console.log('9) 3.---------------------------');

go_btn.addEventListener('click', () => {
  const list = radioReiksmes.map(el => `<h3>${el}</h3>`).join('');
  results.innerHTML = list;
  console.log(radioReiksmes);
})

// 9) 
console.log('9) 4.---------------------------');

go_btn.addEventListener('click', () => {
  const mark = checkOrNot.map(el => `<h3>${el}</h3>`).join('');
  results.innerHTML = mark;
  console.log(checkOrNot);
})

// 9) 
console.log('9) 5.---------------------------');
go_btn.addEventListener('click', () => {
  results.innerHTML = chboxReiksmes.map(el => `<h3>${el}</h3>`).join('');
  console.log(chboxReiksmes);
})

// 10) 
console.log('10)---------------------------');
const reset = document.getElementById('delete');
console.log(reset);

reset.addEventListener('click', () => {
  const inputReiksmes = [];
  const selectReiksmes = [];
  const radioReiksmes = [];
  const checkOrNot = [];
  const chboxReiksmes = [];
  console.log(inputReiksmes);
  console.log(selectReiksmes);
  console.log(radioReiksmes);
  conso
  le.log(checkOrNot);
  console.log(chboxReiksmes);
})

// 11) 
console.log('11)---------------------------');

const clear = document.getElementById('clear');
console.log(clear);

const h3Tags = document.querySelectorAll('h3');
console.log(h3Tags);

clear.addEventListener('click', () => {
  h3Tags.forEach(el => el.remove());
})

// 12) 
console.log('12)---------------------------');

const json = document.getElementById('json');
console.log(json);

json.addEventListener('click', () => {
  const arrObject = {
    inputArray: inputReiksmes,
    selectArray: selectReiksmes,
    radioArray: radioReiksmes,
    ckeckOrNotArray: checkOrNot,
    ckboxArray: chboxReiksmes
  }
  console.log(arrObject);
  const jsonObject = JSON.stringify(arrObject);
  console.log(jsonObject);
  const parseObject = JSON.parse(jsonObject);
  console.log(parseObject);

  const data = document.createElement('div');
  data.innerHTML = Object.values(parseObject).map(val => `<h3>${val}</h3>`).join('');
  document.body.appendChild(data);
});