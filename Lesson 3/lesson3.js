//** 1) 2 ədədin fərqini hesablayan function yazın,əgər 1-ci rəqəm ikincidən böyükdürsə.

function substract(a, b) {
  if (a > b) {
    return a - b;
  }
}

substract(10, 5);

//** 2) Əgər ədəd cüt ədəddirsə,onun kök altı dəyərini hesablayan function yazın

function calculateSquareRootIfEven(num) {
  if (num % 2 == 0) {
    //Əgər ədəd cüt olarsa
    return Math.sqrt(num); //Kök altında çıxarıq
  } else {
    return null; //Eks halda olan halin yaziriq
  }
}

// console.log(calculateSquareRootIfEven(64));

//** 3) Ekrandan daxil edilən(promp) data-nın cüt olub olmadığını yoxlayan metod yazın.

// const evenPrompt = parseInt(prompt("Enter a number"));
// if (evenPrompt % 2 == 0) {
//   console.log(evenPrompt + " is even number");
// } else {
//   console.log(evenPrompt + " is odd number");
// }

// ** Ekrandan daxil edən rəqəmin tipinin Nan olub olmadığını yoxlayan method yazın

// const nanPrompt = parseInt(prompt("Enter a number"));

// if (nanPrompt == NaN) {
//   console.log(nanPrompt + "is NaN");
// } else {
//   console.log(nanPrompt + " is not NaN");
// }

//** 4) Bir mətndə olan boşluqların sayını hesablayan function yazın.
//**   */ Bunu 3 yolla yazacam

//!1-ci yol
//Ilk olaraq bir funkisya tanimlayiriq
function spaceCount() {
  var my_string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  //My string ile her biz soz vergul ile ayrilir ve bu sozler bir array icinde yazilir. Yaradilan arrayin uzunlugu bosluqlarin sayin verir. Bosluqlarin sayi hesablamaq ucun umumi uzunluqdan bir cixiriq.
  var spaceCount = my_string.split(" ").length - 1;
  //Return ile bosluqlarin sayi geri qaytrariq
  return spaceCount;
}

console.log(spaceCount());

//!2cü yol arrow function ile yazırıq

const spaceCount1 = () => {
  const my_string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  const spaceCount = my_string.split(" ").length - 1;
  return spaceCount;
};

console.log(spaceCount1());

//! 3-ci yol
//Regex ə qədər yuxarıda yazılan ilə eynidir
function spaceCount() {
  var my_string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  // \s+ bir boşluq və ya bir neçə boşluq ifadə edir.
  var regex = /\s+/gi;
  //trim ile stringin evvel ve axrindaki bosluqlar aradan goturulur. replace bosluqlari duzenli sekilde deyisdirmek ucun istidade edirik. Split ile bir array icersine aliriq. lenght ile uzunluqun sayin hesablayiriq
  var spaceCount = my_string.trim().replace(regex, " ").split(" ").length - 1;
  return spaceCount;
}

console.log(spaceCount()); // Output: 90

//**Əgər mətn mövcuddursa onun icərisindəki , (vergul) lərin sayını hesablayan method yazın.

const new_string = () => {
  var my_string =
    "Lorem Ipsum, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever, since the 1500s, when an unknown printer took a galley of type, and scrambled it to make a type specimen book. It has survived not only, five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was, popularised in the 1960s with the release of Letraset sheets, containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  // regex ile butun verguller goturulur
  var regex = /\,+/gi;
  var columnCount = my_string.match(regex).length; // Burda ise in umumi uzunlugunun sayi hesablayir
  return columnCount;
};

console.log(new_string());

// **Mətnin 2 və 6 -cı indexində olan hissəni kəsib ekrana çıxarın

//Bir metin yaziriq
const myString =
  "Lorem Ipsum, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever, since the 1500s, when an unknown printer took a galley of type, and scrambled it to make a type specimen book. It has survived not only, five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was, popularised in the 1960s with the release of Letraset sheets, containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const result = [...myString] //Bu metini bir arraya saliram ki indeksin goture bilim
  .filter((_, index) => index !== 2 && index !== 6)
  .join(""); // filter metodu ile mueeyyen sert qoyuram ve indeksi 2 ve 6 ya beraber olarsa onlari join edirem resulta.

console.log(result);

//**Mətnin bütün hərflərini böyük edən bir method yazın
//** Mətnin bütün hərflərini kiçik edən bir method yazın

let text =
  "Lorem Ipsum, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever, since the 1500s, when an unknown printer took a galley of type, and scrambled it to make a type specimen book. It has survived not only, five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was, popularised in the 1960s with the release of Letraset sheets, containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

console.log(text.toUpperCase());
console.log(text.toLowerCase());

//**Bir mətn daxil edin və 4-cü indexdə yerləşən char-ın   'n' hərfi olub olmadığını yoxlayın.
if (text.charAt(4) === "n") {
  console.log("index of it is m");
} else {
  console.log(null);
}

//**Bir array teyin et və sonuncu index-dəki dəyər ilə 1-ci indexdəki dəyərin cəmini başka bir stringdə ekrana çıxar.

//!Bunu funksiya icersinde yazacam

//Burda bir sumLastAndFirstIndex adinda arrow function yaziram
const sumLastAndFirstIndex = (arr) => {
  const sum = arr[0] + arr[arr.length - 1]; //Burada ilk ve son indeksleri cemleyib sum deyiskenine atiram
  console.log(`Ilk ve son indeksleri cemi ${sum} a beraberdir`);
};

const numbers = [1, 2, 3, 5, 9, 34, 43, 36];
sumLastAndFirstIndex(numbers);

//**Bir array təyin et və sonuncu index-ə 'Salam' deyerini menimset */

let stringArray = ["Bir", "daha", "sene", "demek", "isteyirem"];
stringArray.push("Salam");
console.log(stringArray);

//**Array təyin et və uzunluğunu hesablayan bir alqorihtm yaz. */

console.log(stringArray.length); //Output 6

//**Bir mətndəki sözlərin sayını hesablayan alqorithm yaz. */

const newText =
  "Lorem Ipsum, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever, since the 1500s, when an unknown printer took a galley of type, and scrambled it to make a type specimen book. It has survived not only, five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was, popularised in the 1960s with the release of Letraset sheets, containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

console.log(newText.split(" ").length); //Output 91

//**İki random eded teyin et ve onlarin cemini hesablayan alqorithm yaz

let getRandomNum1 = Math.floor(Math.random() * 100);
let getRandomNum2 = Math.floor(Math.random() * 100);

console.log(getRandomNum1 + getRandomNum2);

//** 17) 5-dən 26-ya qədər ədədlərin ədədi ortasını tapıb çap edin */

var sum = 0;
for (let i = 5; i <= 26; i++) {
  sum += i;
}

const mean = sum / (26 - 5 + 1);
console.log(mean);

var sum = 0;
let i = 5;

//! while ile de yaziriq
while (i <= 26) {
  sum += i;
  i++;
}

console.log(sum / (26 - 5 + 1));

//**İcerisinde 5 string tipli data olan array teyin edin, ve uzunlugu 5-den yuxari olan datalari baska bir arraya menimsedib ekrana cixarin */

//! Bunu 2 yolla yazacam: 1-ci yol donguye salib hell edecem

const fruits = ["banana", "pea", "orange", "strawberry", "pineapple"];
//Burada boş array yaradırıq ki, uzunlugu 5 den boyuk olanlari ona menimsedek
const newArr = [];
for (let i = 0; i < fruits.length; i++) {
  //Şərtimizi qoyuruq. Hetta her ehtimal bele bir sert qoyacam array icerisnde data tipi yalniz string olanlar ve stringlerin uzunlugu 5 den boyuk olanlari gotursun.
  if (typeof fruits[i] === "string" && fruits[i].length >= 5) {
    newArr.push(fruits[i]);
  }
}

console.log(newArr); //Output: [ 'banana', 'orange', 'strawberry', 'pineapple' ]

//!2-ci metod daha rahat metodur. Bunun üçün filter metodan istifade edecem.
//! Yuxarida  fruits adinda array yaratmisdiq

const newArray = fruits.filter((item) => item.length >= 5);
console.log(newArray); //(4) ['banana', 'orange', 'strawberry', 'pineapple']

//**Bir metn teyin edin ve icerisinde reqem olub olmadigin i yoxlayin, eger reqem varsa hemin reqemleri baska bir stringe menimsedin,diger metnden ise silin. */

const numberedText =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const regExNum = /\d+/g; // ancaq reqemleri goturur
const matchedNumbers = numberedText.match(regExNum); //verilmis textden reqemleri goturur
//Sertimizi yaziriq
if (matchedNumbers) {
  const numberString = matchedNumbers.join("");
  // reqemleri silmek ucun
  const cleanText = numberedText.replace(regExNum, "");
  console.log(numberString); //He earns  euro from salary per month,  euro annual bonus,  euro online courses per month.
  console.log(cleanText); //50001000015000
}

//*Bir metn teyin edin ve içerisinde olan "i" hərflərinin hamısını silin/

const iText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac tellus sed felis ullamcorper ullamcorper vel vitae odio. Nam pellentesque eros mi, ut venenatis elit vestibulum vel. Morbi vitae velit sem. Vestibulum eget ipsum a eros faucibus interdum. Nullam posuere, nulla at faucibus fringilla, justo arcu ultricies sapien, non finibus lacus lorem nec arcu. Nunc nec dolor a mauris cursus ullamcorper. Fusce malesuada nunc quis enim dignissim, in pharetra mauris facilisis. Etiam placerat nunc at vestibulum fringilla. Nulla vel rhoncus nulla. Proin aliquam ";

console.log(iText.replace(/i/gi, "")); //Lorem psum dolor st amet, consectetur adpscng elt. nteger ac tellus sed fels ullamcorper ullamcorper vel vtae odo. Nam pellentesque eros m, ut venenats elt vestbulum vel. Morb vtae velt sem. Vestbulum eget psum a eros faucbus nterdum. Nullam posuere, nulla at faucbus frnglla, justo arcu ultrces sapen, non fnbus lacus lorem nec arcu. Nunc nec dolor a maurs cursus ullamcorper. Fusce malesuada nunc qus enm dgnssm, n pharetra maurs faclss. Etam placerat nunc at vestbulum frnglla. Nulla vel rhoncus nulla. Pron alquam

//**Ekrandan bir eded daxil edin ve bu ededin palindrom olub olmadigini yoxlayan alqorithm yazin. */

const palindromNumStr = prompt("Enter a number");
const palindromNum = parseInt(palindromNumStr);

if (
  !isNaN(palindromNum) &&
  palindromNum.toString().split("").reverse().join("") === palindromNumStr
) {
  console.log(`${palindromNum} is palindrom number`);
} else {
  console.log(`${palindromNumStr} is not palindrom number`);
}
