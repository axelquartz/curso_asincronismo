// const promise = new Promise(function (resolve, reject) {
//   resolve("hola");
//   reject("error");
// });

// const cows = 12;

// const countCows = new Promise(function (resolve, reject) {
//   if (cows > 10) {
//     resolve(`We have ${cows} cows on the farm`);
//   } else {
//     reject("There is no cows on the farm");
//   }
// });

// countCows
//   .then((result) => setTimeout(() => console.log(result), 3000))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally"));

// import fetch from "node-fetch";
// const API = "https://api.escuelajs.co/api/v1";

// function fetchData(urlApi) {
//   return fetch(urlApi);
// }

// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => console.log(products))
//   .catch((err) => console.log(err));

// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((products) => {
//     return fetchData(`${API}/products/${products[0].id}`);
//   })
//   .then((response) => response.json())
//   .then((product) => {
//     return fetchData(`${API}/categories/${product.category.id}`);
//   })
//   .then((response) => response.json())
//   .then((category) => console.log(category.name))
//   .catch((err) => console.log(err));

// const fnAsync = () => {
//   return new Promise((resolve, reject) => {
//     true ? setTimeout(() => resolve("true Async"), 2000) : reject(new Error("error"));
//   });
// };

// function outer() {
//   let counter = 0;
//   return function () {
//     counter++;
//     console.log(counter);
//   };
// }

// const fn = outer();
// fn();
// fn();
// fn();

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const condition = true;
//       if (condition) {
//         resolve("hola");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// }

// fetchData();

// const axelPromise = new Promise((resolve, reject) => {
//   const condition = true;
//   setTimeout(() => {
//     if (condition) {
//       resolve(fetch("https://api.escuelajs.co/api/v1/products"));
//     } else {
//       reject("URL not fetched");
//     }
//   });
// });

// axelPromise
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// // const axelPromise = new Promise((resolve, reject) => {

// const fetchApi = new Promise((resolve, reject) => {
//   const url = fetch("https://api.escuelajs.co/api/v1/products");
//   if (url != null) {
//     resolve(url);
//   } else {
//     resolve("URL cannot be fetched");
//   }
// });

// fetchApi
//   .then((data) => data.json())
//   .then((data) => console.log(data[1]))
//   .catch((err) => console.log(err));

// const person = {
//   name: "Axel",
// };

// person.sayHello = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.sayHello();

// const salutate = person.sayHello.bind({ name: "Rerik" });
// salutate();

// async function fetchApi() {
//   try {
//     const url = await fetch("https://api.escuelajs.co/api/v1/products");
//     const data = await url.json();
//     console.log([data[0]]);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchApi();

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const validation = true;
//       if (validation) {
//         resolve(fetch("https://api.escuelajs.co/api/v1/products"));
//       } else {
//         reject("Error fetching API");
//       }
//     }, 4000);
//   });
// }

// // fetchData()
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// async function fetchFinalData() {
//   try {
//     console.log("Fetching Final User Data...");
//     const data = await fetchData();
//     const result = await data.json();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// fetchFinalData();

// function fetchProductData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fetch("https://api.escuelajs.co/api/v1/products"));
//     }, 2000);
//   });
// }

// function fetchMoreData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(fetch("https://api.escuelajs.co/api/v1/products"));
//     }, 4000);
//   });
// }

// async function getAllData() {
//   try {
//     console.log("fetching data");
//     const allData = await Promise.all([fetchProductData(), fetchMoreData()]);
//     const jsonData = await Promise.all(allData.map((response) => response.json()));
//     console.log(jsonData);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getAllData();

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
