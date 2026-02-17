export class MemoryUpdater {
  static strengthenEdge(edge, value = 0.1) {
    edge.weight += value;
  }

  static weakenEdge(edge, value = 0.05) {
    edge.weight = Math.max(0, edge.weight - value);
  }
}
