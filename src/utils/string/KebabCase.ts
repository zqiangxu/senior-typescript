/**
 * 驼峰式转短横线隔开式
 * @version 1.0.0
 */
type Blank = ' ' | '\n' | '\t';

type KebabCase<T extends string> = T extends `${infer D}${infer F}`
  ? // 第一个字母始终小写，后面匹配首字母转小写, 相同则不做处理
    F extends Uncapitalize<F>
    ? `${Lowercase<D>}${KebabCase<F>}`
    : `${D extends Blank ? Lowercase<D> : `${Lowercase<D>}-`}${KebabCase<F>}`
  : T;

type R1 = KebabCase<'ABC12E'>; // a-b-c12-e
type R2 = KebabCase<'FooBarBaz'>; // foo-bar-baz
type R3 = KebabCase<'A12'>; // a12
type R4 = KebabCase<''>; // ''
type R5 = KebabCase<' A'>; // ' a'
type R6 = KebabCase<'    A'>; // '    a'
type R7 = KebabCase<'    A B   C'>; // '    a b   c'

export { KebabCase };
