// 1)
console.log('1) Atskiri elementai---------------------------');
// a) Tamsiai žaliai nuspalvinti h1 tagą;

const h1 = document.querySelector('h1');
h1.style.color = 'darkgreen';

// b)Tagui i pridėti klasę small;

const i = document.querySelector('i');
i.classList.add('small');
console.log(i);

// c)Iš tago h1 pašalinti klasę main;

h1.classList.remove('main');

// d)Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;

const h2first = document.querySelector('h1 + h2');
console.log(h2first);

h2first.classList.add('first');
h2first.classList.remove('main');

// e)Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

const spanFirst = document.querySelector('h2 span');
console.log(spanFirst);

spanFirst.style.fontSize = '10px';
spanFirst.style.color = 'gray';

// 2)
console.log('2) Elemetų grupės---------------------------');
// a) Suskaičiuoti kiek yra h2 tagų;

const h2tags = document.querySelectorAll('h2');
console.log(h2tags, 'Tagu skaicius tekste:', h2tags.length);

// b) Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first;

const h2noFirst = [...h2tags].filter(element => !element.classList.contains('first'));
console.log(h2noFirst, 'Tagu be FIRST klases skaicius tekste', h2noFirst.length);

// c) Visus h2 tagus nuspalvinti šviesiai mėlynai

h2tags.forEach(element => element.style.color = 'lightblue');

// d) Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;

const priceTags = document.querySelectorAll('div.prices h2');
console.log(priceTags);

priceTags.forEach(element => element.classList.add('price-tag'));


// e) Pabraukti visus tagus su klase new;

const classNew = document.querySelectorAll('.new');
console.log(classNew);

classNew.forEach(element => element.style.textDecoration = 'underline');

// f) Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

const gyvKategorijos = document.querySelectorAll('ul');
console.log(gyvKategorijos, 'Gyvunu kategorijos yra:', gyvKategorijos.length);

const zirafos = document.querySelector('#zirafos').children;

const zirafuSeima = [...zirafos].filter(item => !item.classList.contains('like-button'));

console.log('Yra', zirafuSeima.length, 'zirafos', zirafuSeima);

// g) Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

gyvKategorijos.forEach(element =>
  element.style.border = '3px solid greenyellow',
);
gyvKategorijos
  .forEach(element =>
    element.style.padding = '15px 50px');
// h) Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

const visiGyvunai = document.querySelectorAll('ul li');
const naujiGyvunai = [...visiGyvunai].filter(item => item.classList.contains('new'));

console.log('Yra', naujiGyvunai.length, 'nauji gyvunai', naujiGyvunai);

// i) Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje
// const kategorijos = [...gyvKategorijos];
// for (i = 0; i < kategorijos.length; i++) {

// }

// console.log(kategorijos.length);

// 3)
console.log('3) Elementų events---------------------------');
// a) Padaryti tai ką liepia mygtukai Header1 sekcijoje;
const btn_color = document.querySelector('#h1-color');
const btn_font = document.querySelector('#h1-font');

console.log(btn_color, btn_font);
console.log(h1);

btn_color.addEventListener('click', () => {
  h1.style.color = 'blue';
})
btn_font.addEventListener('click', () => {
  h1.style.fontSize = '10px';
})

// b) Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;

console.log(i);

i.addEventListener('click', e => {
  e.target.style.fontWeight = 'bold';
  e.target.style.fontSize = '20px';
});

// c) Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

const prices = document.querySelector('.prices');
console.log(prices);

prices.addEventListener('click', e => {
  e.currentTarget.style.backgroundColor = prices.style.backgroundColor == 'gray' ? 'white' : 'gray';
});

// d) Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

const contacts = document.querySelector('#contacts');

contacts.addEventListener('click', (e) => {
  e.target.style.color = 'orange';
});

// e) Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;

const largerFont = document.querySelector('#contacts u');
console.log(largerFont);

largerFont.addEventListener('click', () => {
  contacts.style.fontSize = '20px';
})

// f) Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos;

const x = document.querySelector('#contacts b');
console.log(x);

x.addEventListener('click', () => {
  contacts.removeAttribute('style');
  // contacts.style.removeProperty('color');
  // contacts.style.removeProperty('font-size');
  // contacts.style.color = null;
  // contacts.style.fontSize = null;
})

// g) Padaryti tai ką liepia mygtukai Header2 sekcijoje;

const color_back = document.querySelector('#h1-color-back');
const font_back = document.querySelector('#h1-font-back');
console.log(font_back);

color_back.addEventListener('click', () => {
  h1.style.color = 'darkgreen';
});
font_back.addEventListener('click', () => {
  h1.style.fontSize = '32px';
});

// 4)
console.log('4) Elementų grupių events---------------------------');
// a) Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai; 

const newAnimals = document.querySelectorAll('li.new')
console.log(newAnimals);

newAnimals.forEach(animal => {
  animal.addEventListener('dblclick', e => {
    e.target.style.color = 'red';
  });
});

// b) Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti;

const tikGyvunai = document.querySelectorAll('ul li:nth-child(n+2)');
console.log(tikGyvunai);

tikGyvunai.forEach(element => {
  element.addEventListener('click', e => {
    e.target.style.fontSize = '130%';
  });
});

// c) Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;

const patinka = document.querySelectorAll('.like-button');
console.log(patinka);

patinka.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.add('like');
  });
});

// 5)
console.log('5) Dinaminis elementų kūrimas---------------------------');
// a) Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

console.log(prices);

const newh2 = document.createElement('h2');
// const newPrice = document.createTextNode('Senjorai tik: 1.99 eur');
// newh2.appendChild(newPrice);
newh2.innerText = 'Senjorai tik: 1.99 eur';

prices.appendChild(newh2);

// b) Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

const newPrice = document.createElement('h2');
newPrice.innerText = 'Senjorų grupė iki 10: tik 5.99 eur';
prices.appendChild(newPrice);

console.log(newPrice);
newPrice.classList.add('new');
newPrice.addEventListener('click', e => {
  e.target.style.color = 'green';
})


// c) Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like;


console.log(gyvKategorijos);

gyvKategorijos.forEach(element => {
  const unlike = document.createElement('li');
  unlike.innerText = 'NEPATINKA';
  element.insertBefore(unlike, element.children[1]);
});

const nepatinka = document.querySelectorAll('ul li:nth-child(2)');
console.log(nepatinka);

nepatinka.forEach(elm => {
  elm.addEventListener('click', () => {
    elm.parentElement.classList.remove('like');
  });
});

// d) Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta;

const header3 = document.createElement('legend');
const mygtukas1 = document.createElement('button');
const mygtukas2 = document.createElement('button');

header3.innerText = 'HEADER 3'
mygtukas1.innerText = 'Pabraukti H1 tagą';
mygtukas2.innerText = 'Nepabraukti H1 tagą';

const fieldset = document.createElement('fieldset');

fieldset.appendChild(header3);
fieldset.appendChild(mygtukas1);
fieldset.appendChild(mygtukas2);

document.body.insertBefore(fieldset, contacts);

console.log(fieldset);

mygtukas1.addEventListener('click', () => {
  h1.style.textDecoration = 'underline';
});

mygtukas2.addEventListener('click', () => {
  h1.style.textDecoration = 'none';
});




