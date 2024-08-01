// npm run ts -- ./archive/javascript/leetcode/binary-search.ts

// 1. get middle index
// 2. check highest of left list and lowest of right list against target
// 3. repeat until found or all elements traversed

function recursive_bs_search(nums: number[], target: number): number {
  let middle_index: number = nums.length / 2;

  // if there is only 1 element left and it's not the target, return
  if (nums.length == 1) {
    if (nums[0] != target) return -1;
    return nums[0];
  }

  let [left, right] = [nums.slice(0, middle_index), nums.slice(middle_index, nums.length)];

  if (left[left.length - 1] >= target) {
    return recursive_bs_search(left, target);
  } else {
    return recursive_bs_search(right, target);
  }
}

function iterative_bs_search(nums: number[], target: number): number {
  let middle_index = Math.round(nums.length / 2);
  let target_index = middle_index;

  while (true) {
    middle_index = Math.round(nums.length / 2);
    // only 1 element ->
    if (nums.length == 1) {
      // element isn't target -> element not found (-1)
      if (nums[0] != target) return -1;
      // element is target -> return index
      return target_index;
    }

    // get left and right side of array (relative to middle index )
    let [left, right] = [nums.slice(0, middle_index), nums.slice(middle_index, nums.length)];

    // check which side element is on
    if (left[left.length - 1] >= target) {
      // element is on right side -> update nums and index
      nums = left;
    } else {
      nums = right;
    }
  }
}

function bs_search(nums: number[], target: number) {
  let lower_bound = 0;
  let upper_bound = nums.length - 1;

  while (lower_bound <= upper_bound) {
    // lower mid (favors lower half)
    let middle = lower_bound + Math.floor((upper_bound - lower_bound) / 2);

    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] < target) {
      lower_bound = middle + 1;
    } else {
      upper_bound = middle - 1;
    }
  }
  return -1;
}

// console.log(recursive_bs_search([-1, 0, 3, 5, 9, 12], 3));
// console.log(iterative_bs_search([-1, 0, 3, 5, 9, 12], 9));
console.log(bs_search([-1, 0, 3, 5, 9, 12], 12));
