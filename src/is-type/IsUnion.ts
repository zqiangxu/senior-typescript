import { IsNever } from "./IsNever"

type IsUnion<T, U = T> = IsNever<T> extends true 
  ? false
  : // 会遍历
  T extends T
  ? // 如果排除掉当前这个还有属性，那么返回 TRUE
    Exclude<U, T> extends [never]
    ? false
    : true
  : false;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
type case4 = IsUnion<any>; // false
type case5 = IsUnion<unknown>; // false
type case6 = IsUnion<null>; // false
type case7 = IsUnion<keyof {a:number, b:number}>; // true
type case8 = IsUnion<keyof [1, 2, 3]>; // true

export { IsUnion };
