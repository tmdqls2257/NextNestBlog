export function classNameJoiner(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
