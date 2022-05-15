function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// A. Sukurti 100 sąskaitų masyvą.

// A. 1) Sukurti produktu pavadinimu masyva.

const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];

// A. 2) Sukurti saskaitu numeriu masyva.

let saskaituNumeriai = [];

for (let i = 1; i <= 100; i++) {
  if (i < 10) {
    number = `INV00${i}`;
  } else if (i < 100) {
    number = `INV0${i}`;
  } else {
    number = `INV${i}`;
  }
  saskaituNumeriai.push(number);
}
console.log('Saskaitu numeriai:', saskaituNumeriai);


// A. 3) Sukurti atskiro product klase.

class Product {
  constructor(title) {
    this.title = title;
    this.price = (rand(1, 100)).toFixed(2);
    this.amount = rand(1, 20);
    this.total = this.price * this.amount;
  }
}

const vienaPreke = new Product(products[rand(0, 25)]);

console.log('Pirktos prekes pavyzdys:', vienaPreke);

// A. 4) Sukurti products masyvo elementus(objektus) ir sudeti i masyva.

let visiProduktai = [];

for (let i = 0; i < products.length; i++) {
  const preke = new Product(products[i]);
  visiProduktai.push(preke);
}
console.log('Visi products masyvo elementai:', visiProduktai);

// A. 5) Sukurti products random masyva ir funkcija prekiu krepseliui.

// prekiu krepselio atskiras masyvas

const pirktosPrekes = [];
let total = 0;
for (let i = 0; i < rand(1, 10); i++) {
  // pirktosPrekes.push(new Product(products[rand(0, 25)]));

  pirktosPrekes.push(visiProduktai[rand(0, 25)]);
  total += vienaPreke.total;
}
console.log('Viso prekiu pirkta uz:', total, 'Eur.');
console.log('Vienos saskaitos products masyvo elementai:', pirktosPrekes);

// funkcija atsitiktiniam prekiu indeksui gauti

// function randomInd() {
//   for (let i = 0; i < 25; i++) {
//     return rand(0, 25);
//   }
// }
// console.log(randomInd());
// console.log('RANDOM ITEM:', products[randomInd()]);

// funkcija prekiu krepseliams saskaitoj gauti

function shoppingCarts() {
  const pirktosPrekes = [];
  let prekesInd;
  for (let i = 0; i < 100; i++) {
    prekesInd = rand(0, 25);
    const vienaPreke = new Product(products[prekesInd]);
    pirktosPrekes.push(vienaPreke);
    return pirktosPrekes;
  }
}
console.log('PREKIU KREPSELIAI:', shoppingCarts());


// A. 7) Sukurti vienos saskaitos klase.

class Invoice {
  constructor(number) {
    this.number = number;
    this.products = pirktosPrekes;
    this.total = total;
    this.vat = this.total * 1.21;
    this.grandTotal = this.total + this.vat;

  }
}
const invoice = new Invoice(saskaituNumeriai[0]);

console.log('Vienos saskaitis objekto pavyzdys:', invoice);

// A. 8) Ideti i masyva 100 saskaitu objektus.

const saskaitos = [];

for (let i = 0; i < 100; i++) {
  const invoice = new Invoice(saskaituNumeriai[i]);
  saskaitos.push(invoice);
}
console.log('Saskaitu masyvas:', saskaitos);

