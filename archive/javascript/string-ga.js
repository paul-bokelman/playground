// node ./archive/javascript/color-ga.js

// class representing an individual in the population
class Individual {
  // create a new individual with a random genome or a specified genome
  constructor(genome) {
    this.genome = genome || Individual.#randomGenome();
    this.fitness = this.calculateFitness();
  }

  // generate a random gene from the set of allowed genes
  static #randomGene() {
    return GENES[Math.floor(Math.random() * GENES.length)];
  }

  // generate a random gene sequence (genome) of the same length as target
  static #randomGenome() {
    return Array.from({ length: target.length }, () => Individual.#randomGene()).join("");
  }

  // calculate the fitness of the genome by counting the number of matching genes with the target
  calculateFitness() {
    return this.genome.split("").reduce((acc, gene, i) => acc + (gene === target[i] ? 1 : 0), 0);
  }

  // mutate the genome by randomly changing genes with a probability of MUTATION_RATE for each
  mutate() {
    this.genome = this.genome
      .split("")
      .map((gene) => (Math.random() < MUTATION_RATE ? Individual.#randomGene() : gene))
      .join("");
    this.fitness = this.calculateFitness(); // recalculate fitness after mutation
  }

  // crossover with another individual to create two new individuals (both genome permutations of the parents)
  crossover(partner) {
    const splitIndex = Math.floor(Math.random() * this.genome.length);
    const first_child = new Individual(this.genome.slice(0, splitIndex) + partner.genome.slice(splitIndex));
    const second_child = new Individual(partner.genome.slice(0, splitIndex) + this.genome.slice(splitIndex));

    first_child.mutate(); // mutate the first child
    second_child.mutate(); // mutate the second child

    return [first_child, second_child]; // return both children
  }
}

// class representing the population of individuals
class Population {
  // create a new population with a specified size
  constructor(size) {
    this.size = size; // the size of the population
    this.generation = 0; // the current generation number
    this.individuals = Array.from({ length: size }, () => new Individual()); // add 'size' individuals to the population
    this.sort(); // initially sort the population
  }

  // sort the population by fitness in descending order
  sort() {
    this.individuals.sort((a, b) => b.fitness - a.fitness);
  }

  // evolve the population (crossover & mutation) using elitist truncation selection
  evolve() {
    this.generation++;
    let newPopulation = [];

    const elites = this.individuals.slice(0, Math.floor(this.size / 2)); // keep the top 50% of individuals
    // newPopulation = elites; // add the elites to the new population (carried over to next generation)

    // create new individuals by crossover of the elites
    for (let i = 0; i < elites.length; i = i + 2) {
      const parentA = elites[i]; // select the first parent
      const parentB = elites[i + 1]; // select the second parent

      // crossover the parents to create two new children and add them to the new population
      const [first_child, second_child] = parentA.crossover(parentB);
      newPopulation.push(first_child);
      newPopulation.push(second_child);
    }

    this.individuals = newPopulation.concat(elites); // update the population with the new individuals
    this.sort(); // sort the new population by fitness
  }

  // check if the fittest individual has reached the target
  get reached_solution() {
    return this.individuals[0].fitness === target.length;
  }

  // get the fittest individual in the population
  get fittest() {
    return this.individuals[0];
  }

  // average fitness of the population
  get average_fitness() {
    return this.individuals.reduce((acc, individual) => acc + individual.fitness, 0) / this.size;
  }
}

let target = "HELLO WORLD"; // target string to evolve towards (default: "HELLO WORLD")
const POP_SIZE = 1000; // population size
const MUTATION_RATE = 0.01; // mutation possibility for each gene during mutation
const GENES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789"; // possible genes in genome (allowed characters)

function runGeneticAlgorithm(desiredTarget) {
  target = desiredTarget; // set the target string
  const population = new Population(POP_SIZE); // instantiate the population with the specified size

  let formattedResponse = `Target: ${target}, Population size: ${POP_SIZE}, Mutation rate: ${MUTATION_RATE}\n\n`; // format the response

  // continually evolve the population until a solution is found
  while (!population.reached_solution) {
    population.evolve(); // evolve the population

    formattedResponse += `Gen ${population.generation}: ${population.fittest.genome} (fitness: ${population.fittest.fitness}, average: ${population.average_fitness})\n`; // append the current generation info to the response
  }

  formattedResponse += `\nFound in generation ${population.generation}: ${population.fittest.genome} (fitness: ${population.fittest.fitness}, average fitness: ${population.average_fitness})`;

  return formattedResponse; // return the formatted response
}

console.log(runGeneticAlgorithm("I LOVE CS354")); // run the genetic algorithm with the target string "HELLO WORLD"
