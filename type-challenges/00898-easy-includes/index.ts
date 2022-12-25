type SimpleIncludes<T extends any[], U> = U extends T[number] ? true : false;

type isPillarMen = SimpleIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Diao'>;

// 会返回 boolean. 因为 U 此时是联合类型. 所以每个元素都遍历一次. 因此 Diao 为 false. Wamuu 为 true. 所以最终结果为 boolean
type isPillarMen2 = SimpleIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Diao' | 'Wamuu'>;

type BestIncludes<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? First extends U
    ? true
    : BestIncludes<Rest, U>
  : false;

type isPillarMen3 = BestIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Diao'>;

// 会判断为 true.
type isPillarMen4 = BestIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Diao' | 'Wamuu'>;

// 如果 isPillarMen4 为 false . 需要怎么处理?

export { SimpleIncludes, BestIncludes };
