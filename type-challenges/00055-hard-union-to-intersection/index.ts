// 逆变 contravariance

// 在逆变的位置会产生交叉类型
type Union2Intersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type I = Union2Intersection<'foo' | 42 | true>; // expected to be 'foo' & 42 & true

type UnionToArray<T, Key = T> = Key extends T ? [Key, ...UnionToArray<Exclude<T, Key>>] : [];

type U = 'foo' | 42 | true;
type E1 = Exclude<'foo' | 42 | (() => void), () => void>;

type UTA1 = UnionToArray<U>;

export { Union2Intersection };
