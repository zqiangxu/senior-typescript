interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

// type LookUp<T, U extends string> = T extends { type: string } ? (T['type'] extends U ? T : never) : never;

// best
type LookUp<T, U extends string> = T extends { type: U } ? T : never;

type MyDogType = LookUp<Cat | Dog, 'cat'>;
