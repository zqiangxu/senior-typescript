import { Union2Intersection } from 'type-challenges/00055-hard-union-to-intersection';

// 总体的题目并没有描述请求，对于深层级

// {a:number} | unknown => unknown . 这里不要直接返回 unknown.
// 所以第一层不能返回 unknown
type ReturnUnknownValue<Key extends string, IsRoot> = IsRoot extends true ? {} : { [K in Key]: unknown };

type UnionDeepPick<T, Key extends string, IsRoot = true> = Key extends string // 直接通过这种方式遍历
  ? // 如果在当前对象中.
    Key extends keyof T
    ? // 则直接返回.
      { [K in Key]: T[Key] }
    : // 还有可能有更深的层级
    Key extends `${infer FirstKey}.${infer Rest}`
    ? // 第一层的 Key 在对象中. 则继续往下遍历
      FirstKey extends keyof T
      ? {
          [K in FirstKey]: UnionDeepPick<T[K], Rest, false>;
        }
      : ReturnUnknownValue<FirstKey, IsRoot>
    : ReturnUnknownValue<Key, IsRoot>
  : never;

type DeepPick<T, Key extends string> = Union2Intersection<UnionDeepPick<T, Key>>;

type obj = {
  name: 'hoge';
  age: 20;
  friend: {
    name: 'fuga';
    age: 30;
    family: {
      name: 'baz';
      age: 1;
    };
  };
};

type T1 = DeepPick<obj, 'name'>; // { name : 'hoge' }
type T2 = DeepPick<obj, 'name' | 'friend.name'>; // { name : 'hoge' } & { friend: { name: 'fuga' }}
type T3 = DeepPick<obj, 'name' | 'friend.name' | 'friend.family.name'>; // { name : 'hoge' } &  { friend: { name: 'fuga' }}  & { friend: { family: { name: 'baz' }}}

type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

type R1 = DeepPick<Obj, ''>; // unknown
type R2 = DeepPick<Obj, 'a'>; // { a: number }
type R3 = DeepPick<Obj, 'a' | ''>; // { a: number } & unknown
type R4 = DeepPick<Obj, 'a' | 'obj.e'>; // { a: number } & { obj: { e: string } }
type R5 = DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i' | 'obj.obj2.i.j' | 'ob4'>; // { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }

export { DeepPick };

type a = { a: number } & unknown;
