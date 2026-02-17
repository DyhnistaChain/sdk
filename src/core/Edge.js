import { generateId } from "../utils/idGenerator.js";

export class Edge {
  constructor(from, to, options = {}) {
    this.id = generateId("edge");
    this.from = from;
    this.to = to;
    this.weight = options.weight || 1;
    this.type = options.type || "related";
    this.createdAt = new Date();
  }
}
