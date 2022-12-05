type Push<T extends readonly any[], U> = [...T, U];

type PushResult = Push<[1, 2], '3'>;

type PushResult2 = Push<[1, 2], '3'>;

type PushResult3 = Push<['1', 2, '3'], boolean>;
