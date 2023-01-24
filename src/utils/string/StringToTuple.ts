/**
 * 将字符串转换为tuple
 * @version 1.0.0
 */
type StringToTuple<T extends String> = T extends `${infer F}${infer S}` ? [F, ...StringToTuple<S>] : [];

type R1 = StringToTuple<'string'>; // ['s', 't', 'r', 'i', 'n', 'g']
type R2 = StringToTuple<'foo'>; // ['f', 'o', 'o']
type R3 = StringToTuple<''>; // ['']

export { StringToTuple };
