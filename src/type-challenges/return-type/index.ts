type ComplexObject = {
  a: [12, 'foo'];
  bar: 'hello';
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

type MyReturnType<T extends Function> = T extends (...params: any[]) => infer D ? D : never;

type ReturnTypeResult1 = MyReturnType<() => string>;
type ReturnTypeResult2 = MyReturnType<() => 123>;
type ReturnTypeResult3 = MyReturnType<() => ComplexObject>;
type ReturnTypeResult4 = MyReturnType<() => Promise<boolean>>;
type ReturnTypeResult5 = MyReturnType<() => () => 'foo'>;
type ReturnTypeResult6 = MyReturnType<typeof fn>;
type ReturnTypeResult7 = MyReturnType<typeof fn1>;
