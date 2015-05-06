=== Starters
/**
 * Write a function that returns twice the number that is passed in
 */
function double (number) {
   return number * 2;
}

/**
 * Write a function that says Merhaba to the name passed in
 */
function merhaba (adim) {
   return 'Hello, '+adim;
}

/**
 * Write a function that returns the minimum of all of the
 * numbers in input
 */
function min (input) {
   var min = input[0];
   for (var i=1; i<input.length; i++) {
      if (input[i] < min) {
         min = input[i];
      }
   }
   return min;
}

/**
 * Write a function that returns the maximum of all of the
 * numbers in input
 */
function max (input) {
   var max = input[0];
   for (var i=1; i<input.length; i++) {
      if (input[i] > max) {
         max = input[i];
      }
   }
   return max;
}

function sum (n) {
   var sum = 0;
   for (var i=1; i<=n; i++) {
      sum += i;
   }
   return sum;
}

/**
 * Limited sum, calcualte the sum of 1 to n but only use multiples of 3 in the sum!
 */
function sumMultiplesOf3 (n) {
   var sum = 0;
   for (var i=0; i<=n; i+=3) {
      sum += i;
   }
   return sum;
}

/**
 * Write converter that converts liras to dollars
 */
function lirasToDollars (liras) {
   return liras / 2;
}

/**
 * Reverse input
 */
function reverseInput(input) {

}

=== Intermediate

/**
 * Print the next n leap years. Ignore the fancy gregorian shift.
 * Or, you know, don't.
 */
function printLeapYears(n) {
   var nextLeapYear = 2016;
   for (var i=0; i<n; ++i) {
      if (nextLeapYear%4===0 && !(nextLeapYear%100===0 && nextLeapYear%400!==0)) {
         console.log(nextLeapYear);
      }
   }
}

/**
 * Calculator that takes in functon to do to two numbers
 */
function calculator (number1, number2, operationToDo) {
   if (operationToDo === 'Add') {
      return number1 + number2;
   } else if (operationToDo === 'Subtract') {
      return number1 - number2;
   } else if (operationToDo === 'Multiply') {
      return number1 * number2;
   } else if (operationToDo === 'Divide') {
      return number1 / number2;
   }
   alert('I do not know hot to do that!');
}

/**
 * Timezone converter
 */
function convertTimezone(date, timezone) {

}

/**
 *
 */
function rollDice(numberOfDice) {

}

/**
 * Cooler currency converter -- takes type of currenty to
 * convert to as well (from liras...or can take
 */
function currencyConverter(liras, convertTo) {

}

=== Advanced

/**
 * Implement selection sort
 */
function selectionSort(input) {
   for (var i=0; i < input.length; i++) {
      var currMin = input[i];
      var oldIndex = i;
      for (var j=i+1; j < input.length; j++) {
         if (input[j] < currMin) {
            currMin = input[j];
            oldIndex = j;
         }   
      }   
      var temp = input[i];
      input[i] = currMin;
      input[oldIndex] = temp;
   }   
   return input;
}
