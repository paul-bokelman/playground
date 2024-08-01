// g++ ./archive/c++/leetcode/hashmap-sll.cpp -o ./archive/c++/out/hashmap-sll.out && ./archive/c++/out/hashmap-sll.out
#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include <string>

using namespace std;

// Node class for single linked list
class Node {
    private: 
        int key; // key relating to value
        int value; // value of node (related to key)
        Node *next; // reference to next node 
    public:
        Node(int key, int value, Node *next) {
            this->key = key;
            this->value = value;
            this->next = next;
        };

        // get next node
        Node* getNext() {
            return next;
        }
        // check if there is a next node 
        bool hasNext() {
            return this->next != NULL;
        };
        // get this nodes key
        int getKey() {
            return this->key;
        }
        // get this nodes value
        int getValue() {
            return this->value;
        }
        // set this nodes key
        void setKey(int key) {
            this->key = key;
        };
        // set this nodes value
        void setValue(int value) {
            this->value = value;
        }

        void setNext(Node *node) {
            this->next = node;
        }
};

class Hashmap {
    private:
        int MAX_SIZE; // the size of the hashmap (overflows chain)
        Node **heads; // array of Node references

    int hash(int key) {
        return key % this->MAX_SIZE;
    }

    public:
        Hashmap(int MAX_SIZE) {
            this->MAX_SIZE = MAX_SIZE;

            // allocate memory for x amount of heads
            this->heads = (Node**)malloc(this->MAX_SIZE * sizeof(Node*));

            // assign heads to null
            for(int i = 0; i < this->MAX_SIZE; i++) {
                this->heads[i] = NULL;              
            }
        }

        void insert(int key, int value) {
            // get head of current index
            int index = this->hash(key);
            Node *currentNode = this->heads[index];

            // if there are no nodes just add as head
            if(currentNode == NULL) {
                this->heads[index] = new Node(key, value, NULL);
                return;
            }

            for(;;) {
                // if node has key -> replace value
                if(currentNode->getKey() == key) {
                    currentNode->setValue(value);
                    return;
                }

                // if last node and doesn't contain key -> assign next new node
                if(!currentNode->hasNext()) {
                    currentNode->setNext(new Node(key, value, NULL));
                    return;
                }
            }
        }

        // get a value given a key
        int get(int key) {
            // get head of current index (where key exists)
            int index = this->hash(key);
            Node *currentNode = this->heads[index];

            for(;;) {
                // if head is null key does not exist, return -1;
                if(currentNode == NULL) {
                    return -1;
                }
                // if key is found then return its value 
                if(currentNode->getKey() == key) {
                    return currentNode->getValue();
                }

                // move onto next node
                currentNode = currentNode->getNext();
            }

            // should never be reached but if it is return -1;
            return -1;
        }

        void remove(int key) {
            // get head of current index (where key exists)
            int index = this->hash(key);
            Node *previousNode = NULL;
            Node *currentNode = this->heads[index];

            for(;;) {
                // if key doesn't exist in chain -> nothing to remove
                if(currentNode == NULL) {
                    return;
                }

                // if match -> skip current node (match) in chain 
                if(currentNode->getKey() == key) {
                    // if only 1 node -> remove differently 
                    if(previousNode == NULL) {
                        // if other nodes -> shift head
                        if(currentNode->hasNext()) {
                            this->heads[index] = currentNode->getNext();
                        // otherwise set to NULL
                        } else {
                            this->heads[index] = NULL;
                        }
                        return;
                    }

                    // otherwise remove from chain
                    previousNode->setNext(currentNode->getNext());
                    return;
                }

                previousNode = currentNode;
                currentNode = currentNode->getNext();
            }

        }

        void print() {
            for(int i = 0; i < this->MAX_SIZE; i++) {
                Node *currentNode = this->heads[i];
                printf("%d ---", i);

                if(currentNode == NULL) {
                    printf(" <empty>\n");
                    continue;
                }

                string values = "";
                for(;;) {
                    if(currentNode == NULL) {
                        break;
                    }   
                    string str = " ";
                    str.append(to_string(currentNode->getValue()));
                    values.append(str);
                    currentNode = currentNode->getNext();
                }

                printf("%s\n", values.c_str());

            }
        }

};

int main() {
    int MAX_SIZE = 10;

    Hashmap hashmap(MAX_SIZE);

    hashmap.insert(2, 4);
    hashmap.get(2);
    printf("get '2': %d\n", hashmap.get(2));
    printf("get '7': %d\n", hashmap.get(2));
    hashmap.remove(2);
    printf("get '2' after remove: %d\n", hashmap.get(2));
    hashmap.insert(7, 1);
    hashmap.insert(17, 14);
    hashmap.insert(6, 2);

    printf("get '7': %d\n", hashmap.get(7));
    hashmap.remove(7);
    printf("get '17' after remove '7': %d\n\n", hashmap.get(17));

    hashmap.print();

    return 0;
}