const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

type result = TupleToObject<typeof tuple>;

export { TupleToObject };
