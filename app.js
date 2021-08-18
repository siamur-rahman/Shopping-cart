function updateNumber(product, price, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // console.log(productNumber, productTotal);
   calculateTutal();
}

function getInputValue(product) {
   const productInput = document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
function calculateTutal() {
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax;
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('price-total').innerText = totalPrice;


   // calculatetotal k kon jaiga theke call korba eta ekta boro prosno....
   // 4 jaiga theke call korbo karon phon/case barle ba komle +- theke call korte hobe...
   // main ager updateNumber e bosaia dile r 4 bar call kora lagbo na .... karon 4jon e updatenumber k call korteche agei 
}

// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', 1219, false);
})


// handle case increase-decrease/////// 
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', 59, false);
})














/*///////////////////////////////step-1////////////////////////////////

function updateNumber(isIncreasing) {
   const productInput = document.getElementById('case-number')
   const productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else { productInput.value = productNumber - 1; }
}



document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber(true);
})

document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber(false);
})
*/



/*///////////////////////////////step-2////////////////////////////////

function updateNumber(isIncreasing) {
   const productInput = document.getElementById('case-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById('case-total');
   productTotal.innerText = productNumber * 59;
   console.log(productNumber, productTotal);

}



document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber(true);
})

document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber(false);
})*/

/*///////////////////////////////step-3////////////////////////////////

function updateNumber(product, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * 59;
   // console.log(productNumber, productTotal);

}
// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', false);
})


// handle case increase-decrease///////
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', false);
})*/


/*///////////////////////////////step-4////////////////////////////////

function updateNumber(product, price, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // console.log(productNumber, productTotal);

}
// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', 1219, false);
})


// handle case increase-decrease///////
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', 59, false);
})*/


/*///////////////////////////////step-5////////////////////////////////

function updateNumber(product, price, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // console.log(productNumber, productTotal);

}
function calculateTutal() {
   const phoneInput = document.getElementById('phone-number');
   const phoneNumber = parseInt(phoneInput.value);
   const phoneTotal = phoneNumber * 1219;
   const caseInput = document.getElementById('case-number');
   const caseNumber = parseInt(caseInput.value);
   const caseTotal = caseNumber * 59;

   const subTotal = phoneTotal + caseTotal;


}

// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', 1219, false);
})


// handle case increase-decrease///////
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', 59, false);
})*/

/*///////////////////////////////step-5////////////////////////////////

function updateNumber(product, price, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // console.log(productNumber, productTotal);
}

function getInputValue(product) {
   const productInput = document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
function calculateTutal() {
   getInputValue();
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal=phoneTotal+caseTotal;

// calculatetotal k kon jaiga theke call korba eta ekta boro prosno....
// 4 jaiga theke call korbo karon phon/case barle ba komle +- theke call korte hobe...
// main ager updateNumber e bosaia dile r 4 bar call kora lagbo na .... karon 4jon e updatenumber k call korteche agei
}

// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', 1219, false);
})


// handle case increase-decrease///////
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', 59, false);
})*/

/*///////////////////////////////step-6////////////////////////////////

/*
function updateNumber(product, price, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // console.log(productNumber, productTotal);
   calculateTutal();
}

function getInputValue(product) {
   const productInput = document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
function calculateTutal() {
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   console.log(subTotal);

   // calculatetotal k kon jaiga theke call korba eta ekta boro prosno....
   // 4 jaiga theke call korbo karon phon/case barle ba komle +- theke call korte hobe...
   // main ager updateNumber e bosaia dile r 4 bar call kora lagbo na .... karon 4jon e updatenumber k call korteche agei
}

// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', 1219, false);
})


// handle case increase-decrease///////
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', 59, false);
})*/

/*///////////////////////////////step-6////////////////////////////////

function updateNumber(product, price, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // console.log(productNumber, productTotal);
   calculateTutal();
}

function getInputValue(product) {
   const productInput = document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
function calculateTutal() {
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   document.getElementById('sub-total').innerText = subTotal;


   // calculatetotal k kon jaiga theke call korba eta ekta boro prosno....
   // 4 jaiga theke call korbo karon phon/case barle ba komle +- theke call korte hobe...
   // main ager updateNumber e bosaia dile r 4 bar call kora lagbo na .... karon 4jon e updatenumber k call korteche agei
}

// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', 1219, false);
})


// handle case increase-decrease///////
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', 59, false);
})*/

/*///////////////////////////////step-6////////////////////////////////

function updateNumber(product, price, isIncreasing) {
   const productInput = document.getElementById(product + '-number')
   let productNumber = parseInt(productInput.value);
   if (isIncreasing == true) { productInput.value = productNumber + 1; }
   else if (productNumber > 0) { productInput.value = productNumber - 1; }


   productNumber = productInput.value;

   const productTotal = document.getElementById(product + '-total');
   productTotal.innerText = productNumber * price;
   // console.log(productNumber, productTotal);
   calculateTutal();
}

function getInputValue(product) {
   const productInput = document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
function calculateTutal() {
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax;
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('price-total').innerText = totalPrice;


   // calculatetotal k kon jaiga theke call korba eta ekta boro prosno....
   // 4 jaiga theke call korbo karon phon/case barle ba komle +- theke call korte hobe...
   // main ager updateNumber e bosaia dile r 4 bar call kora lagbo na .... karon 4jon e updatenumber k call korteche agei
}

// phone increase-decrease///////////
document.getElementById('phone-plus').addEventListener('click', function () {
   updateNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
   updateNumber('phone', 1219, false);
})


// handle case increase-decrease///////
document.getElementById('case-plus').addEventListener('click', function () {
   updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
   updateNumber('case', 59, false);
})

*/




















