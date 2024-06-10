// gcc ./archive/c/leetcode/hashmap-sll.c -o ./archive/c/out/hashmap-sll.out && ./archive/c/out/hashmap-sll.out
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
// init, insert, get, remove, print (view)

#define TABLE_SIZE 10

typedef struct  {
    int key;
    int value;
    struct Node *next;
} Node;

typedef struct {
    unsigned int numEntries;
    struct Node **heads;
} HashMap;

unsigned int hash(int key) {
    return key % TABLE_SIZE;
};

Node* init_node(int key, int value) {
    Node *node = malloc(sizeof(Node));
    node->key = key;
    node->value = value;
    node->next = NULL;
    return node;
}

HashMap* init_hashmap() {
    HashMap* hashmap = malloc(sizeof(HashMap));
    hashmap->heads = (struct Node **)malloc(sizeof(Node*) * TABLE_SIZE);
    for(int i = 0; i < TABLE_SIZE; i++) {
        hashmap->heads[i] = NULL;
    };

    return hashmap;
}

void print_hashmap(HashMap* hashmap) {
    for (int i = 0; i < TABLE_SIZE; i++) {
        if(hashmap->heads[i] == NULL) {
            printf("%d --- <empty>\n", i);
        } else {
            // append characters to array
            bool complete = false;

            printf("%d --- ", i);
            Node* currentNode = (Node*)hashmap->heads[i];
            while (!complete) {
                printf("%d ", currentNode->value);
 
                if (currentNode->next != NULL) {
                    currentNode = (Node*) currentNode->next;
                } else {
                    complete = true;
                }
            }

            printf("\n");
        }
    }

};

void put(HashMap* hashmap, int key, int value) {
    unsigned int index = hash(key);
    Node* currentNode = (Node*)hashmap->heads[index];

    // if no nodes -> create one 
    if (currentNode == NULL) {
        Node* newNode = init_node(key, value);
        hashmap->heads[index] = (struct Node*)newNode;
        return;
    };

    for(;;) {
        // if key exists -> update it's value
        if (currentNode->key == key) {
            currentNode->value = value;
            return;
        } 
        
        // if next node is null and key isn't found -> create new node and append to next of current
        if (currentNode->next == NULL) {
            Node* newNode = init_node(key, value);
            currentNode->next = (struct Node*)newNode;
            return;
        }
        
        currentNode = (Node *)currentNode->next;
    }

}

int get(HashMap* hashmap, int key) {
    unsigned int index = hash(key);
    Node* currentNode = (Node*)hashmap->heads[index];

    for(;;) {
        if (currentNode == NULL) {
            return -1;
        }

        if (currentNode->key == key) {
            return currentNode->value;
        } 
        
        currentNode = (Node *)currentNode->next;
    }

    return -1;

}

// remove (weird name because remove was taken)
void delete(HashMap* hashmap, int key) {
    unsigned int index = hash(key);
    Node* previousNode = (Node*)NULL;
    Node* currentNode = (Node*)hashmap->heads[index];

    for(;;) {
        if (currentNode == NULL) {
            return;
        }

        if (currentNode->key == key) {
            if(previousNode != NULL) {
                previousNode->next = currentNode->next;
                free(currentNode); // is this needed?
                return;
            } else {
                hashmap->heads[index] = NULL;
                return;
            }

        } 
        
        previousNode = currentNode;
        currentNode = (Node *)currentNode->next;
    }

}

int main() {
    HashMap* hashmap = init_hashmap();
    put(hashmap, 2, 5);
    put(hashmap, 12, 7);
    put(hashmap, 12, 8);
    put(hashmap, 13, 9);
    put(hashmap, 3, 16);
    put(hashmap, 1, 3);
    put(hashmap, 16, 12);
    delete(hashmap, 12);
    delete(hashmap, 16);
    put(hashmap, 6, 4);

    print_hashmap(hashmap);

    return 0;
};