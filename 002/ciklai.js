// 1)
console.log('1)---------------------------');
for (let i = 0; i < 5; i++) {
  console.log('Labas');
}

// 2)
console.log('2)---------------------------');

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 3)
console.log('3)---------------------------');

for (let i = 0; i < 41; i += 10) {
  console.log(i);
}

// 4)
console.log('4)---------------------------');

for (let i = 49; i < 54; i++) {
  console.log(i);
}

// 5)
console.log('5)---------------------------');

for (let i = 4; i >= 0; i--) {
  console.log(i);
}

// 6)
console.log('6)---------------------------');

for (let i = 0; i < 9; i += 2) {
  console.log(i);
}

// 7)
console.log('7)---------------------------');

for (let i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 11));
}

// 8)
console.log('8)---------------------------');

let i;
while (i !== 5) {
  i = Math.floor(Math.random() * 11);
  console.log(i);
}

// 9)
console.log('9)---------------------------');

let itrRand;
let sum = 0;
while (sum < 100) {
  itrRand = Math.floor(Math.random() * 11);
  sum += itrRand
  console.log(`[${itrRand}] suma: ${sum}`);
}

// 10)
console.log('10)---------------------------');

let iRand;
let ciklai = 0;
while (iRand != 5 && iRand != 7) {
  iRand = Math.floor(Math.random() * 11);
  ciklai++;
  console.log(iRand);
}
console.log(`Ciklas prasisuko ${ciklai} kart.`);

// 11)
console.log('11)---------------------------');

let atsSk;
let suma = 0;
let cikluSk = 0;
while (cikluSk < 11 || suma < 20) {
  atsSk = Math.floor(Math.random() * 11);
  suma += atsSk;
  cikluSk++;
  console.log(`[${atsSk}] suma: ${suma}`);
}
console.log(`Ciklu sk.: ${cikluSk}.`)

// 12)
console.log('12)---------------------------');

let randNr;
let oddLoop = 0;
while (oddLoop < 3) {
  randNr = Math.floor(Math.random() * 11);
  if (randNr % 2) {
    oddLoop++;
  }
  console.log(randNr);
}

// 13)
console.log('13) a)---------------------------');

let randFirst;
let randSecond;
let spin = true;
while (spin) {
  randFirst = Math.floor(Math.random() * 11);
  randSecond = Math.floor(Math.random() * 11);
  if (randFirst === randSecond) {
    spin = false;
  }
  console.log(`${randFirst} : ${randSecond}`);
}
console.log('13) b)---------------------------');
let randomFirst;
let randomSecond;
do {
  randomFirst = Math.floor(Math.random() * 11);
  randomSecond = Math.floor(Math.random() * 11);
  console.log(`${randomFirst} : ${randomSecond}`);
} while (randomFirst !== randomSecond);

// 14)
console.log('14)---------------------------');

let firstRand;
let secondRand;
let firstSum = 0;
let secondSum = 0;
while (firstSum <= 100 || secondSum <= 100) {
  firstRand = Math.floor(Math.random() * 11);
  secondRand = Math.floor(Math.random() * 11);
  firstSum += firstRand;
  secondSum += secondRand
  console.log(`${firstRand} : ${secondRand}`);
  console.log(firstSum, secondSum);
}

// 15)
console.log('15)---------------------------');

let pirmasAts;
let antrasAts;
let ciklas = 0;
while (ciklas < 3) {
  pirmasAts = Math.floor(Math.random() * 11);
  antrasAts = Math.floor(Math.random() * 11);
  if (pirmasAts % 2) {
    ciklas++;
  }
  if (antrasAts % 2) {
    ciklas++;
  }
  console.log(`${pirmasAts} : ${antrasAts}`);
}


