let x = '123456789';
let y = '987654321';
   function getSum(x, y){
      let long = Math.min(x.length, y.length);
      let rest = Math.max(x.length, y.length) - long;
      let max, min;
      if (x.length >= y.length){
         max = x;
         min = y;
      } else {
         max = y;
         min = x;
      }
      max = max.split('').reverse();
      min = min.split('').reverse();
      result = [];
      let value,
          z = 0,
          i;
      for(i = 0; i < min.length; i++){
         value = parseInt(min[i]) + parseInt(max[i]) + z;
         result.push(value % 10);    
         z = Math.floor(value / 10);     
      }
      for(i; i < max.length; i++){
         value = parseInt(max[i]) + z;
         result.push(value % 10);
         z = Math.floor(value / 10);
      }      
      if (z != 0) result.push(z);
      return result.reverse().join('');
   }
   console.log(getSum(x, y));