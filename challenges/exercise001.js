function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
     return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return (firstName.substring(0,1 )   + "." + lastName.substring(0,1));
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
      // var c = (vatRate*originalPrice).toFixed(2)/100;  
      // return c + originalPrice
       return Number ((originalPrice + originalPrice * vatRate/100).toFixed(2));

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Number ((originalPrice - originalPrice * reduction/100).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
    return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var splitString =word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let allreverseWords = [];
  words.forEach(function(word){
    allreverseWords.push(word.split("").reverse().join(""));

  });

  return allreverseWords;

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  const linuxUsers = users.reduce((acc, curr) => {

    return curr.type === "Linux" ? acc + 1 : acc;

  }, 0);

  return linuxUsers;
  
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const totalScores = scores.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  let meanScores = totalScores / scores.length;

  if (meanScores % 1 !== 0) {
    meanScores = Number(meanScores.toFixed(2));
  }
  return meanScores;
}
 

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0){
    var x="fizz";
  }
    if (n % 5 == 0){
      var x="buzz";
    }
    if (n % 5!==0 && n % 3 !== 0){
       var x =4 ;
    }
    if (n % 5==0 && n % 3 == 0){
      var x ="fizzbuzz"
    }
    return x;
    

    
}



module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
