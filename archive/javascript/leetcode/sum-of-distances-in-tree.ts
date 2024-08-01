// npm run ts -- ./archive/javascript/leetcode/sum-of-distances-in-tree.ts

// given undirected graph, calculate sum of distances from each vertex to each other vertex

// recursively calculate root distance sum
function calculateRootDistanceSum(root: number, edges: number[][], depth: number = 1): number {
  let sum = 0;

  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];

    // if visited, skip
    if (edge[2] == 1) continue;

    // if root is included in and unvisited -> mark as visited and increment sum
    if (edge[0] == root || edge[1] == root) {
      // mark as visited and increment sum
      edges[i][2] = 1;
      sum += 1 * depth;

      let child = edge.slice(0, 2).filter((x) => x != root)[0];
      sum += calculateRootDistanceSum(child, edges, depth + 1);
    }
  }

  return sum;
}

// calculate sums for each root (vertex)
function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  let sums: number[] = [];

  for (let root = 0; root < n; root++) {
    // copy of edges for individual traversals with reference
    let edgesWithConfirmation: number[][] = [];
    // index 2 checks if edge has been traversed (1 = visited, 0 = unvisited)
    for (let i = 0; i < edges.length; i++) {
      edgesWithConfirmation.push([...edges[i], 0]);
    }

    let sum = calculateRootDistanceSum(root, edgesWithConfirmation);
    sums.push(sum);
  }

  return sums;
}

let sumOfDistances = sumOfDistancesInTree(6, [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
  [2, 5],
]);

console.log(sumOfDistances);
