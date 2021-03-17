function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  var sss = [];
  for (var k = 0; k < nums.length; k++) { 
    if(nums[k]<1){
      sss.push(nums[k]);
       }
   
   }
   return sss;
      
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(name => name.charAt(0) === char) 
  
}
  
function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const findVerb = words.filter((name) => name.startsWith("to "));
  
  return findVerb ;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var filtered = nums.filter(function (item) {
    return (parseInt(item) == item);
  });
  
  return filtered;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var x= users[0].data.city.displayName;
  var y = x + "," + users[1].data.city.displayName;
  var z = y + "," + users[2].data.city.displayName;
  var finalResult = z + "," + users[3].data.city.displayName;
  return finalResult.toString().split(","); 
  
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  squr = nums.map((x) => parseFloat(Math.sqrt(x).toFixed(2)));
 
  return squr;
  
}
  
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
      
  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
    var largestNumber = [0,0,0,0,0];
    for(var arrayIndex = 0; arrayIndex < triangles.length; arrayIndex++) {
     for(var subArrayIndex = 0; subArrayIndex < triangles[arrayIndex].length; subArrayIndex++) {
        if(triangles[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = triangles[arrayIndex][subArrayIndex];
         }
     }
  }
  
  return largestNumber;
 }


module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
