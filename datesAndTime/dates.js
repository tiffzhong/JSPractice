//years months days and time
console.log("date", new Date());
console.log("getFullYear", new Date().getFullYear());
console.log("getMonth", new Date().getMonth());
console.log("getDate", new Date().getDate());
console.log("getDay", new Date().getDay()); //0 is Sunday, 1 is Monday,...
console.log("getHours", new Date().getHours());
console.log("getMinutes", new Date().getMinutes());
console.log("getSeconds", new Date().getSeconds());

//timestamp
console.log("getTime", new Date().getTime()); //number of milliseconds since jan 1

//date strings
console.log("toDateString", new Date().toDateString());
console.log("toDateString", new Date().toTimeString());

//using DNS to format
const now = new Date();
const before = new Date("February 5 2019 12:00:00");
console.log(dateFns.distanceInWords(now, before, { addSuffix: true })); //3 months ago
