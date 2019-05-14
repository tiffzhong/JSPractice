//rest param
const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num * 2);
};

const result = double(1, 3, 5, 7, 9, 2, 4, 6, 8);
console.log(result);

//spread operator/syntax (arrays)
const people = ["tiff", "tiffz", "tiffany"];
const members = ["cj", "chris", "christopher", ...people];
console.log(members); //"spreads" them out.

//spread (objects)

const person = { name: "tiff", age: 25, job: "unemployed" };
const personClonse = { ...person, location: "sf" }; //making a brand new object. a COPY

//sets
const namesArray = ["tiff", "tiffz", "zhong", "tiff", "tiffany"];
// const namesSet = new Set(namesArray);
// console.log(namesSet); //deletes duplicates.

// const uniqueNames = [...namesSet];
// console.log(uniqueNames);
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20);
ages
  .add(23)
  .add(25)
  .add(30)
  .add(25);
ages.delete(25);

console.log(ages.size);
console.log(ages.has(30), ages.has(21));

ages.clear(); //removes all values in sets

const ninjas = new Set([
  { name: "tiff", age: 25 },
  { name: "zhong", age: 25 },
  { name: "cj", age: 26 }
]);

ninjas.forEach(ninja => {
  console.log(ninja.name, ninja.age);
});

//symbols

const symbolOne = Symbol("generic");
const symbolTwo = Symbol("generic");
console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne == symbolTwo); //false

const ninja = {};
ninja.age = 30;
ninja["belt"] = "black";
ninja["belt"] = "orange";

ninja[symbolOne] = "tiffz";
ninja[symbolTwo] = "tiff"; //symbols are not the same. they are both unique to its own values.
console.log(ninja);
