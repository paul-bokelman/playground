// gcc ./archive/c/leetcode/score-of-string.c -o ./archive/c/out/score-of-string.out && ./archive/c/out/score-of-string.out
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int scoreOfString(char* s) {
    int score = 0;
    int length = strlen(s);
    for (int i = 0; i < length - 1; i++) {
        score += abs((int)s[i] - (int)s[i+1]);
    }
    return score;
};

int main() {
    // char* s = "hello";
    char* s = "zaz";
    int score = scoreOfString(s);
    printf("%d", score);
    return 0;
}