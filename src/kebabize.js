/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
  var resultStr = [];
  for (var i = 0; i < input.length; i++) {
    var currentCharacter = input.charAt(i);
    if (currentCharacter === currentCharacter.toUpperCase()) {
      resultStr += "-" + currentCharacter.toLowerCase();
    } else {
      resultStr += currentCharacter;
    }
  }
  return resultStr;
}

module.exports = kebabize;
