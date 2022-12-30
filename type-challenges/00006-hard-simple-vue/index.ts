type RealComputed<T> = {
  // 这里可以使用 infer .  也可以使用 ReturnType 获取返回值
  [Key in keyof T]: T[Key] extends (...params: any[]) => any ? ReturnType<T[Key]> : never;
};

type VueOptions<Data, Computed, Method> = {
  // 获取的 data 的返回值赋值给 Data
  data: (this: {}) => Data;
  // 声明 this 上的属性. 这里 & Computed 的原因是其它 Computed 里面可以使用其它的 Computed
  // 这里需要使用 RealComputed 的原因是 computed 拿到的实际是当前声明的 computed 的返回值，而不是方法
  computed: Computed & ThisType<Data & RealComputed<Computed> & Method>;
  // 同理
  methods: Method & ThisType<Data & RealComputed<Computed> & Method>;
};

declare function SimpleVue<Data, Computed, Method>(options: VueOptions<Data, Computed, Method>): any;

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname;
    },
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
    hello() {
      // 可以调用自身的方法
      this.hi();
      alert(this.firstname);
    },
  },
});
