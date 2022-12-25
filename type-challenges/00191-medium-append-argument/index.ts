type AppendArgument<T, U> = T extends (...params: infer P) => infer R ? (...params: [...P, U]) => R : T;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
