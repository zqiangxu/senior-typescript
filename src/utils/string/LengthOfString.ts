import { StringToTuple } from "./StringToTuple";

/**
 * 将字符串转换为tuple
 * @version 1.0.0
 */
type LengthOfString<T extends String> = StringToTuple<T>['length'];

type R1 = LengthOfString<'string'>; // 6
type R2 = LengthOfString<'foo'>; // 3
type R3 = LengthOfString<''>; // 1

export { LengthOfString };
