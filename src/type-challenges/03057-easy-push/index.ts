type Push<T extends readonly any[], U> = [...T, U];

type Result = Push<[1, 2], '3'>;

type Result2 = Push<[1, 2], '3'>;

type Result3 = Push<['1', 2, '3'], boolean>;

export { Push };
