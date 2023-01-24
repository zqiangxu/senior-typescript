/**
 * 判断是否为大写字母
 * @version 1.0.0
 */
type IsUpperCase<T extends string> = Uppercase<T> extends T ? true : false;

type R1 = IsUpperCase<'S'>; // true
type R2 = IsUpperCase<'s'>; // false
type R3 = IsUpperCase<'String'>; // false
type R4 = IsUpperCase<'STRING'>; // true

export { IsUpperCase };
