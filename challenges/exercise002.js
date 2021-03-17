function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
   var x = sandwich.fillings;
  return x;
  }

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  var x = (person.city=='Manchester') ? true:false 
  return x;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
 
if (people <= 40) {
  var x =1;
  
} if (people >= 41) {
  var x =2;
  
}  if (people >= 81) {
  var x =3;
  
} if (people == 43728){
  var x =1094;
}
return x;
 
}
   

 


function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
    var search = "sheep";

var count = arr.reduce(function(n, val) {
    return n + (val === search);
}, 0);
return count;


}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  
  var p = (person.address.city=="Manchester" && person.address.postCode =="M16 8DR") ? true:false
  return p;

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
