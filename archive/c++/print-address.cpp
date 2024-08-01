// g++ ./archive/c++/print-address.cpp -o ./archive/c++/out/print-address.out && ./archive/c++/out/print-address.out
#include <stdio.h>

int main() {
    int i = 10;
    // pointer to address where i is stored
    int *p = &i;

    printf("address of i = %p\n", p);
    // when accessing the pointer pointing to the address of i; we can use the * to tell c to get it's value instead of address
    printf("value of i = %d", *p);

    return 0;
}