const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type MyParameters<T> = T extends (...params: infer P) => any ? P : never;

type MyParametersResult = MyParameters<typeof foo>;
type MyParametersResult2 = MyParameters<typeof bar>;
type MyParametersResult3 = MyParameters<typeof baz>;
