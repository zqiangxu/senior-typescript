type Permutation<T, U = T> = [T] extends [never] ? [] : U extends T ? [U, ...Permutation<Exclude<T, U>>] : never;

//  ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]
type perm = Permutation<'A' | 'B' | 'C'>;

export { Permutation, perm };
