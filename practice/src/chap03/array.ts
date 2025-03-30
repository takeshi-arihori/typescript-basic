/**
 * 配列の型
 * 
 */
// const arr: number[] = [1, 10, 100];
// 以下はコンパイルエラー
// const arr2: number[] = [1, 10, "100"];

// 配列の表現方法
// 1. 配列の型を指定して宣言
const arr: number[] = [1, 10, 100];

// 2. T[]の代わりにジェネリック型を使用
const arr2: Array<number> = [1, 10, 100];

// 使い分け方の例
// 1. 簡単な型の配列
const arr3: string[] = ["foo", "bar", "baz"];

// 2. 複雑な型の配列
const arr4: Array<{ name: string; age: number }> = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
];

/**
 * readonly配列
 */
// 内容を書き換えられない配列型
const arr5: readonly number[] = [1, 10, 100];

// 以下はコンパイルエラー
// arr5[0] = 1000;

const arr6 = [1, 2, 3, 4, 5];

arr6.includes(1);

const arr7 = [1, 2, 3, 4, 5];

const arr8 = arr7.map((x) => x * 2); // [2, 4, 6, 8, 10]

console.log(arr7); // [1, 2, 3, 4, 5]
console.log(arr8); // [2, 4, 6, 8, 10]

/**
 * タプル型
 */
// 要素が固定された配列型のこと。配列のそれぞれの要素に異なる型を与えることができる。
// TypeScriptにおいてはタプル型は配列型の一種になっている。(JavaScript型プルという概念を持っておらず、配列で代用しているため)
// 例: [string, number]

let tuple: [string, number];

tuple = ["foo", 123];

// 以下はコンパイルエラー
// tuple = [123, "foo"];

// 分割代入
// const nested = {
//     num: 123,
//     obj: {
//         foo: "foo",
//         bar: "bar",
//     },
// };

// const {
//     obj: { foo, bar },
// } = nested;

// console.log(foo); // "foo"
// console.log(bar); // "bar"

// 分割代入のデフォルト値
type Obj = {
    foo?: number;
};

const obj1: Obj = {};
const obj2: Obj = { foo: 1234 };

const { foo = 500 } = obj1;
console.log(foo); // 500

const { foo: bar = 500 } = obj2;
console.log(bar); // 1234


/**
 * Dateオブジェクトの型
 */

const date = new Date("2025-03-30");
console.log(date);

/**
 * 正規表現オブジェクト
 */

// test
const regex = /foo/

const str = "foo";

const result = regex.test(str);
console.log(result);

// replace
const str2 = "foo bar foo baz";

const result2 = str2.replace(/foo/g, "FOO");
console.log(result2); // "FOO bar FOO baz"


/**
 * Mapオブジェクト
 */

// 真の連想配列で、keyを任意の値にすることができる。

const map: Map<string, number> = new Map();
map.set("foo", 1234);

console.log(map.get("foo")); // 1234
console.log(map.get("bar")); // undefined


