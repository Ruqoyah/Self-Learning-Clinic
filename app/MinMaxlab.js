'use strict'

module.exports = {

   findMinMax: function (list){
   var small = list[0];
   var big = arr[0];
   for(var i=1; i<list.length; i++){
       if(list[i] < small){
           small = list[i];
       }
       else if (list[i] > big){
           big = list[i];
       }
   }
   if (small == big) {
      return [big];
   }
     else {
       return [small, big];
     }
}