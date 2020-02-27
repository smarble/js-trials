"use strict";


// 1. isHometown

// Define your function here
function isHometown(town) {
  return town;
}



// 2. getFullName
function getFullname(fname, lname){
  return console.log(fname + lname);
}

// Define your function here


// 3. calculateTotal


// Define your function here
function calculateTotal(bprice, state, tax=0.05){

  let subtotal = bprice * (1 + tax);
  let fee = 0;
  if (state === 'CA'){
    fee = 0.03 * subtotal;

  } else if (state === 'PA'){
    fee = 2;

  } else if (state === 'MA'){
      if (bprice <= 100){
      fee = 1;
      }else {
      fee = 3;
      }  
  }
  console.log(subtotal + fee);
  return subtotal + fee;
  
}