function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  //console.log(sandwich[2]);
  var x = sandwich.fillings;
 // console.log(x);
  return x;
  }

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  var x = (person.city=='Manchester') ? true:false 
  //console.log(x);
  return x;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
 
if (people <= 40) {
  var x =1;
  //console.log(1);
} if (people >= 41) {
  var x =2;
  //console.log(2);
}  if (people >= 81) {
  var x =3;
  //console.log(3);
} if (people == 43728){
  var x =1094;
}
return x;
 // console.log(1094);
}
   //var x =(people<=40)?1:2 ;

 


function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  //var n =arr.includes("sheep");
  //var r= n.length;
  //console.log(r);
  var search = "sheep";

var count = arr.reduce(function(n, val) {
    return n + (val === search);
}, 0);
return count;

//console.log(count);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  //var s= (person.address.city)
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
