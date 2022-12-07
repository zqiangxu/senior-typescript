const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type MyParameters<T> = T extends (...params: infer P) => any ? P : never;

type ParametersResult = MyParameters<typeof foo>;
type ParametersResult2 = MyParameters<typeof bar>;
type ParametersResult3 = MyParameters<typeof baz>;

export { MyParameters };
