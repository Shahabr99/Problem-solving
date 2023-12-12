function countNum(nums) {
  let obj = {};
  let str = new String(nums)

  for(let n of str) {
    let freq = obj[n] || 0;
    obj[n] = freq + 1
  }
  
  return obj
}


function sameFrequency(num1, num2) {
  if(num1.length !== num2.length) return false

  const count1 = countNum(num1);
  const count2 = countNum(num2);

  for(let key in count1) {
    if(count2[key] !== count1[key]) {
      return false
    }
  }
  
  return true;
}



sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false