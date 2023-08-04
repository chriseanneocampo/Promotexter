var app = angular.module("LetterCombinations", []);
app.controller("LetterCombinationsController", function () {

  /** 
  *  Function to get letter combinations
  *  that a phone button from 2-9 represents
  *  @param {String} digits - input data/numbers
  */
  function getLetterCombinations(digits) {

    var phoneNum = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z'],
    }
    var isValid = true;

    //Validating if every input is between 2-9
    var arrDigits = digits.split("");
    arrDigits.forEach(x => {
      if (!phoneNum.hasOwnProperty(x)) {
        isValid = false;
      }
    });

    if (digits && isValid) {
      var result = [""];

      for (let digit of digits) {
        var letters = phoneNum[digit];
        var newCombination = [];

        while (result.length > 0) {
          var currentLetter = result.shift();

          for (let letter of letters) {
            newCombination.push(currentLetter + letter);
          }
        }
        result.push(...newCombination);
      }
      return result;
    } else {
      return [];
    }
  }

  //Testing of Function
  var inputDigits1 = '23';
  var combinations1 = getLetterCombinations(inputDigits1);
  console.log(`Input: '${inputDigits1}'
Output: ${combinations1}`);

  var inputDigits2 = '';
  var combinations2 = getLetterCombinations(inputDigits2);
  console.log(`Input: '${inputDigits2}'
Output: ${combinations2}`);

  var inputDigits3 = '2';
  var combinations3 = getLetterCombinations(inputDigits3);
  console.log(`Input: '${inputDigits3}'
Output: ${combinations3}`);

  var inputDigits3 = '1';
  var combinations3 = getLetterCombinations(inputDigits3);
  console.log(`Input: '${inputDigits3}'
Output: ${combinations3}`);

});
