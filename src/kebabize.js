/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
  for (var i = 0; i < input.length; i++) {
    var newList;
    if (input.charAt(i) === input.charAt(i).toUpperCase()) {
      newList =
        input.slice(0, i) +
        "-" +
        input.charAt(i).toLowerCase() +
        input.slice(i + 1);
    }
  }
  return newList;
}

module.exports = kebabize;
