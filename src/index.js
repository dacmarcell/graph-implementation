class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencyList = new Map();

    for (let i = 0; i < vertices.length; i++) {
      this.adjacencyList.set(vertices[i], []);
    }
  }

  addValues(origin, end) {
    const originAdjacencyList = this.adjacencyList.get(origin);
    originAdjacencyList.push(end);
    const endAdjacencyList = this.adjacencyList.get(end);
    endAdjacencyList.push(origin);
  }

  isPair() {
    for (let i = 0; i < this.vertices.length; i++) {
      const vertice = this.vertices[i];
      if (this.adjacencyList.get(vertice).length % 2 !== 0) {
        return false;
      }
    }
    return true;
  }

  grade(vertice) {
    return this.adjacencyList.get(vertice).length;
  }

  isEulerian() {
    if (!this.isPair()) {
      return false;
    }
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.grade(this.vertices[i]) === 0) {
        return false;
      }
    }
    return true;
  }
}

const input = ["1", "2", "3", "4", "5", "6"];
const graph = new Graph(input);

//Not Eulerian
/* graph.addValues("1", "2");
graph.addValues("1", "3");
graph.addValues("2", "3");
graph.addValues("3", "4");
graph.addValues("4", "5"); */

//Euelerian
graph.addValues("1", "2");
graph.addValues("2", "3");
graph.addValues("3", "4");
graph.addValues("4", "5");
graph.addValues("5", "6");
graph.addValues("6", "1");

const isEulerian = graph.isEulerian();

if (isEulerian) {
  console.log("O grafo é euleriano.");
} else {
  console.log("O grafo não é euleriano.");
}
