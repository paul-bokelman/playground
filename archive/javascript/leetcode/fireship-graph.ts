// npm run ts -- ./archive/javascript/leetcode/fireship-graph.ts

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// the graph
const adjacencyList = new Map();

// add node
function addNode(airport: string) {
  adjacencyList.set(airport, []);
}

// add edge
function addEdge(origin: string, destination: string) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// create graph
airports.forEach(addNode);
routes.forEach(([origin, destination]) => addEdge(origin, destination));

// BFS Breadth First Search (find all routes and identify most efficient) O(V+E), O(N) complexity
function bfs(start: string, target: string) {
  let queue = [start];
  let visited = new Set();
  let currentPath = `${start}->`;

  // continue until there is nothing left to search
  while (queue.length > 0) {
    // get current node & remove from top of queue
    let airport = queue.shift();

    // get children
    let destinations = adjacencyList.get(airport);

    for (let destination of destinations) {
      if (destination == target) {
        console.log(`${currentPath}${target}`);
        currentPath = `${start}->`;
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        currentPath += `${destination}->`;
      }
    }
  }
}

// bfs("PHX", "BKK");

// depth first search (find first route) O(V+E), O(N) complexity
function dfs(start: string, target: string, visited = new Set()) {
  let destinations = adjacencyList.get(start);

  for (let destination of destinations) {
    if (visited.has(destination)) continue;

    if (destination == target) {
      console.log(`Found ${target}`);
    } else {
      console.log(`Via ${destination}`);
    }

    visited.add(destination);
    dfs(destination, target, visited);
  }
}

dfs("PHX", "BKK");
// PHX
// LAX
// MEX
// DFS found BKK
// JFK
// OKC
// HEL
// LOS
