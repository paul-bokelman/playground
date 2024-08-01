// npm run ts -- ./archive/javascript/leetcode/average-levels-bt.ts

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function averageOfLevels(root: TreeNode | null): number[] {
  let averages: number[] = [];

  if (root == null) {
    return averages;
  }

  let queue = [root];
  let visited = new Set<number>();

  let children = [];
  let currentSum = 0;
  let currentNumNodes = 0;

  while (queue.length > 0) {
    for (let child of children) {
      // if(visited.has(child))
    }

    // get next node
    let node = queue.shift();

    // if no current node -> exit loop
    if (!node) break;

    // if already visited -> continue to next node
    if (visited.has(node.val)) {
      continue;
    }

    if (node.left != null) {
      queue.push(node.left);
    }

    if (node.right != null) {
      queue.push(node.right);
    }
  }

  return averages;
}
