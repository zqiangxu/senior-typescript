type RealComputed<T> = {
  // 这里可以使用 infer .  也可以使用 ReturnType 获取返回值
  [Key in keyof T]: T[Key] extends (...params: any[]) => any ? ReturnType<T[Key]> : never;
};

// 同样需要取出 Props 的真实返回值
type RealProps<T> = {
  [Key in keyof T]: T[Key] extends { type: any | any[] }
    ? // @TODO 没有考虑 InstanceType. 后面优化的时候可以加上
      T[Key]['type'] extends any[]
      ? // 如果是数组，要转成联合类型
        T[Key]['type'][number]
      : T[Key]['type']
    : // 否则单个类型
      T[Key];
};

type ET1 = { type: boolean } extends { type: boolean | number | string } ? true : false; // true
type ET2 = number extends { type: boolean | number | string } ? true : false; // false
type ET3 = { type: boolean; default: false } extends { type: boolean | number | string } ? true : false;
type ET4 = { type: boolean } extends { type: any } ? true : false; // true
type ET5 = { type: boolean } extends { type: any | any[] } ? true : false; // true
type ET6 = { type: [Boolean, number] } extends { type: any | any[] } ? true : false; // true

type AT1 = [Boolean, number][number]; // number | Boolean
type AT2 = [Boolean, number] extends any[] ? true : false;

type VueOptions<Data, Computed, Method, Props> = {
  // 获取的 data 的返回值赋值给 Data. 这里 data 中可以使用 props. 所以 this 需要指向 RealProps<Props>
  data: (this: RealProps<Props>) => Data;
  // 声明 this 上的属性. 这里 & Computed 的原因是其它 Computed 里面可以使用其它的 Computed
  // 这里需要使用 RealComputed 的原因是 computed 拿到的实际是当前声明的 computed 的返回值，而不是方法
  computed: Computed & ThisType<Data & RealComputed<Computed> & Method & RealProps<Props>>;
  // 同理
  methods: Method & ThisType<Data & RealComputed<Computed> & Method & RealProps<Props>>;

  // 新增 props 属性
  props: Props;
};

declare function SimpleVue<Data, Computed, Method, Props>(options: VueOptions<Data, Computed, Method, Props>): any;

const instance = SimpleVue({
  data() {
    console.log(this.foo);
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    };
  },
  props: {
    foo: '12',
    bar: {
      type: Boolean,
    },
    baz: {
      type: [Boolean, Number],
    },
  },
  computed: {
    fullname() {
      // this.foo => props
      return this.firstname + ' ' + this.lastname + ' ' + this.foo;
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
    hello() {
      // 可以调用自身的方法
      this.hi();
      alert(this.firstname + '  ' + this.baz);
    },
  },
});
