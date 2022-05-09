function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1)
console.log('1)---------------------------');


let skaicius1 = rand(0, 4);
let skaicius2 = rand(0, 4);
let result;

if (skaicius1 > skaicius2) {
  result = skaicius1 / skaicius2
} else if (skaicius2 > skaicius1) {
  result = skaicius2 / skaicius1
} else {
  console.log('Abu skaiciai yra lygus.');
}

console.log(skaicius1, skaicius2, result);

// 2.
console.log('2)---------------------------');

let sk1 = rand(0, 25);
let sk2 = rand(0, 25);
let sk3 = rand(0, 25);

if (sk1 > sk2 && sk1 < sk3 || sk1 > sk3 && sk1 < sk2) {
  console.log(sk1);
} else if (sk2 > sk1 && sk2 < sk3 || sk2 > sk3 && sk2 < sk1) {
  console.log(sk2);
} else if (sk3 > sk1 && sk3 < sk2 || sk3 < sk1 && sk3 > sk2) {
  console.log(sk3);
} else {
  console.log('Maziausiai du skaiciai yra lygus.')
}
console.log(`Duoti skaiciai: ${sk1}, ${sk2}, ${sk3}`);

// 3)
console.log('3)---------------------------');


let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);
let result3;

if ((a + b) > c || (a + c) > b || (b + c) > a) {
  result3 = 'Trikampi sudaryti galima';
} else {
  result3 = 'Trikampio sudaryti negalima';
}

console.log(a, b, c, result3);

// 4)
console.log('4) A)---------------------------');

// a)
let number1 = rand(0, 2);
let number2 = rand(0, 2);
let number3 = rand(0, 2);
let number4 = rand(0, 2);
let count0 = 0;
let count1 = 0;
let count2 = 0;

if (number1 === 0) {
  count0++;
} else if (number1 === 1) {
  count1++;
} else {
  count2++;
}
if (number2 === 0) {
  count0++;
} else if (number2 === 1) {
  count1++;
} else {
  count2++;
}
if (number3 === 0) {
  count0++;
} else if (number3 === 1) {
  count1++;
} else {
  count2++;
}
if (number4 === 0) {
  count0++;
} else if (number4 === 1) {
  count1++;
} else {
  count2++;
}
console.log(number1, number2, number3, number4);

console.log('nuliu:', count0, 'vienetu:', count1, 'dvejetu:', count2);

console.log('4) B)---------------------------');

let numArr = [number1, number2, number3, number4];
let count_0 = 0;
let count_1 = 0;
let count_2 = 0;

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] == 0 || numArr[i] == 0 || numArr[i] == 0 || numArr[i] == 0) {
    count_0++;
  } else if (numArr[i] == 1 || numArr[i] == 1 || numArr[i] == 1 || numArr[i] == 1) {
    count_1++;
  } else {
    count_2++;
  }

}
console.log(numArr);

console.log('nuliu:', count_0, 'vienetu:', count_1, 'dvejetu:', count_2);

console.log('4) C)---------------------------');

const counts = {};

for (const num of numArr) {
  if (counts[num]) {
    counts[num]++;
  } else {
    counts[num] = 1;
  }
}
console.log(counts);

// 5)
console.log('5) A)---------------------------');
let randNum1 = rand(-10, 10);
let randNum2 = rand(-10, 10);
let randNum3 = rand(-10, 10);

if (randNum1 < 0) {
  randNum1 = `+${randNum1}+`;
} else if (randNum1 > 0) {
  randNum1 = `-${randNum1}-`;
} else {
  randNum1 = `*${randNum1}*`;
}
if (randNum2 < 0) {
  randNum2 = `+${randNum2}+`;
} else if (randNum2 > 0) {
  randNum2 = `-${randNum2}-`;
} else {
  randNum2 = `*${randNum2}*`;
}
if (randNum3 < 0) {
  randNum3 = `+${randNum3}+`;
} else if (randNum3 > 0) {
  randNum3 = `-${randNum3}-`;
} else {
  randNum3 = `*${randNum3}*`;
}

console.log(randNum1);
console.log(randNum2);
console.log(randNum3);

console.log('5) A)---------------------------');

let randNum = [rand(-10, 10), rand(-10, 10), rand(-10, 10)];
for (i = 0; i < randNum.length; i++) {
  if (randNum[i] < 0) {
    console.log('+', randNum[i], '+');
  } else if (randNum[i] > 0) {
    console.log('-', randNum[i], '-');
  } else {
    console.log('*', randNum[i], '*');
  }
}

// 6)
console.log('6)---------------------------');


let zvakiuKiekis = rand(5, 3000);
let zvakiuKaina;

if (zvakiuKiekis > 1000) {
  zvakiuKaina = zvakiuKiekis * 0.97;
} else if (zvakiuKiekis > 2000) {
  zvakiuKaina = zvakiuKiekis * 0.96;
} else {
  zvakiuKaina = zvakiuKiekis;
}

console.log(`Perkama ${zvakiuKiekis} zvakiu uz ${zvakiuKaina.toFixed(2)} EUR.`);

// 7)
console.log('7) A)---------------------------');

let randomNumber1 = rand(0, 100);
let randomNumber2 = rand(0, 100);
let randomNumber3 = rand(0, 100);

let arMean = (randomNumber1 + randomNumber2 + randomNumber3) / 3;

let numberCount = 0;
let filteredNumber1;
let filteredNumber2;
let filteredNumber3;
let filteredMean;

if (randomNumber1 > 10 && randomNumber1 < 90) {
  numberCount++;
  filteredNumber1 = randomNumber1;
} else {
  filteredNumber1 = 0;
}
if (randomNumber2 > 10 && randomNumber2 < 90) {
  numberCount++;
  filteredNumber2 = randomNumber2;
} else {
  filteredNumber2 = 0;
}
if (randomNumber3 > 10 && randomNumber3 < 90) {
  numberCount++;
  filteredNumber3 = randomNumber3;
} else {
  filteredNumber3 = 0;
}
filteredMean = (filteredNumber1 + filteredNumber2 + filteredNumber3) / numberCount;

console.log(randomNumber1, randomNumber2, randomNumber3);
console.log(`Aritmetinis vidurkis: ${arMean.toFixed(2)}`);
console.log(`Atrinkti skaiciai: ${numberCount}`);
console.log(`Atrinktu skaiciu vidurkis: ${filteredMean.toFixed(2)}`);


console.log('7) B)---------------------------');

let randNumber1 = rand(0, 100);
let randNumber2 = rand(0, 100);
let randNumber3 = rand(0, 100);

let numArray = [randNumber1, randNumber2, randNumber3];

let sum = 0;
let sortedSum = 0;
let numCount = 0;
for (let i = 0; i < numArray.length; i++) {
  sum += numArray[i];
  if (numArray[i] > 10 && numArray[i] < 90) {
    numCount++;
    sortedSum += numArray[i];
  }
}

// const arithMean = numArray.reduce((a, b) => a + b, 0) / numArray.length;

arithMean1 = sum / numArray.length;
arithMean2 = sortedSum / numCount;

console.log(randNumber1, randNumber2, randNumber3);
console.log(numCount);
console.log(arithMean1, arithMean2);



