// gcc ./archive/c/leetcode/two-sum.c -o ./archive/c/out/two-sum.out && ./archive/c/out/two-sum.out

#include <stdio.h>
#include <stdlib.h>

#define NUMS_SIZE 6;

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = 0; j < numsSize; j++) {
            if(nums[i] + nums[j] == target && i != j) {
                *returnSize = 2;
                int* result = (int*)malloc(*returnSize * sizeof(int));
                result[0] = i;
                result[1] = j;
                return result;
            };
        };
    };
    *returnSize = 0;
    return NULL;
};

int main() {
    int numsSize = 3;
    int target = 6;
    int* nums = (int*)malloc(numsSize * sizeof(int));
    nums[0] = 3;
    nums[1] = 2;
    nums[2] = 4;
    // nums[3] = 8;
    // nums[4] = -2;
    // nums[5] = 7;
    int returnSize;
    int* out = twoSum(nums, numsSize, target, &returnSize);
    free(nums);
    printf("%d, %d", out[0], out[1]);
};