// node ./archive/javascript/map.js

let actors = new Map(); // Code will be tested with different actors

actors.set("Orlando Bloom", { movie: "The Lord of the Rings", role: "Legolas" });
actors.set("Keira Knightley", { movie: "Pirates of the Caribbean", role: "Elizabeth Swann" });
actors.set("Jessica Chastain", { movie: "Interstellar", role: "Murph" });
actors.set("Robin Wright", { movie: "Forrest Gump", role: "Jenny Curran" });

function actorInfo(actorName, actors) {
  if (actors.has(actorName)) {
    console.log(`${actorName} plays ${actors.get(actorName).role} in ${actors.get(actorName).movie}]`);
  } else {
    console.log("Actor not found");
  }
}

actorInfo("Orlando Bloom", actors);
