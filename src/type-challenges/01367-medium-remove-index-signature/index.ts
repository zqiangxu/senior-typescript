type IsIndexSignature<T> = string extends T ? true : number extends T ? true : symbol extends T ? true : false;

type RemoveIndexSignature<T> = {
  [key in keyof T]: IsIndexSignature<key> extends true ? never : T[key];
};

type Foo = {
  // 索引签名 （index signature）
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>;

export { RemoveIndexSignature };
