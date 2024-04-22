/**
 * This is a simple module with a single function that adds two numbers together.
 * @module
 */

/**
 * Add two numbers together.
 * 
 * @param a number to add
 * @param b number to add to a
 * @returns sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
