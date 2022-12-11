type isNever<T> = T extends never ? true : false;

// => never
// never 类型无法直接判断
type IsNeverResult = isNever<never>;

// correct

type isCorrectNever<T> = [T] extends [never] ? true : false;

type IsCorrectNeverResult = isCorrectNever<never>;

export { isNever };
