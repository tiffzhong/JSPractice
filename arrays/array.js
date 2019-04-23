//FILTER
const users = [
  { name: "tiff", membership: "premium" },
  { name: "tommy", membership: "regular" },
  { name: "cj", membership: "premium" },
  { name: "kris", membership: "regular" }
];

const premiumMembers = users.filter(premium => {
  return premium.membership === "premium";
});
console.log(premiumMembers);

//MAP
const products = [
  { name: "tiff", price: 20 },
  { name: "tommy", price: 50 },
  { name: "cj", price: 40 },
  { name: "kris", price: 30 }
];
const saleProducts = products.map(product => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});
console.log(saleProducts);

//REDUCE
//return a single value from an array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const result = prices.reduce((acc, curr) => {
  if (curr > 30) {
    acc++;
  }
  return acc;
}, 0);
//this returns the count of how many numbers are greater than 30
console.log(result);

//SORT
const playas = [
  { name: "tiff", price: 20 },
  { name: "tommy", price: 50 },
  { name: "cj", price: 40 },
  { name: "kris", price: 30 },
  { name: "ja", price: 60 }
];

playas.sort((a, b) => {
  if (a.price > b.price) {
    return -1;
  } else if (b.price > a.price) {
    return 1;
  } else {
    return 0;
  }
});

playas.sort((a, b) => {
  return b.price - a.price; //biggest num first
});
