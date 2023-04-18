//let a = 10
//for (a; a >= 5 ; a -- ) {
//    console.log(a);
//}
// task1
// function registrProcess() { 
//     const lastName = prompt("Please write your last name:"); 
//     const firstName = prompt("Please write your first name:"); 
//     const email = prompt("Please write your email address:"); 
//     return `${email} - ${lastName} ${firstName}`; 
//   } 
// console.log(registrProcess());
// task2
// function calculator(){
//     const distance = +prompt("Please write distance in km : ");
//     const fixedcost = 5
//     return(distance*0.25) + fixedcost;
// }
// console.log(calculator());
// task3
// function calculateReceiptAmount(name , UnitPrice , quantity , ParticipatesInPromotion) {
//     let amount = UnitPrice * quantity; 
//     if (quantity >= 5) {
//         amount *= 0.9; 
//       }
//       if (ParticipatesInPromotion) {
//         amount *= 0.85;
//       }
//       return amount;
// }
// console.log(calculateReceiptAmount("item1", 8, 16, true))
// task4
//  function suggestTable(numGuests) {
    //  if (numGuests<=2) {
        //  return "You can be seated a small table.";   
    //  } else if (numGuests<=4){
        //  return "You can be seated a medium table.";   
    //  }else if (numGuests<=8){
        //  return "You can be seated a large table.";   
    //  }else {
        //  return "You can not be seated a suitable table.";   
    //  }
    //  }
    
// console.log(suggestTable(9)) 

//task5
/*function averageAnnualTemperature() {
  let temp1 = +prompt("Enter temperature"); 
  let temp2 = +prompt("Enter temperature");
  let temp3 = +prompt("Enter temperature");
  let highest, middle, lowest;
  //
  if (temp1 >= temp2 && temp1 >= temp3) {
  highest = temp1;
  if (temp2 >= temp3) {
  middle = temp2;
  lowest = temp3;
  } else {
  middle = temp3;
  lowest = temp2;
  }
 } else if (temp2 >= temp1 && temp2 >= temp3) {
  highest = temp2;
  if (temp1 >= temp3) {
  middle = temp1;
  lowest = temp3;
  } else {
  middle = temp3;
  lowest = temp1;
  }
 } else {
  highest = temp3;
  if (temp1 >= temp2) {
  middle = temp1;
  lowest = temp2;
  } else {
  middle = temp2;
  lowest = temp1;
}
  }
  console.log(highest, middle, lowest);
}
averageAnnualTemperature()*/



// task 6
/*function checkDiscountMeet(name, age, numOrders, amounts) {
    let isRegular = false;
    let isOver60 = false;
  
    let totalAmount = 0;
    for (let i = 0; i < numOrders; i++) {
      totalAmount += amounts[i];
    }
    if (numOrders >= 4 && totalAmount >= 100) {
      isRegular = true;
    }
  
    if (age > 60) {
      isOver60 = true;
    }
  
    if (isRegular || isOver60) {
      return name + " is eligible for a discount.";
    } else {
      return name + " is not eligible for a discount.";
    }
  }
  
console.log(discountEligibility);*/

//task 7
/*function isSmallShipment(length, width, height, weight, distance) {
    const totalDimensions = length + width + height;
    return totalDimensions <= 150 && length <= 100 && width <= 100 && height <= 100 && weight <= 10 && distance >= 3 && distance <= 10;
  }
  console.log(isSmallShipment(50, 60, 40, 8, 5));*/

  //task 8
//   function convertToText(number) {
//     const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
//     const tensDigit = (number / 10) | 0;
//     const onesDigit = number % 10;
    
//     if (tensDigit === 0) {
//       return ones[onesDigit];
//     } else if (onesDigit === 0) {
//       return tens[tensDigit];
//     } else {
//       return `${tens[tensDigit]} ${ones[onesDigit]}`;
//     }
//   }
// console.log(convertToText(15)) 

//task 9
/*function printDivisibleNumbers(number) {
    for (let i = 1; i <= 1000; i++) {
      if (i % number === 0) {
        console.log(i);
      }
    }
  }
printDivisibleNumbers(5)*/
//task 10
function calculateDeposit() {
  const initialAmount = +prompt("Enter the initial amount");
  const durationYears = +prompt("Enter the duration in years");
  const interestRate  = +prompt("Enter the interest rate in %") / 100;

  let totalMoney = initialAmount;
  for (let i=0; i< durationYears; i++){
    totalMoney += initialAmount * interestRate;
  }

  return alert(totalMoney);
}
calculateDeposit();

//task 12
// function sumOfDigits(code) {
//   let sum = 0;
//   while (code > 0) {
//     sum += code % 10;
//     code = (code - (code % 10)) / 10;
//   }
//   return sum;
// }
// const code = 12345;
// const codeSum = sumOfDigits(code);
// console.log(codeSum); 




  

  

  