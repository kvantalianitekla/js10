// 1️ forEach – ფასების დაბეჭდვა
// გაქვს პროდუქტის ფასების მასივი:
// let prices = [15, 40, 25, 10];
// 🔹 დაბეჭდე თითოეული ფასი კონსოლში ტექსტით:
// Price: 15$

// let prices = [15, 40, 25, 10];

// prices.forEach(function (price) {
//   console.log("price: " + price + "$");
// });

// --------------------------------------------------

// 2️ reduce – ჯამი
// let numbers = [5, 10, 15];
// 🔹 reduce გამოყენებით გამოთვალე ყველა რიცხვის ჯამი.

// let numbers = [5, 10, 15];

// let sum = numbers.reduce(function (acc, cur) {
//   return acc + cur;
// });

// console.log("sum: " + sum);

// ------------------------------------------------------------------

// 3️ map – ფასის გაზრდა
// let prices = [100, 200, 300];
// 🔹 შექმენი ახალი მასივი, სადაც თითოეული ფასი გაზრდილია 10%-ით.

// let prices = [100, 200, 300];

// let increasedPrice = prices.map(function (price) {
//   return price * 1.1;
// });

// console.log(increasedPrice);

// ---------------------------------------------------------------------

// 4️ map – სახელების დიდი ასოებით
// let names = ["nika", "ana", "luka"];
// 🔹 შექმენი ახალი მასივი, სადაც ყველა სახელი იქნება დიდი ასოებით.

// let names = ["nika", "ana", "luka"];

// let upperNames = names.map(function (name) {
//   return name.toUpperCase();
// });

// console.log(upperNames);

// ----------------------------------------------------------------

// 5️ filter – სრულწლოვანები
// let ages = [12, 18, 25, 14, 30];
// 🔹 შექმენი ახალი მასივი, სადაც იქნება მხოლოდ 18 და მეტი ასაკის მომხმარებლები.

// let ages = [12, 18, 25, 14, 30];
// let adults = ages.filter(function (age) {
//   return age >= 18;
// });

// console.log(adults);

// --------------------------------------------------------------

// 6️ filter – ძვირიანი პროდუქტები
// let prices = [50, 120, 30, 200, 80];
// 🔹 დააბრუნე მხოლოდ ის ფასები, რომლებიც მეტია 100-ზე.

// let prices = [50, 120, 30, 200, 80];

// let expensive = prices.filter(function (price) {
//   return price > 100;
// });

// console.log(expensive);

// ---------------------------------------------------------

// 7️ sort – დალაგება ზრდადობით
// let numbers = [40, 10, 100, 25];
// 🔹 დაალაგე რიცხვები ზრდადობით.

// let numbers = [40, 10, 100, 25];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);

// --------------------------------------------------------------

// 8️ sort + reverse – კლებადობით
// let scores = [55, 90, 70, 100, 60];
// 🔹 დაალაგე ქულები კლებადობით.

// let scores = [55, 90, 70, 100, 60];
// scores.sort((a, b) => a - b);
// scores.reverse();
// console.log(scores);

// -------------------------------------------------------------------

// 9️ some – არის თუ არა არასრულწლოვანი
// let ages = [22, 19, 17, 25];
// 🔹 შეამოწმე არის თუ არა მასივში ages ერთი არასრულწლოვანი მაინც (18-ზე ნაკლები).

// let ages = [22, 19, 17, 25];
// let hasMinor = ages.some(function (age) {
//   return age < 18;
// });
// console.log(hasMinor);

// ----------------------------------------------------------------------

// 10 every – ყველა მომხმარებელი აქტიურია თუ არა
// let usersActive = [true, true, false, true];
// 🔹 შეამოწმე ყველა მომხმარებელი აქტიურია თუ არა.

// let usersActive = [true, true, false, true];
// let active = usersActive.every(function (status) {
//   return status === true;
// });
// console.log(active);
