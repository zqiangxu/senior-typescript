import { IsNever } from './IsNever';

/**
 * 判断是否为 Tuple 类型
 * @version 1.0.0
 */

/**
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 * 元组与数组在类型判读上的区别是：如果是元组，则 length 返回的是固定的数组大小，数组则返回的是 number
 * @see {@link https://www.tslang.cn/docs/handbook/basic-types.html}
 */

type Arr = number[];

// => number
type ArrayLength = Arr['length'];

type Tuple = [number, string];

// => 固定的长度. 2
type TupleLength = Tuple['length'];

type IsTuple<T> = IsNever<T> extends true
  ? false
  : T extends readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false;

type R1 = IsTuple<[number]>; // true
type R2 = IsTuple<readonly [number]>; // true
type R3 = IsTuple<number[]>; // false
type R4 = IsTuple<never>; // false
type R5 = IsTuple<[1, 2, 3]>; // true
type R6 = IsTuple<[never]>; // true
type R7 = IsTuple<[undefined]>; // true
type R8 = IsTuple<[null]>; // true
type R9 = IsTuple<never[]>; // false
type R10 = IsTuple<any[]>; // false

export { IsTuple };
