type ConcatPoint<T extends string, U extends string> = T extends '' ? `${U}` : `${T}.${U}`;

type Get<
  T,
  FlatPropertyKey extends string,
  BaseKey extends string = '',
  Key extends keyof T = keyof T
> = Key extends keyof T
  ? Key extends string
    ? // 如果满足条件
      ConcatPoint<BaseKey, Key> extends FlatPropertyKey
      ? // 返回对应的属性值
        T[Key]
      : // 如果不满足条件，判断是否为一个 object
      T[Key] extends Record<string, unknown>
      ? // 是否一个 object. 则继续递归
        Get<T[Key], FlatPropertyKey, ConcatPoint<BaseKey, Key>>
      : never
    : never
  : never;

type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  hello: 'world';
};

type A = Get<Data, 'hello'>; // 'world'
type B = Get<Data, 'foo.bar.count'>; // 6
type C = Get<Data, 'foo.bar'>; // { value: 'foobar', count: 6 }

type O1 = Data extends Record<string, unknown> ? true : false;
type O2 = Data['hello'] extends Record<string, unknown> ? true : false;
type O3 = Data['foo'] extends Record<string, unknown> ? true : false;

export { Get };
