// gcc ./archive/c/pointer-arithmetic.c -o ./archive/c/out/pointer-arithmetic.out && ./archive/c/out/pointer-arithmetic.out
#include <stdio.h>

int main() {
    int test[5] = {1, 2, 3, 4, 5};
    int *p = (int*) &test;

    for(int i = 0; i < 5; i++) {
        printf("value at index %d = %d\n", i, *(p + i));
        // printf("value at index %d = %d\n", i, test[i]); // same
        printf("address at index %d = %p\n", i, (p+i));
        // printf("address at index %d = %p\n", i, &test[i]); // same 
    };



    return 0;
}