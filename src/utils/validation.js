export function validateDag(nodes, edges) {
  if (nodes.length < 2) return { valid: false, reason: "Less than 2 nodes" };

  const adj = {};
  nodes.forEach(n => adj[n.id] = []);
  edges.forEach(e => {
    if (e.source !== e.target) adj[e.source].push(e.target);
  });

  const visited = {};
  const recStack = {};

  function dfs(v) {
    visited[v] = true;
    recStack[v] = true;
    for (let neighbor of adj[v]) {
      if (!visited[neighbor] && dfs(neighbor)) return true;
      else if (recStack[neighbor]) return true;
    }
    recStack[v] = false;
    return false;
  }

  for (let node of nodes) {
    if (!visited[node.id]) {
      if (dfs(node.id)) return { valid: false, reason: "Cycle detected" };
    }
  }

  for (let node of nodes) {
    const connected = edges.some(e => e.source === node.id || e.target === node.id);
    if (!connected) return { valid: false, reason: `Node ${node.data.label} is not connected` };
  }

  return { valid: true };
}
