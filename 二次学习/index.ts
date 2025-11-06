// Last of Array

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

// type Last<T extends Array<unknown>> = T extends [...infer R, infer L] ? L : never
type Last<T extends Array<unknown>> = [any, ...T][T['length']]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

// Pop Array
// type Pop<T extends Array<unknown>> = T extends [...infer R, infer L] ? R : never
type Pop<T extends Array<unknown>> = T[]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

// Promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// type PromiseAll = (...args: Promise<unknown>[]) => [args[number] extends Promise]
declare function PromiseAll<T extends readonly any[]>(args: readonly [...T]): Promise<{
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]
}>
// expected to be `Promise<[number, 42, string]>`
// const p = PromiseAll([promise1, promise2, promise3] as const)

// type a = [2,3,4,5,6]
// type c = {
//     [p in keyof a]: a[p]
// }
// const cc:c = [2,3,4,6]

// Type Lookup
interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

// type LookUp<T, Y> = 'type' extends keyof T ?  (Y extends T['type'] ? T : never) : never
type LookUp<T, Y> = T extends { type: Y } ? T : never

type MyDogType = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
const a: MyDogType = {
  type: 'cat',
  breeds: 'Abyssinian'
}

// Trim Left
type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T
type trimmed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

const func = <T>() => {

  return 123 as unknown as T
}

// Capitalize

type MyCapitalize<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T
type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'
const cc: capitalized = 'hello world'