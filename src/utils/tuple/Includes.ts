import { Equal } from '../Equal';

/**
 * 判断元素是否在数组中
 * @version 1.0.0
 */
type Includes<T extends readonly unknown[], U> = T extends readonly [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type R1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Diao'>; // false
type R2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Diao' | 'Wamuu'>; // false
type R3 = Includes<[1, 2, 3], 3>; // true
type R4 = Includes<[unknown, any, undefined], undefined>; // true
type R5 = Includes<[unknown, any, undefined], any>; // true
type R6 = Includes<[unknown, any, never], never>; // true;

const array = [null, undefined, 3];
type R7 = Includes<typeof array, null>; // false;

const readonlyArray = [null, undefined, 3] as const;
type R8 = Includes<typeof readonlyArray, null>; // true

export { Includes };
