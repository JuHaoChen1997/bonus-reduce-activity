/**
 * EXAMPLE: finds the sum of all numbers in an array.
 *
 * @param {Number[]} nums
 * @returns {Number} - sum of all numbers in the array
 *
 * USE CASE:
 * sum([1, 2, 8]);
 * => 11
 */
function sum(nums) {
  function reducer(total, num) {
    return total + num;
  }
  return nums.reduce(reducer, 0);
}

/**
 * EXAMPLE: finds the word count of each word in a sentence.
 *
 * @param {String} sentence
 * @returns {Object} - Object where each key is a word in the sentence, and it's value is the number of times it appears in the sentence.
 *
 * USE CASE:
 * wordCounts("dog and cat and mouse are friends");
 * => { dog: 1, and: 2, cat: 1, mouse: 1, are: 1, friends: 1 }
 */
function wordCounts(sentence) {
  let words = sentence.split(" ");
  function reducer(wordCountObject, word) {
    if (wordCountObject[word]) {
      wordCountObject[word] += 1;
    } else {
      wordCountObject[word] = 1;
    }
    return wordCountObject;
  }
  return words.reduce(reducer, {});
}

/**
 * Computes the product of all the numbers in an array
 *
 * @param {Number[]} nums
 * @returns {Number} - the product of all numbers in the array
 *
 * USE CASE:
 * product([4, 0.5, 13]);
 * => 26
 */
function product(nums) {}

/**
 * Finds the maximum value in an array of numbers.
 *
 * @param {Number[]} nums
 * @returns {Number} - the largest number in the input array
 *
 * USE CASE:
 * max([-20, 0, -4, 18, 6, 12]);
 * => 18;
 */
function max(nums) {}

/**
 * Given an array of quiz bowl participants, finds the total score for each team.
 *
 * @param {Object[]} participants - each participant has a .name, .team, and .score property
 * @returns {Object} - an object with each team's score
 *
 * USE CASE:
 * let participants = [
 *   { name: "Nora", team: "tigers", score: 2},
 *   { name: "Jordan", team: "meerkats", score: 5},
 *   { name: "Cristobal", team: "tigers", score: 5},
 *   { name: "Cassidy", team: "pangolins", score: 7},
 *   { name: "Teyanna", team: "pangolins", score: 1},
 *   { name: "Sparky", team: "meerkats", score: 3},
 *   { name: "Rayvon", team: "tigers", score: 6},
 *   { name: "Daniel", team: "pangolins", score: 4},
 *   { name: Rebecca", team: "meerkats", score: 4},
 * ];
 * teamScores(participants);
 * => { tigers: 13, meerkats: 12, pengolins: 12}
 */
function teamScores(participants) {}
