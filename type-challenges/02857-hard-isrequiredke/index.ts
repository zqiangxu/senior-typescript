type IsRequiredKey<T, Property extends keyof T = keyof T> = T[Property] extends Required<T>[Property] ? true : false;

type A = IsRequiredKey<{ a: number; b?: string }, 'a'>; // true
type B = IsRequiredKey<{ a: number; b?: string }, 'b'>; // false
type C = IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>; // false
export { IsRequiredKey };
