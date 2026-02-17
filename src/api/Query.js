export class Query {
  constructor(graph) {
    this.graph = graph;
  }

  findByLabel(label) {
    return this.graph
      .getAllNodes()
      .filter(node => node.label === label);
  }

  traverse(startId, depth = 1) {
    let visited = new Set();
    let result = [];

    const dfs = (nodeId, currentDepth) => {
      if (currentDepth > depth || visited.has(nodeId)) return;

      visited.add(nodeId);
      result.push(this.graph.getNode(nodeId));

      const related = this.graph.getRelated(nodeId);
      related.forEach(node => dfs(node.id, currentDepth + 1));
    };

    dfs(startId, 0);
    return result;
  }
}
