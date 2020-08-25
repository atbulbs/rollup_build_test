/**
 * @description 这是函数A
 */

export async function A(str: string): Promise<string> {
  return `AAA` + C(str)
}

/**
 * @description 这是函数B
 */
export function B(str: string): Promise<string> {
  return Promise.resolve(`BBB` + C(str))
}

/**
 * @description 这是函数B
 */
export function C(str: string) {
  return `CCC` + str
}

export default {
  A,
  B,
}
