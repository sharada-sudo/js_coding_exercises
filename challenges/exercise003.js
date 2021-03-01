function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  //var result = Math.sqrt(nums);
  //console.log(result);
  return nums.map(v => Math.pow(v, 2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = "";
  for(let i = 0 , len = words.length; i < len; i++) {
      let currentStr = words[i];
      let tempStr = currentStr.toLowerCase();
      if(i != 0) {
	
        // convert first letter to upper case (the word is in lowercase) 
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);

       }
      
       result +=tempStr;
      
    }
      return result;
}


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  //var g = people.flat();
 
  console.log(table.people);

//var count = arr.reduce(function(n, val) {
  //  return n + (val === search);
//}, 0);
//return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var z = arr1.filter(function(val) {
    return arr2.indexOf(val) != -1;
  });
  
  return z.sort((a, b) => a - b);
  
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
