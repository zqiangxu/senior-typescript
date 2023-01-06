type IsNever<T> = [T] extends [never] ? true : false;

// 需要注意 never 不能直接使用 T extends never
type IsMatch<T, Element> = [T] extends [Element] ? true : T extends Element ? true : false;

type IM1 = IsMatch<never, never>; // true
type IM2 = IsMatch<never, never | null>; // true
type IM3 = IsMatch<null, never | null>; // true
type IM4 = IsMatch<null | undefined, undefined | null>; // true
type IM5 = IsMatch<null, never>; // false
type IM6 = IsMatch<undefined, never>; // false
type IM7 = IsMatch<null | undefined | never, never | undefined | null>; // true

type FilterOut<T extends readonly any[], ExcludeElement> = T extends [infer First, ...infer Rest]
  ? // 如果满足条件
    IsMatch<First, ExcludeElement> extends true
    ? // 直接丢掉继续下一次递归
      [...FilterOut<Rest, ExcludeElement>]
    : // 放入, 进行下一次递归
      [First, ...FilterOut<Rest, ExcludeElement>]
  : [];

type Filtered = FilterOut<[1, 2, null, 3], null>; // [1, 2, 3]
type Filtered1 = FilterOut<[], never>;
type Filtered2 = FilterOut<[never], never>;
type Filtered3 = FilterOut<['a', never], never>;
type Filtered4 = FilterOut<[1, never, 'a'], never>;
type Filtered5 = FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>;
type Filtered6 = FilterOut<[number | null | undefined, never], never | null | undefined>;
type Filtered7 = FilterOut<[1, 2, null, 3, undefined, undefined, null], null | undefined>; // [1, 2, 3]
