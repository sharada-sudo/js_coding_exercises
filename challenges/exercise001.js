function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  //console.log(word.substring(0, 1).toUpperCase() + word.substring(1, word.length));
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return (firstName.substring(0,1 )   + "." + lastName.substring(0,1));
  //console.log(firstName.split(' '));
  //console.log(firstName.charAt(0) + lastName.charAt(0));
  //console.log(lastName.substring(0,1));
 //return firstName.substring(0,1);
 //console.log(firstName.split(' ') + lastName.split(' '));
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  //console.log(originalPrice);
 //console.log(vatRate);
      var c = (vatRate*originalPrice).toFixed(2)/100;  
       return c + originalPrice

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  console.log(originalPrice);
  console.log(reduction);
  var afterPrice =(originalPrice*reduction)/100;
  return originalPrice - afterPrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  //var length =str.length;
  //var index = length/2;
 // console.log(str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2));
  return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var splitString =word.split("");
  //console.log(splitString);
  var reverseArray = splitString.reverse();
  //console.log(reverseArray);
  var joinArray = reverseArray.join("");
  return joinArray;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  //var singleword= words.split("").reverse().join(""); //its showing Split is not a function 
  
  for (var i = words.length - 1; i >= 0; i--) {
    var newString; 
     newString += words[i].split(","); // or newString = newString + str[i];
  }
  return newString;
  
  }

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var search = users.type =="Linux";
  console.log(search);
  //var count = users.reduce(function(n, val) {
   // return n + (val === search);
//}, 0);
//console.log(count);
//return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const sum = scores.reduce((a, b) => a + b, 0);
   var arrAvg = sum/scores.length ;
    return arrAvg;

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
