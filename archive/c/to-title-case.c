#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char* to_title_case(char* str) {
    if (str == NULL) return NULL;

    for (int i = 0, len = strlen(str); i < len; i++) {
        if (i == 0 || (str[i-1] == ' ' && str[i] != ' ')) {
            str[i] = toupper((unsigned char)str[i]);
        }
    }

    return str;
}

int main(void) {
    char str[] = "hello world, nice weather we're having!";
    printf("%s\n", to_title_case(str));
    return 0;
}