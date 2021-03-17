function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
    return nums.map(v => Math.pow(v, 2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = "";
  for(let i = 0 , len = words.length; i < len; i++) {
      let currentStr = words[i];
      let tempStr = currentStr.toLowerCase();
      if(i != 0) {
	    tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);

       }
      
       result +=tempStr;
      
    }
      return result;
}


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  const subjects = people.reduce((acc, curr) => {
    return acc + curr.subjects.length;
  }, 0);

  return subjects;
}


function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true;
    }
  }

  return false;
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const duplicatesNum = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let a = 0; a < arr2.length; a++) {

      if (arr1[i] === arr2[a]) {
        if (!duplicatesNum.includes(arr1[i])) {
          duplicatesNum.push(arr1[i]);
        }
      }

    }
  }
  return duplicatesNum.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
