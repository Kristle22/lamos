function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1)
console.log('1)---------------------------');
const piniginesIlgis = rand(10, 30);
const pinigine = [];
let piniguSuma = 0;
let banknotai = 0;

const popPinigai = [];
const monetos = [];

for (let i = 0; i < piniginesIlgis; i++) {
  pinigine.push(rand(0, 10));
  piniguSuma += pinigine[i];
  if (pinigine[i] > 2) {
    banknotai += pinigine[i];
    popPinigai.push(pinigine[i]);
  } else {
    monetos.push(pinigine[i]);
    pinigine[i] = 0;
    console.log('Cikle: ', monetos);
  }
}
console.log(pinigine);

// 2)
console.log('2)---------------------------');
console.log(`Pinigineje siuo metu yra ${piniguSuma} Eur.`);

// 3)
console.log('3)---------------------------');
console.log(`Pinigineje siuo metu yra ${banknotai} Eur. popieriniu pinigu.`);

// 4)
console.log('4)---------------------------');
console.log(`Dabar pinigineje guli tiktai banknotai nuo 3 Eur.:${pinigine}`);

// 5)
console.log('5)---------------------------');

let maxEuru = 0;
let kiekMax = 0;

for (let i = 0; i < pinigine.length; i++) {
  maxEuru = Math.max(...pinigine);

  if (pinigine[i] === maxEuru) {
    kiekMax++;
  }
}
console.log(maxEuru, kiekMax, pinigine);
console.log(`Pinigineje didziausiu banknotu po ${maxEuru} Eur. yra ${kiekMax} vnt.`);

// 6)

console.log('6)---------------------------');

for (let i = 0; i < pinigine.length; i++) {
  if (pinigine[i] === 0) {
    pinigine[i] = `[${i}]`
  }
}
console.log('Masyvo elementai su 0 reiksmiu indeksais: ', pinigine);

// 7)
console.log('7)---------------------------');

while (pinigine.length < 30) {
  pinigine.push(rand(0, 10));
}
console.log('Masyvo ', pinigine, 'ilgis yra ', pinigine.length);

// 8)
console.log('8)---------------------------');
console.log(`Monetu reiksmes masyve yra: ${monetos}. Popieriniu pinigu reiksmes masyve yra: ${popPinigai}.`);

// 9)
console.log('9)---------------------------');

const pinigineSuSkyreliais = [];

pinigineSuSkyreliais.push(popPinigai);
pinigineSuSkyreliais.push(monetos);

console.log('Pinigineje', pinigineSuSkyreliais, ' yra 2 skyreliai: popieriniu pinigu: ', popPinigai, ' ir monetu: ', monetos);

// 10)
console.log('10)---------------------------');

const korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

pinigineSuSkyreliais.push(korteles);

console.log('Dabar pinigineje ', pinigineSuSkyreliais, ' yra 3-cias korteliu skyrelis: ', korteles);

// 11)
console.log('11)---------------------------');
korteles.sort();
console.log('Dabar pinigineje su skyreliais isrusiuotos korteles: ', korteles);

// 12)
console.log('12)---------------------------');
const bankoKortele1 = 'MasterCard';
const bankoKortele2 = 'Visa';
let masterCount = 0;
let visaCount = 0;

do {
  for (let i = 0; i < rand(0, 1); i++) {
    korteles.push(bankoKortele1);
    masterCount++;
  }
  for (let i = 0; i < rand(0, 1); i++) {
    korteles.push(bankoKortele2);
    visaCount++;
  }
} while (korteles.length < 20);

console.log('Pridejus banko korteliu, viso skyrelyje yra 20 korteliu: ', korteles);

// 13)
console.log('13)---------------------------');

console.log(`Kortelius skyriuje yra ${masterCount} vnt. MasterCard ir ${visaCount} vnt. Visa korteliu.`);

// 14)
console.log('14)---------------------------');
let lotBilietai = [];
pinigineSuSkyreliais.push(lotBilietai);

let bilietas;
let laiminguSk = 0;
let laimingasBil;
for (let i = 0; i < 10; i++) {
  bilietas = rand(1000000000, 9999999999);
  lotBilietai.push(bilietas);
  if (bilietas % 77 === 0) {
    laiminguSk++;
    laimingasBil = bilietas;
    console.log('Jus laimejote! Laimingo bilieto Nr.: ', laimingasBil);
  }
}
console.log('Dabar pinigineje yra loterijos bilietu skyrelis: ', lotBilietai);

// 15)
console.log('15)---------------------------');

lotBilietai.sort((a, b) => b - a);

console.log('Dabar pinigineje bilietai isrusiuoti nuo didziausio iki maziausio: ', lotBilietai);

// 16)
console.log('16)---------------------------');
let kupiura;
let suma500 = 0;
do {
  kupiura = rand(3, 10);
  suma500 += kupiura;
  popPinigai.push(kupiura);
  console.log('Kupiura: ', kupiura);
} while (suma500 < 500);


console.log('I pinigine ideta ', suma500, 'Eur. suma smulkiom kupiurom.');

// 17)
console.log('17)---------------------------');

console.log('Is 10 turimu bilietu: ', lotBilietai, 'pinigineje buvo', laiminguSk, 'laimigas bilietas: ', laimingasBil);

// 18)
console.log('18)---------------------------');

const nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
pinigineSuSkyreliais.push(nuotraukos);

nuotraukos.sort((a, b) => a.length - b.length);

console.log('Pinigineje: ', pinigineSuSkyreliais, 'nuotrauku skyriuje sudetos pagal zodziu ilgi isrusiuotos nuotraukos:', nuotraukos);