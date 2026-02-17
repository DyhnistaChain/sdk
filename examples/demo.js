import { Graph } from "../index.js";
import { Query } from "../src/api/Query.js";

const memory = new Graph();

const ai = memory.addNode("AI");
const memoryNode = memory.addNode("Memory");
const graphNode = memory.addNode("Graph");

memory.addEdge(ai.id, memoryNode.id, { weight: 0.9 });
memory.addEdge(memoryNode.id, graphNode.id, { weight: 0.8 });

const query = new Query(memory);

console.log("Related to AI:");
console.log(memory.getRelated(ai.id));

console.log("\nTraverse from AI (depth 2):");
console.log(query.traverse(ai.id, 2));
