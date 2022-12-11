type TupleToUnion<T extends readonly any[]> = T[number];

type Result1 = TupleToUnion<[123, '456', true]>;
type Result2 = TupleToUnion<[123]>;

export { TupleToUnion };
