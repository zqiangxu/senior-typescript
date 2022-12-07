type ComplexObject = {
  a: [12, 'foo'];
  bar: 'hello';
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

type MyReturnType<T extends Function> = T extends (...params: any[]) => infer D ? D : never;

type Result1 = MyReturnType<() => string>;
type Result2 = MyReturnType<() => 123>;
type Result3 = MyReturnType<() => ComplexObject>;
type Result4 = MyReturnType<() => Promise<boolean>>;
type Result5 = MyReturnType<() => () => 'foo'>;
type Result6 = MyReturnType<typeof fn>;
type Result7 = MyReturnType<typeof fn1>;

export { MyReturnType };
