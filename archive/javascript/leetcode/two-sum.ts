// npm run ts -- ./archive/javascript/leetcode/two-sum.ts
function twoSum(nums: number[], target: number): number[] {
  let indexes: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];
    for (let j = 0; j < nums.length; j++) {
      let second = nums[j];
      if (i == j) {
        continue;
      }

      if (first + second == target) {
        indexes.push(i);
        indexes.push(j);
        return indexes;
      }
    }
  }

  return indexes;
}
