function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1)

let skaicius1 = rand(0, 4);
let skaicius2 = rand(0, 4);
let result;

if (skaicius1 >= skaicius2) {
  result = skaicius1 / skaicius2
} else if (skaicius2 >= skaicius1) {
  result = skaicius2 / skaicius1
}

console.log(skaicius1, skaicius2, result);

// 2.

let sk1 = rand(0, 25);
let sk2 = rand(0, 25);
let sk3 = rand(0, 25);
let result2;

if (sk1 > sk2 && sk1 < sk3 || sk1 > sk3 && sk1 < sk2) {
  result2 = sk1;
} else if (sk2 > sk1 && sk2 < sk3 || sk2 > sk3 && sk2 < sk1) {
  result2 = sk2;
} else {
  result2 = sk3;
}

console.log(sk1, sk2, sk3, result2);

// 3)

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
// a)
let number1 = rand(0, 2);
let number2 = rand(0, 2);
let number3 = rand(0, 2);
let number4 = rand(0, 2);
let count0 = 0;
let count1 = 0;
let count2 = 0;
let numArr = [number1, number2, number3, number4];

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] == 0 || numArr[i] == 0 || numArr[i] == 0 || numArr[i] == 0) {
    count0++;
  } else if (numArr[i] == 1 || numArr[i] == 1 || numArr[i] == 1 || numArr[i] == 1) {
    count1++;
  } else {
    count2++;
  }
}

// b)

const counts = {};

for (const num of numArr) {
  if (counts[num]) {
    counts[num] += 1;
  } else {
    counts[num] = 1;
  }
}

console.log(numArr);
console.log(counts);
console.log('nuliu: ', count0, 'vienetu: ', count1, 'dvejetu: ', count2);

// 5)
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

let zvakiuKiekis = rand(5, 3000);

if (zvakiuKiekis > 1000) {
  zvakiuKaina = zvakiuKiekis * 0.97;
} else if (zvakiuKiekis > 2000) {
  zvakiuKaina = zvakiuKiekis * 0.96;
} else {
  zvakiuKaina = zvakiuKiekis;
}

console.log(`Perkama ${zvakiuKiekis} zvakiu uz ${zvakiuKaina} EUR.`);

// 7)

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



