// npm run ts -- ./archive/javascript/leetcode/hashmap-sll.ts

class ListNode {
  key: string;
  value: number;
  next: ListNode | null;

  constructor(key: string, value: number, next?: ListNode) {
    this.key = key;
    this.value = value;
    this.next = next ?? null;
  }

  update(key?: string, value?: number, next?: ListNode): void {
    this.key = key ?? this.key;
    this.value = value ?? this.value;
    this.next = next ?? null;
  }
}

class Hashmap {
  private SIZE = 10;
  heads: (ListNode | null)[];

  constructor() {
    this.heads = [];
    for (let i = 0; i < this.SIZE; i++) {
      this.heads[i] = null;
    }
  }

  private hash(key: string): number {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return sum % this.SIZE;
  }

  put(key: string, value: number) {
    let index = this.hash(key);
    let currentNode = this.heads[index];

    if (currentNode == null) {
      this.heads[index] = new ListNode(key, value);
      return;
    }

    for (;;) {
      if (currentNode.key == key) {
        currentNode.update(key, value);
        return;
      }

      if (currentNode.next == null) {
        currentNode.next = new ListNode(key, value);
        return;
      }

      currentNode = currentNode.next;
    }
  }

  get(key: string) {
    let index = this.hash(key);
    let currentNode = this.heads[index];

    for (;;) {
      if (currentNode == null) return -1;
      if (currentNode.key == key) return currentNode.value;
      currentNode = currentNode.next;
    }
  }

  delete(key: string) {
    let index = this.hash(key);
    let previousNode = null as ListNode | null;
    let currentNode = this.heads[index];

    for (;;) {
      if (currentNode == null) {
        return;
      }

      if (currentNode.key == key) {
        if (previousNode) {
          previousNode.next = currentNode.next;
          return;
        } else {
          this.heads[index] = null;
          return;
        }
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  print() {
    for (let i = 0; i < this.SIZE; i++) {
      let currentNode = this.heads[i];
      let row = `${i} ---`;

      if (currentNode != null) {
        for (;;) {
          if (currentNode == null) {
            break;
          }

          row += ` ${currentNode.value}`;
          currentNode = currentNode.next;
        }
      } else {
        row += " <empty>";
      }

      console.log(row);
    }
  }
}

function test() {
  let hashmap = new Hashmap();

  hashmap.put("test", 12);
  hashmap.put("test", 14);
  hashmap.put("gosaz", 9);
  console.log("getting 'gosaz':", hashmap.get("gosaz"));
  hashmap.put("random", 16);
  hashmap.put("tandem", 4);
  hashmap.delete("random");
  hashmap.print();
}

test();
