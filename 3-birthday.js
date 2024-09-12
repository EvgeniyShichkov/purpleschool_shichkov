"use sctrict";

const birthday = (str) => {
  const now = new Date();
  const personDate = new Date(str);
  return now.getFullYear() - personDate.getFullYear() > 14 ? true : false
};

// console.log(birthday("1997-01-01"));
// console.log(birthday("2022-01-01")); 
