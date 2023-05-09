//1. 5-dən 26-ya qədər ədədlərin ədədi ortasını tapıb çap edin

// 5 den 26 ya qeder olanlari yazaq

var sum = 0;
for (let i = 5; i <= 26; i++) {
  sum += i;
}
//Ededi ortasin tapib consola yazaq
const numericalAverage = sum / (26 - 5 + 1);
console.log(numericalAverage); //15.5

//2. 10 ilə 100 arasındakı ədədlərdən yalnız cüt olanları mətn formatında ekrana çıxarın

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    document.writeln(`${i} is even number <br>`);
  }
}

// 3. 0-dan 40-a qədər ədədlər içərisindən 10 a bölünən ədədləri ekrana çıxarın

for (let i = 0; i <= 40; i++) {
  //Yoxlayiram 10 bolunurmu
  if (i % 10 === 0) {
    console.log(`${i} is diveded by 3`);
  }
}

//4. Hər hansı bir ədəd daxil edin və onun 3-ə bölünən olub olmadığını yoxlayan bir alqorithm yazın

//ParseInt vererek stringleri numbera cevirirem
// let number = parseInt(prompt("Enter a number"));

// //Şərtimizi yazırıq
// if (number % 3 === 0) {
//   console.log(`${number} is diveded by 3`);
// } else {
//   console.log(`${number} is not diveded by 3`);
// }

// 5.  30 ilə 40 arasındakı ədədlərin cəmi ilə hasilinin ədədi ortasını tapın

var sum = 0;
var product = 1;

for (let i = 30; i <= 40; i++) {
  sum += i;
  product *= i;
}

console.log(`Cəm: ${sum}`);
console.log(`Hasil: ${product}`);

//6.
for (i = 0; i <= 100; i++) {
  if (i != 10 && i != 70) {
    //Ededi consola cixarmat ucun document.write string formada cixarmaq ucun toString() yaziriq
    document.write(i.toString() + " ");
  }
}

//7.0-dan 100-ə qədər ədədlərdən 20dən kiçik və 50-dən böyük olanların ayrılıqda cəmini hesablayın

var sum = 0;

for (i = 0; i <= 100; i++) {
  if (i < 20 || i > 50) {
    sum += i;
  }
}

console.log(sum);

//

for (i = 0; i <= 9; i++) {
  console.log(i);
}

var sum = 0;

for (i = 0; i <= 50; i++) {
  sum += i;
}

console.log(sum);

//2 ve 36 arasinda olan ededlerden 4 ve 17-den baska hamisini ekrana cixarin

for (let i = 0; i <= 36; i++) {
  if (i != 4 && i != 17) {
    console.log(`${i}`);
  }
}
