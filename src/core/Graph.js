import { Node } from "./Node.js";
import { Edge } from "./Edge.js";

export class Graph {
  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
  }

  addNode(label, data = {}) {
    const node = new Node(label, data);
    this.nodes.set(node.id, node);
    return node;
  }

  addEdge(fromId, toId, options = {}) {
    if (!this.nodes.has(fromId) || !this.nodes.has(toId)) {
      throw new Error("Invalid node IDs");
    }

    const edge = new Edge(fromId, toId, options);
    this.edges.set(edge.id, edge);
    return edge;
  }

  getNode(id) {
    return this.nodes.get(id);
  }

  getRelated(nodeId) {
    const related = [];

    for (let edge of this.edges.values()) {
      if (edge.from === nodeId) {
        related.push(this.nodes.get(edge.to));
      }
    }

    return related;
  }

  removeNode(nodeId) {
    this.nodes.delete(nodeId);

    for (let [id, edge] of this.edges.entries()) {
      if (edge.from === nodeId || edge.to === nodeId) {
        this.edges.delete(id);
      }
    }
  }

  getAllNodes() {
    return Array.from(this.nodes.values());
  }

  getAllEdges() {
    return Array.from(this.edges.values());
  }
}
