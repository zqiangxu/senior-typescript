type IsNever<T> = [T] extends [never] ? true : false;

type IsCorrectNeverResult = IsNever<never>;

export { IsNever };
