// gcc ./archive/c/leetcode/hashmap.c -o ./archive/c/out/hashmap.out && ./archive/c/out/hashmap.out

#include <stdio.h>
#include <stdlib.h>

int MAX_ENTRIES = 1000;

typedef struct {
    int numEntries;
    int** map;
} MyHashMap;

int** constructMap(int numEntries) {
    // allocate memory for array of arrays (int pointers)
    int** array = malloc(numEntries * sizeof(int*));
    for(int k = 0; k < numEntries; k++) {
        // assign each slot 2 possible spots
        array[k] = malloc(2 * sizeof(int));
    }

    return array;
};


MyHashMap* myHashMapCreate() {
    MyHashMap* hm = malloc(sizeof(MyHashMap));
    hm->numEntries = 0;
    hm->map = constructMap(MAX_ENTRIES);

    return hm;
};

void myHashMapPut(MyHashMap* obj, int key, int value) {
    // try to update existing entry
    for (int i = 0; i < obj->numEntries; i++) {
        if(obj->map[i][0] == key) {
            obj->map[i][1] = value;
            return;
        }
    }

    // add extra slot
    int** temp = (int**) realloc(obj->map, (obj->numEntries * sizeof(int*)) + sizeof(int*));

    if (temp == NULL) {
        // handle error, e.g. print an error message and return
        printf("Failed to allocate memory\n");
        return;
    }

    obj->map = temp;

    // expand slot
    obj->map[obj->numEntries] = malloc(2 * sizeof(int));

    // add new entry if doesn't exist
    obj->map[obj->numEntries][0] = key;
    obj->map[obj->numEntries][1] = value;
    obj->numEntries++;

}

int myHashMapGet(MyHashMap* obj, int key) {
    for (int i = 0; i < obj->numEntries; i++) {
        if(obj->map[i][0] == key) {
            return obj->map[i][1];
        }
    }

    return -1;
}

void myHashMapRemove(MyHashMap* obj, int key) {
    for (int i = 0; i < obj->numEntries; i++) {
        if(obj->map[i][0] == key) {
            // number of entries is 1 less
            obj->numEntries--;

            // create temp map
            int** tempMap = constructMap(obj->numEntries);
            
            // add remaining entries 
            for(int j = 0, k = 0; j < obj->numEntries + 1; j++) {
                if(i == j) continue;
                tempMap[k][0] = obj->map[j][0];
                tempMap[k][1] = obj->map[j][1];
                k++;
            }

            // free the old map
            for (int j = 0; j < obj->numEntries + 1; j++) {
                free(obj->map[j]);
            }
            free(obj->map);

            obj->map = tempMap;

            // stop the loop as we've found and removed the key
            break;
        }
    }
}



void myHashMapFree(MyHashMap* obj) {
    free(obj);
}

int main() {
    MyHashMap* obj = myHashMapCreate();
    myHashMapRemove(obj, 14);
    myHashMapGet(obj, 4);
    myHashMapPut(obj, 7, 3);
    myHashMapPut(obj, 11, 1);
    myHashMapPut(obj, 12, 1);
    myHashMapGet(obj, 7);
    myHashMapPut(obj, 1, 4);
    myHashMapPut(obj, 1, 6);
    myHashMapFree(obj);
}

/**
 * Your MyHashMap struct will be instantiated and called as such:
 * MyHashMap* obj = myHashMapCreate();
 * myHashMapPut(obj, key, value);
 
 * int param_2 = myHashMapGet(obj, key);
 
 * myHashMapRemove(obj, key);
 
 * myHashMapFree(obj);
*/