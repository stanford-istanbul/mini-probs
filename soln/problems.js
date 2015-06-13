/**
 * Press the lightening bolt symbol to launch your program, then open the javascript console
 * To see the result of your code!
 */

/**
 * Write a function that returns twice the number that is passed in
 */
function double (number) {
}

// This will print to the browser's javascript console.
console.log("Twice 2 is "+double(2));

/**
 * Write a function that says Merhaba to the name passed in
 * For example, "Merhaba, Chris!"
 */
function merhaba (adim) {
}

merhaba();

/**
 * Write a function that returns the minimum of the two
 * inputs
 */
function min (a, b) {

}

console.log("The mininimum of 5 and 2 is "+min(5,2));
console.log("The minimum of kedi and köpek is "+min("kedi", "köpek"));

/**
 * Return the sum of the numbers from 1 up to (and including) n
 * For example, sum(3) = 1+2+3 = 6
 */
function sum (n) {
   var sum = 0;
   for (var i=1; i<=n; i++) {
      sum += i;
   }
   return sum;
}

console.log("The sum of 1 through 3 is "+sum(3));
console.log("The sum of 1 through 5 is "+sum(5));

/**
 * Limited sum, calcualte the sum of 1 to n but only use multiples of 3 in the sum!
 * For example, sumMultiplesOf3(6) = 3+6 = 9!
 */
function sumMultiplesOf3 (n) {
   var sum = 0;
   for (var i=0; i<=n; i+=3) {
      sum += i;
   }
   return sum;
}

console.log("The sum of 1 to 6 with only multiple of 3 is "+sumMultiplesOf3(6));
console.log("The sum of 1 to 12 with only multiple of 3 is "+sumMultiplesOf3(12));

/**
 * Write converter that converts liras to dollars,
 * Where there are two lira to each dollar.
 */
function lirasToDollars (lira) {
   return lira / 2;
}

console.log("5 lira in us dollars is "+lirasToDollars(5));


// === Intermediate

/**
 * Reverse input
 */
function reverseInput(input) {
   return input.reverse(); //lol
}

/**
 * random integer -- because javascript's random is not very
 * easy to use!
 */
function randInt(lowerBound, upperBound) {
   return Math.floor(Math.random()*(upperBound-lowerBound)) + lowerBound;
}


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
   alert('I do not know how to do that!');
}

/**
 * Timezone converter
 */
function convertTimezone(date, timezone) {

}

/**
 * Cooler currency converter -- takes type of currenty to
 * convert to as well (from liras...or can take
 */
function currencyConverter(liras, convertTo) {

}

// === Advanced

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
