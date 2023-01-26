import { IsAny } from '@/is-type/IsAny';
import { IsNever } from '@/is-type/IsNever';

/**
 * 将字符串转换为tuple
 * @version 1.0.0
 * @description 需要处理下 any 和 never. any 和 never 返回 []
 */
type StringToTuple<T extends string> = IsNever<T> extends true
  ? []
  : IsAny<T> extends true
  ? []
  : T extends `${infer F}${infer S}`
  ? [F, ...StringToTuple<S>]
  : [];

type R1 = StringToTuple<'string'>; // ['s', 't', 'r', 'i', 'n', 'g']
type R2 = StringToTuple<'foo'>; // ['f', 'o', 'o']
type R3 = StringToTuple<''>; // []
type R4 = StringToTuple<never>; // []
type R5 = StringToTuple<any>; // []
type R6 = StringToTuple<string>; // []

export { StringToTuple };
