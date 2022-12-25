type StringToUnion<S extends string> = S extends `${infer First}${infer Other}` ? First | StringToUnion<Other> : never;
type SU1 = StringToUnion<'ABC'>;

// @TODO
type AllCombinations<T extends string, U extends string[] = StringToUnion<T>> = '';

type AllCombinations_ABC = AllCombinations<'ABC'>;
