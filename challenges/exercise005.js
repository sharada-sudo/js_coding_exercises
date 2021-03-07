const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
 const currentIndex = nums.indexOf(n);
 //console.log(currentIndex);
const nextIndex = (currentIndex + 1) % nums.length;
//console.log(nextIndex);
return nums[nextIndex];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var countForZero = 0;
  var countForOne = 0;
    
  for (var i = 0, length = str.length; i < length; i++) {
    if (str[i] === '0') {
      countForZero++;
    }
    else {
      countForOne++;
    }
  }
    
  return {
    '0': countForZero,
    '1': countForOne
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return (
    parseFloat(
      n.toString().split('').reverse().join('')* Math.sign(n)
        
        
        
    ) 
  )
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var sum = arrs.flat().reduce(function(a, b){
    return a + b;
}, 0);

return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  function swap(arr) {
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
}
//console.log(swap(arr));
return (swap(arr));
};


const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
    //console.log("haystack.values()"+Object.values(haystack));
    
    
    return Object.values(haystack).includes(searchTerm);
  };


const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required")

      if (str.length === 0) {
        return {};
      } 
      var output = {};
      var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
      var finalString = punctuationless.replace(/\s{2,}/g," ");
      
      var low =finalString.toLowerCase();
      var strArr = low.split(" ");
      //const result = strArr.replace(regex, '');
    //A loop
      for (var i=0; i < strArr.length; i++) {
        var word = strArr[i];
        if (output[word] === undefined) {
          output[word] = 1;
        } else {
          output[word] += 1;
        }
        
      }
    
     return output;
      }


module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
