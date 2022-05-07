function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1)
console.log('1)---------------------------');
let skaicius1 = rand(5, 25);
let skaicius2 = rand(5, 25);
let skaicius3 = rand(5, 25);


// A.
let suma = skaicius1 + skaicius2 + skaicius3;

console.log(suma);

// B.
let skSeka = ' ' + skaicius1 + skaicius2 + skaicius3

console.log(skSeka);

// C.
let skaiciai = skaicius1 + ' ' + skaicius2 + ' ' + skaicius3;

console.log(skaiciai);

// D.
let skIrSuma = skaiciai + ' ' + suma;

console.log(skIrSuma);

// 2)
console.log('2)---------------------------');
let random = rand(5, 10);

console.log(random);

// 3)
console.log('3)---------------------------');

let greeting = 'Labas';
let i = 0;
while (i < 5) {
  i++;
  console.log(greeting);
}

for (let i = 0; i < 5; i++) {
  console.log(greeting);
}

// 4)
console.log('4)---------------------------');

let itr = 0;
while (itr < 7) {
  itr++;
  console.log(random);
}

// 5)
console.log('5)---------------------------');

for (let i = 0; i < random; i++) {
  console.log(random);
}

// 6)
console.log('6)---------------------------');

let j = 0;
while (j < random && random > 7) {
  j++;
  console.log(random);
}

// 7)
console.log('7)---------------------------');

let randNumb;
let randSum = 0;
let numbers = '';
let numbAndSum;

for (let i = 0; i < 5; i++) {
  randNumb = rand(10, 20);
  console.log(randNumb);

  randSum += randNumb;
  numbers += randNumb + ' ';
}
numbAndSum = numbers + randSum;

console.log('Suma: ', randSum);
console.log('Skaiciai: ', numbers);
console.log('Skaiciai ir suma: ', numbAndSum);

// 8)
console.log('8) a)---------------------------');

// let randomNum;
// let iter = 0;
// while (true) {
//   iter++;
//   if (randomNum < 12) {
//     break;
//   }
//   randomNum = rand(10, 25);
//   console.log(randomNum);
// }
console.log('8) b)---------------------------');

let randomNumb;
let count = 0;
let SumBelow18 = 0;
let rejected = 0;
let oddNums = 0;
let evenNums = 0;
let loopCount = 0;

for (i = 0; ; i++) {
  if (randomNumb < 12) {
    loopCount++;
    console.log(`[${loopCount}] loopCount is over.`)
    break;
  }
  count++;
  randomNumb = rand(10, 25);
  console.log(randomNumb);

  if (randomNumb < 18) {
    SumBelow18 += randomNumb;
  }
  if (randomNumb > 18) {
    rejected++;
  }
  if (randomNumb % 2) {
    oddNums++
  } else {
    evenNums++;
  }
  while (count <= 20) {
    count++;
    randomNumb = rand(10, 25);
    console.log(randomNumb);
    if (randomNumb < 12) {
      loopCount++;
      console.log(`[${loopCount}] loopCount is over.`)
    }
  }
}
console.log(`Ciklas prasisuko ${count} kart.`);
console.log(`Ne didesniu uz 18 skaiciu suma: ${SumBelow18}`);
console.log(`Atmestu reiksmiu kiekis: ${rejected}`);
console.log(`Cikle yra: ${oddNums} nelyg. ir ${evenNums} lyg. skaiciai`);
console.log(`Buvo atlikta ${loopCount} ciklo pakartojimu.`);

// 9)
console.log('9)---------------------------');

let randomNumber;
let iterator = 0;
let outerCount = 0;
let innerCount = 0;
let loopCounts;
let count5 = 0;

while (randomNumber != 5 || count5 != 3) {
  iterator++;
  outerCount++;
  randomNumber = rand(5, 10);
  console.log(randomNumber);

  if (randomNumber == 5) {
    count5++;
    console.log('The [', count5, '] cycle of-5 is over.');
  }

  while (iterator <= randomNumber) {
    iterator++;
    innerCount++;
    // randomNumber = rand(5, 10);
    console.log('Inner loop gnrNumbers:', randomNumber);
  }
  loopCounts = outerCount + innerCount;

}

console.log(`Isorinis ciklas kartojosi ${outerCount} kart. Vidinis ciklas kartojosi ${innerCount} kart.`)
console.log(`Abu ciklai bendrai padare ${loopCounts} iterac.`);

console.log('10 ---------------------------');

let taskaiPetro;
let taskaiKazio;
let rezPetro = 0;
let rezKazio = 0;
let laimetojas;
while (rezPetro < 222 && rezKazio < 222) {
  taskaiPetro = rand(10, 20);
  taskaiKazio = rand(5, 25);
  rezPetro += taskaiPetro;
  rezKazio += taskaiKazio;
  if (rezPetro >= 222) {
    laimetojas = 'Petras';
  } else {
    laimetojas = 'Kazys';
  }
  console.log(`Petras: ${taskaiPetro} / Kazys: ${taskaiKazio}`);
}

console.log(`Petro rez.: ${rezPetro} / Kazio rez.: ${rezKazio}`)
console.log(`Partija laimejo ${laimetojas}.`)


