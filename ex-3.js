function singleNumber(nums) {
  // Start coding here
  let countObj = {}; 
  let r
  for (let i = 0; i < nums.length; i++) {
    if (countObj[nums[i]]) {
      countObj[nums[i]] += 1;
    } else {
      countObj[nums[i]] = 1;
    }
  }
  
  console.log(countObj)

  for (let key in countObj) {
    if (countObj[key] === 1) {
      r = Number(key); 
    }
  }
  return r
}

let result1 = singleNumber([2, 2, 1]);
let result2 = singleNumber([4, 1, 2, 1, 2]);
let result3 = singleNumber([10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 10
console.log(typeof result1); // "number"
