type Mapper = { mapFrom: any; mapTo: any };

type MapTypes<T, U extends Mapper> = {
  [key in keyof T]: T[key] extends U['mapFrom'] ? U['mapTo'] : T[key];
};

type StringToNumber = { mapFrom: string; mapTo: number };
type StringToDate = { mapFrom: string; mapTo: Date };

// => number | Date
type Test = (StringToNumber | StringToDate)['mapTo'];

type R1 = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber>;
type R2 = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber | StringToDate>;
type R3 = MapTypes<{ iWillBeANumberOneDay: string; iWillStayTheSame: Function }, StringToNumber>;

export { MapTypes };
