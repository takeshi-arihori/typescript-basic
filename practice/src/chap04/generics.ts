/**
 * ジェネリクス
 */

// 型引数: type文と組み合わせて使用できるもの
// type User<N> = {
//     name: N;
// };

// ジェネリクスは関数が型引数を持ち、型引数に何が入るのかは関数を呼び出す際に決まる。
// function repeat<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
// console.log(repeat("x", 5)); // [ 'x', 'x', 'x', 'x', 'x' ]
// console.log(repeat(123, 3)); // [ 123, 123, 123 ]

/**
 * 関数の型引数を宣言する方法
 */
// function関数式の場合は関数の名前がない
// const repeat = function<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }
// アロー関数式の場合は引数リストの前にいきなり型引数リストを書く
// const repeat = <T>(element: T, length: number): T[] => {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }

// メソッド記法
// const utils = {
//     repeat<T>(element: T, length: number): T[] {
//         const result: T[] = [];
//         for (let i = 0; i < length; i++) {
//             result.push(element);
//         }
//         return result;
//     }
// }

// 型引数が複数のケース
// const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
// const p = pair<string, number>("uhyo", 26);
// console.log(p); // [ 'uhyo', 26 ]

// extends,オプショナル型引数
// const repeat = <T extends {
//     name: string;
// }>(element: T, length: number): T[] => {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result.push(element);
//     }
//     return result;
// }

// type HasNameAndAge = {
//     name: string;
//     age: number;
// };

// console.log(repeat<HasNameAndAge>({
//     name: "uhyo",
//     age: 26,
// }, 3));

// 制約を満たしていない場合はコンパイルエラーになる
// console.log(repeat<string>("a", 4));

/**
 * 関数の型引数は省略できる
 */
// 
// const result3 = repeat("x", 5); // Tはstringに推論される
// const result4 = repeat(123, 3); // Tはnumberに推論される

/**
 * 型引数を持つ関数型
 */
// const result5: <T>(element: T, length: number) => T[] = repeat; // 型引数を持つ関数型