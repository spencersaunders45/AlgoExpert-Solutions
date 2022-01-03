function twoNumberSum(array, targetSum) {
   let p1 = 0;
   let p2 = 1;
   let sum = [];
   while(p1 < array.length){
      if(p2 >= array.length){
         p1++;
         p2 = p1 + 1;
      }
      if(array[p1] + array[p2] === targetSum){
         sum.push(array[p1]);
         sum.push(array[p2]);
         return sum;
      }
      p2++;
   }
   return sum;
}