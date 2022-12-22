type Reverse<T extends readonly any[]> = T extends [...infer Rest, infer End] ? [End, ...Reverse<Rest>] : [];
type a = Reverse<['a', 'b']>; // ['b', 'a']
type b = Reverse<['a', 'b', 'c']>; // ['c', 'b', 'a']

export { Reverse };
