function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1)
console.log('1)---------------------------');

const masyvas = [];
let reiksme;
let daugiauUz10 = 0;
let maxReiksme = 0;
let index;
let sumaPoriniu = 0;

for (let i = 0; i < 30; i++) {
  reiksme = rand(5, 25);
  masyvas.push(reiksme);
  if (reiksme > 10) {
    daugiauUz10++;
  }
  if (reiksme > maxReiksme) {
    maxReiksme = reiksme;
    index = i;
  }
  if (i % 2 === 0) {
    sumaPoriniu += reiksme;
    console.log('Indeksas:', i, 'Reiksme:', reiksme);
  }
}

console.log(masyvas);

// 2)
console.log('2) a)---------------------------');
console.log('reiksmiu daugiau uz 10:', daugiauUz10);

// 2)
console.log('2) b)---------------------------');

console.log('Didziausia reiksme yra:', maxReiksme, 'kurios indeksas yra:', index);

// 2)
console.log('2) c)---------------------------');
console.log('Poriniu indeksu reiksmiu suma:', sumaPoriniu);

// 2)
console.log('2) d)---------------------------');

const naujasMasyvas = [];

for (let i = 0; i < masyvas.length; i++) {
  naujasMasyvas.push(masyvas[i] - i);
}
console.log('Naujas masyvas:', naujasMasyvas);

// 2)
console.log('2) e)---------------------------');
let papReiksmes;
for (let i = 0; i < 10; i++) {
  papReiksmes = rand(5, 25);
  masyvas.push(papReiksmes);
}
console.log('Papildytas masyvas:', masyvas);

// 2)
console.log('2) f)---------------------------');

const pirmasMasyvas = [];
const antrasMasyvas = [];
let nelygIndReiksmes;
let lygIndReiksmes;
let count10 = 0;
let ind10;

for (let i = 0; i < masyvas.length; i++) {
  if (i % 2) {
    nelygIndReiksmes = masyvas[i];
    // console.log(`[${i}]`, nelygIndReiksmes);
    pirmasMasyvas.push(nelygIndReiksmes);
  } else {
    lygIndReiksmes = masyvas[i];
    // console.log(`[${i}]`, lygIndReiksmes);
    antrasMasyvas.push(lygIndReiksmes);
  }
  if (i % 2 === 0 && masyvas[i] > 15) {
    masyvas[i] = 0;
    console.log(`[${i}]`, masyvas[i]);
  }
  if (masyvas[i] > 10) {
    count10++;
  }
  if (count10 === 1) {
    ind10 = i;
    break;
  }
}

console.log('Nelyginiu indeksu reiksmiu masyvas:', pirmasMasyvas);
console.log('Lyginiu indeksu reiksmiu masyvas:', antrasMasyvas);

// 2)
console.log('2) g)---------------------------');

console.log('Masyvas su poriniu indeksu reiksmem ne didesnem nei 15:', masyvas);

// 2)
console.log('2) h)---------------------------');

console.log('Pirmojo elemento, kuris yra didesnis uz 10 indeksas yra:', ind10);

// 3)
console.log('3)---------------------------');

const raidziuMasyvas = ['A', 'B', 'C', 'D'];
const atsraidziuMasyvas = [];
let raidReiksme;
let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

for (let i = 0; i < 200; i++) {
  raidReiksme = raidziuMasyvas[rand(0, 3)];
  atsraidziuMasyvas.push(raidReiksme);
  if (atsraidziuMasyvas[i] === 'A') {
    countA++;
  } else if (atsraidziuMasyvas[i] === 'B') {
    countB++;
  } else if (atsraidziuMasyvas[i] === 'C') {
    countC++;
  } else {
    countD++;
  }
}

console.log('Masyve:', atsraidziuMasyvas, `raide A kartojasi ${countA} kartu; raide B: ${countB} kartu, raide C ${countC} kartu ir raide D ${countD} kartu.`);

// 4)
console.log('4)---------------------------');

let pirmasRaidMasyvas = [];
let antrasRaidMasyvas = [];
let treciasRaidMasyvas = [];
let raideMas1;
let raideMas2;
let raideMas3;


for (let i = 0; i < 200; i++) {
  raideMas1 = raidziuMasyvas[rand(0, 3)];
  raideMas2 = raidziuMasyvas[rand(0, 3)];
  raideMas3 = raidziuMasyvas[rand(0, 3)];
  pirmasRaidMasyvas.push(raideMas1);
  antrasRaidMasyvas.push(raideMas2);
  treciasRaidMasyvas.push(raideMas3);
}

let mixMasyvas = [];
let raideMix;
const unKombinacijos = [];
let kombiCount = 0;

for (let i = 0; i < 200; i++) {
  raideMix = pirmasRaidMasyvas[i] + antrasRaidMasyvas[i] + treciasRaidMasyvas[i];

  mixMasyvas.push(raideMix);
  if (unKombinacijos.indexOf(mixMasyvas[i]) === -1) {
    unKombinacijos.push(raideMix);
    kombiCount++;
  }
  // console.log(mixMasyvas[i]);
}
console.log(pirmasRaidMasyvas, antrasRaidMasyvas, treciasRaidMasyvas);
console.log('Triju masyvu miksas:', mixMasyvas);
console.log('Unikalios kombinacijos:', unKombinacijos, 'unikaliu reiksmiu gavosi:', kombiCount);

// 5)
console.log('5)---------------------------');

const skaiciuMasyvas1 = [];
const skaiciuMasyvas2 = [];
let atsSkaicius1;
let atsSkaicius2;

for (let i = 0; i < 100; i++) {
  atsSkaicius1 = rand(100, 999);
  atsSkaicius2 = rand(100, 999);

  if (skaiciuMasyvas1.indexOf(atsSkaicius1) === -1) {
    skaiciuMasyvas1.push(atsSkaicius1);
  }
  if (skaiciuMasyvas2.indexOf(atsSkaicius2) === -1) {
    skaiciuMasyvas2.push(atsSkaicius2);
  }
}

do {
  atsSkaicius1 = rand(100, 999);
  atsSkaicius2 = rand(100, 999);

  if (skaiciuMasyvas1.indexOf(atsSkaicius1) === -1 && skaiciuMasyvas1.length < 100) {
    skaiciuMasyvas1.push(atsSkaicius1);
  }
  if (skaiciuMasyvas2.indexOf(atsSkaicius2) === -1 && skaiciuMasyvas2.length < 100) {
    skaiciuMasyvas2.push(atsSkaicius2);
  }
} while (skaiciuMasyvas1.length < 100 || skaiciuMasyvas2.length < 100);

console.log('Pirmas masyvas:', skaiciuMasyvas1, 'Antras masyvas:', skaiciuMasyvas2);
console.log(atsSkaicius1);

// 6)
console.log('6)---------------------------');

const unikPirmoMasReiksmes = [];

for (let i = 0; i < 100; i++) {
  if (skaiciuMasyvas2.indexOf(skaiciuMasyvas1[i]) === -1) {
    unikPirmoMasReiksmes.push(skaiciuMasyvas1[i]);
  }
}
console.log('Unikalios pirmo masyvo reiksmes:', unikPirmoMasReiksmes);

// 7)
console.log('7)---------------------------');

const dublikatai = [];

for (let i = 0; i < 100; i++) {
  if (skaiciuMasyvas2.indexOf(skaiciuMasyvas1[i]) > 0) {
    dublikatai.push(skaiciuMasyvas1[i]);
  }
}
console.log('Dublikatai:', dublikatai);

// 8)
console.log('8)---------------------------');

const mixMasyvas2 = [];

for (let i = 0; i < 100; i++) {
  mixMasyvas2[skaiciuMasyvas1[i]] = skaiciuMasyvas2[i];
}
console.log('Masyvas tusciais indeksais:', mixMasyvas2);


// 9)
console.log('9)---------------------------');

const skMasyvas = [rand(5, 25), rand(5, 25)];

for (let i = 2; i < 10; i++) {
  skMasyvas.push(skMasyvas[i - 2] + skMasyvas[i - 1]);
}
console.log('Dvieju skaiciu sumu masyvas:', skMasyvas);









