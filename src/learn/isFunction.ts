type IsFunction<T> = T extends (...params: any[]) => any ? true : false;

// true
type IsFunctionResult = IsFunction<() => void>;

// true
type IsFunctionResult2 = IsFunction<(a: number, b: number) => void>;

// best

type IsFunction2<T> = keyof T extends never ? true : false;

type IsFunctionResult3 = IsFunction2<() => void>;

// true
type IsFunctionResult4 = IsFunction2<(a: number, b: number) => void>;

type IsFunctionResult5 = IsFunction2<string>;
type IsFunctionResult6 = IsFunction2<Promise<unknown>>;

export { IsFunction, IsFunction2 };
