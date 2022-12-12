type IsUnion<T, U = T> = [T] extends [never]
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

export { IsUnion };
