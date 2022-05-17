function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1)
console.log('1)---------------------------');
// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;


function printText(tekstas) {
  return tekstas;
}

console.log(printText('As spausdinu bet koki teksta :)'));

// 2)
console.log('2)---------------------------');
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;


function repeatText(tekstas, kartai) {
  for (let i = 0; i < kartai; i++) {
    console.log(tekstas);
  }
}


repeatText(printText('vel spausdinu teksta'), 5);

// 3)
console.log('3) [?]---------------------------');

// 4)
console.log('4)---------------------------');
// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)


function dalybaBeLiekanos(skaicius) {
  let count = 0;
  for (let i = 2; i < skaicius; i++) {
    if (skaicius % i === 0) {
      // console.log(`Dalijasi be liekanos is ${skaicius}: ${i}`);
      count++;
    }
  }
  return count;
}

console.log('Be liekanos dalijasi:', dalybaBeLiekanos(36));

// 5)
console.log('5)---------------------------');
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

const skMasyvas = [];
for (i = 0; i < 100; i++) {
  skMasyvas.push(rand(33, 77));
}

console.log('Atsitiktiniu skaiciu masyvas:', skMasyvas);

function rusiuotiDaliklius(masyvas) {
  let masyvasSuDalikliais = [];
  let dalSkaicius;
  for (let i = 0; i < masyvas.length; i++) {
    dalSkaicius = dalybaBeLiekanos(masyvas[i]);
    masyvasSuDalikliais.push([masyvas[i], dalSkaicius]);
    masyvasSuDalikliais.sort((a, b) => b[1] - a[1]);
  }
  console.log('Masyvas su dalikliais:', masyvasSuDalikliais);
  const surusiuotasMasyvas = masyvasSuDalikliais.map(item => item[0]);
  return surusiuotasMasyvas;
}

console.log('Surusiuotas pagal daliklius masyvas:', rusiuotiDaliklius(skMasyvas));

// 6)
console.log('6)---------------------------');
// Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

let array = [];
for (i = 0; i < 100; i++) {
  array.push(rand(333, 777));
}
console.log('Atsitiktiniu skaiciu masyvas:', array);

function bePirminiuSkaiciu(arr) {
  let filteredArr = [];
  for (i = 0; i < arr.length; i++) {
    if (dalybaBeLiekanos(arr[i]) !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(bePirminiuSkaiciu(array));

// 7)
console.log('7)---------------------------');
// Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;

const randSizeArray = (sizeInt = rand(10, 20)) => {
  const array = [];;
  for (let i = 0; i < sizeInt; i++) {
    array.push(rand(0, 10));
  }
  return array;
}
console.log('Atsitiktinio ilgio masyvas:', randSizeArray());

let arrSize = rand(10, 30);
let mainArray;
let nestedArr;

for (let i = 0; i < arrSize; i++) {
  nestedArr = randSizeArray();

  if (!arrSize) {
    nestedArr[nestedArr.length - 1] = 0;
  } else {

    nestedArr[nestedArr.length - 1] = mainArray;
  }
  mainArray = nestedArr;
}
console.log('Pagrindinis masyvas:', mainArray);

// 8)
console.log('8)---------------------------');
// Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.

function numbersSum(nestedArr) {

  let sum = 0;
  let len = nestedArr.length;
  for (let i = 0; i < len; i++) {
    if (typeof nestedArr[i] === 'number') {
      sum += nestedArr[i];
    } else if (Array.isArray(nestedArr[i])) {
      nestedArr[i].length = len - 1;
      sum += numbersSum(nestedArr[i]);

    }
  }
  return sum;
}

console.log(numbersSum(mainArray));

// 9)
console.log('9)---------------------------');
// Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.

const dalikliuKiekis = (skaicius) => {
  let count = 0;
  for (let i = 2; i < skaicius; i++) {
    if (skaicius % i === 0) {
      count++;
    }
  }
  return count;
}

const number1 = rand(1, 33);
const number2 = rand(1, 33);
const number3 = rand(1, 33);

const randArr = [number1, number2, number3];

const tikPirminiai = (arr, lastElm = 3) => {
  for (let i = 0; i < lastElm; i++) {
    if (dalikliuKiekis(arr.slice(-lastElm)[i])) {
      return true;
    }
  }
  return false;
}

while (tikPirminiai(randArr)) {
  randArr.push(rand(1, 33));
}

console.log(randArr);

// 10)
console.log('10)---------------------------');
// Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.

const kubas = [];

for (let i = 0; i < 10; i++) {
  const elmReiksmes = [];
  for (let x = 0; x < 10; x++) {
    elmReiksmes.push(rand(1, 100));
  }
  kubas.push(elmReiksmes);
}
console.log(kubas);
console.table(kubas);

const pirminiuSkVidurkis = (arr) => {
  let sum = 0;
  let count = 0;
  arr.forEach(elm => elm.forEach(val => {
    if (!dalikliuKiekis(val)) {
      count++;
      sum += val;
    }
  }));
  return count ? sum / count : 0;
}
console.log('Pirminiu skaiciu vidurkis:', pirminiuSkVidurkis(kubas));

const minSkaicius = (arr) => {
  let minSk = arr[0][0];
  let koord = [0, 0];
  arr.forEach((elm, yInd) => elm.forEach((val, xInd) => {
    if (val < minSk) {
      minSk = val;
      koord = [yInd, xInd];
    }
  }))
  return koord;
}

console.log(minSkaicius(kubas));

while (pirminiuSkVidurkis(kubas) < 70) {
  const [y, x] = minSkaicius(kubas);
  kubas[y][x] += 3;
}
console.log('Pirminiu skaiciu vidurkis:', pirminiuSkVidurkis(kubas));
