// npm run ts -- ./archive/javascript/leetcode/hashmap.ts

class MyHashMap {
  map: number[][] = [];

  constructor() {}

  put(key: number, value: number): void {
    for (let i = 0; i < this.map.length; i++) {
      // check if key exists in map
      if (this.map[i][0] == key) {
        // if it does then update the value
        this.map[i][1] = value;
        return;
      }
    }
    // if value doesn't exist -> append pair
    this.map.push([key, value]);
  }

  get(key: number): number {
    // console.log(this.map)
    for (let i = 0; i < this.map.length; i++) {
      // if key matches -> return it's value
      if (this.map[i][0] == key) {
        return this.map[i][1];
      }
    }

    // if not found -> return -1
    return -1;
  }

  remove(key: number): void {
    let newMap: number[][] = [];
    for (let i = 0; i < this.map.length; i++) {
      // if key matches -> remove pair
      if (this.map[i][0] != key) {
        newMap.push(this.map[i]);
      }
    }
    this.map = newMap;
  }
}

const hm = new MyHashMap();
console.log(hm.get(1));
hm.put(1, 23);
console.log(hm.get(1));
hm.remove(1);
console.log(hm.get(1));
