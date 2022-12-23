type Reversed<T extends readonly any[]> = T extends [...infer Rest, infer End] ? [End, ...Reversed<Rest>] : [];

type FlipArguments<T extends Function> = T extends (...params: infer D) => infer Res
  ? (...params: Reversed<D>) => Res
  : never;

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>;

export { Reversed, FlipArguments };
