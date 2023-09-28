// npm run ts -- ./archive/sort-leaderboard.ts

const data = [
  {
    id: "clmmirdp60002vtgz875jl5ku",
    username: "Travis Medley",
    wins: 5,
    losses: 8,
    winPercentage: 38.46,
  },
  {
    id: "clmmn86xu0000vtrf60udnj5f",
    username: "Sam Koenig",
    wins: 1,
    losses: 0,
    winPercentage: 100,
  },
  {
    id: "clmmipkv20000vtgzofu7herw",
    username: "Paul Bokelman",
    wins: 18,
    losses: 6,
    winPercentage: 75,
  },
];

// check win percentage

const sorted = data
  .sort((u1, u2) => {
    if (u1.wins === u2.wins) {
      if (u1.winPercentage > u2.winPercentage) return 1;
      return -1;
    }
    if (u1.wins > u2.wins) return 1;
    return -1;
  })
  .reverse();

console.log(sorted);
