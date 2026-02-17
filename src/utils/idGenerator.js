export function generateId(prefix = "node") {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
}
