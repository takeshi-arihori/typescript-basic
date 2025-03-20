// オブジェクトの型
// const obj: {
//     name: string,
//     age: number
// } = {
//     name: 'take',
//     age: 38
// }

// オブジェクトの型
// これはエラーになる
// const obj2: {
//     name: string,
//     age: number
// } = {
//     name: 'take',
//     age: true
// }

// type文で型に別名をつける
type FooBarObj = {
    foo: number;
    bar: string;
};
const objFooBar: FooBarObj = {
    foo: 0,
    bar: 'string'
}

type UserId = string;
const id: UserId = "uhyo";


// type文の特徴
// 1. type文はどんな型にも別名をつけることができる
// 2. あくまで型に別名をつけるだけである(すでにある型に別名をつけるだけのものである)

// interfaceで型を定義する
// interface宣言: 型名を新規登録する方法
// interfaceの特徴
// 1. オブジェクト型のみ扱える

// ほとんどの場合、interface宣言はtype文で代用できる。
// interface宣言は使用せず、type文のみを使用するという流儀もある。

interface FooBarObj2 {
    foo: number;
    bar: string;
}

const objFooBar2: FooBarObj2 = {
    foo: 0,
    bar: 'string'
}

// 任意のプロパティ名を許容する型(インデックスシグネチャ)
// 使用用途: プロパティ名が動的に決まる状況
// [キー名: string]: 型と書くのが基本的な形(任意のstring型のキーに対してという意味)

type PriceData = {
    [key: string]: number;
}

const data: PriceData = {
    apple: 100,
    banana: 200,
    orange: 300
}

data.chicken = 500; // 追加できる
// data.beef = 'string'; // エラーになる
data.弁当 = 1000; // 追加できる
// data.弁当 = "foo"; // エラーになる

// インデックスシグネチャは、TypeScriptが保証する型安全性を破壊するため使用する際、注意が必要
type MyObj = {
    [key: string]: number;
};
const obj3: MyObj = {
    foo: 123,
};

const num: number = obj3.bar; // ここでエラーが発生しない
console.log(num); // numberではなく、undefinedとなる
// 存在しないプロパティにアクセスするものはそもそもコンパイルエラーとなるはずだが、それを可能にしてしまうのがインデックスシグネチャ
// この特性により、型安全性が破壊されてしまう。

// リテラル型やユニオン型

// リテラル型
const propName: 'foo' = 'foo';
const obj = {
    [propName]: 123,
};

console.log(obj.foo); // 123

// // ユニオン型
// type PropName = 'foo' | 'bar';
// const propName2: PropName = 'foo';
// const obj2 = {
//     [propName2]: 456,
// };

// console.log(obj2.foo); // 456