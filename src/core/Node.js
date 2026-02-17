import { generateId } from "../utils/idGenerator.js";

export class Node {
  constructor(label, data = {}) {
    this.id = generateId("node");
    this.label = label;
    this.data = data;
    this.createdAt = new Date();
  }
}
