type IsNotObject<T> = keyof T extends 0 ? true : false;

type IsNotObjectTest1 = IsNotObject<() => void>;

// error => keyof 1 => "toFixed" | "toString" | "toExponential" ...
type IsNotObjectTest2 = IsNotObject<1>;

// error

// "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
type numberK = keyof number;

// error
type IsNotObjectTest3 = IsNotObject<number>;

// | "toString" | "valueOf" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" ....
type stringK = keyof string;

// error
type IsNotObjectTest4 = IsNotObject<string>;

type IsNotObjectTest5 = IsNotObject<{ a: number; b: number }>;

// ------

type IsNotObject2<T> = T extends {} ? false : true;

export { IsNotObject2 };
