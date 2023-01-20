type TupleToUnion<T extends any[]> = T[number];

type Result1 = TupleToUnion<[123, '456', true]>;
type Result2 = TupleToUnion<[123]>;
type Result3 = TupleToUnion<number[]>;
type Result4 = TupleToUnion<(string | number)[]>;

export { TupleToUnion };
