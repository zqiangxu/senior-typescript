// 自我组合
// T = U, T extends string 遍历自己
type SelfCombination<U extends string, T = U> = T extends string
  ? // ${T} 是单个的
    // ${T} ${SelfCombination<Exclude<U, T>>} 是组合自身和排除掉自己的所有组合
    // 例如 SelfCombination<'A' | 'B'>
    // 'A' | `AB`
    // 'B' | `BA`

    // SelfCombination<'A' | 'B' | 'C'>
    // 对于 A 就只有下面这种情况
    // 'A' | `A ${SelfCombination<'B' | 'C'>}`
    // =>
    // 进行下次遍历为:
    // A: `AB` | `AB${SelfCombination<'C'>}` => 'AB' | 'ABC'
    // B: `AC` | `AC${SelfCombination<'B'>}` => 'AC' | 'ACB'
    // 其与几个组合一次类推
    `${T}` | `${T}${SelfCombination<Exclude<U, T>>}`
  : '';

type StringToUnion<S extends string> = S extends `${infer First}${infer Other}` ? First | StringToUnion<Other> : never;
type SU1 = StringToUnion<'ABC'>;

// 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
// "ABC" | "A" | "BC" | "B" | "C" | "CB" | "AB" | "AC" | "ACB" | "CA" | "BA" | "BAC" | "BCA" | "CAB" | "CBA"
type AllCombinations<T extends string> = SelfCombination<StringToUnion<T>> | '';

type AllCombinations_ABC = AllCombinations<'ABC'>;
type AllCombinations_Empty = AllCombinations<''>;
type AllCombinations_AB = AllCombinations<'AB'>; // '' | 'A' | 'B' | 'AB' | 'BA'

// '' | 'A' | 'B' | 'C' | 'D' | 'AB' | 'AC' | 'AD' | 'BA' | 'BC' | 'BD' | 'CA' | 'CB' | 'CD' | 'DA' | 'DB' | 'DC' | 'ABC' | 'ABD' | 'ACB' | 'ACD' | 'ADB' | 'ADC' | 'BAC' | 'BAD' | 'BCA' | 'BCD' | 'BDA' | 'BDC' | 'CAB' | 'CAD' | 'CBA' | 'CBD' | 'CDA' | 'CDB' | 'DAB' | 'DAC' | 'DBA' | 'DBC' | 'DCA' | 'DCB' | 'ABCD' | 'ABDC' | 'ACBD' | 'ACDB' | 'ADBC' | 'ADCB' | 'BACD' | 'BADC' | 'BCAD' | 'BCDA' | 'BDAC' | 'BDCA' | 'CABD' | 'CADB' | 'CBAD' | 'CBDA' | 'CDAB' | 'CDBA' | 'DABC' | 'DACB' | 'DBAC' | 'DBCA' | 'DCAB' | 'DCBA'
type AllCombinations_ABCD = AllCombinations<'ABCD'>;

export { AllCombinations };
