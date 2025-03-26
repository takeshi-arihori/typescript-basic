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
