const moment = require("moment");
const birthDate = moment ("2002-07-15","YYYY-MM-DD");
const today = moment();

const years = today.diff(birthDate,"years");
birthDate.add(years,"years");

const months = today.diff(birthDate,"months");
birthDate.add(months,"months");

const days = today.diff(birthDate,"days");

console.log(`your age is ${years} years, ${months}months, and ${days} days.`);