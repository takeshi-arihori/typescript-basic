/**
 * 関数の型
 */

// 関数自体も値である以上、関数という値自体を表す方も存在する。
// 引数名に関しては任意の名前をつけることができる。重要なのは型であるため、型が正しければOK。
type F = (repeatNum: number) => string;
type F2 = (arg: number, arg2: number) => boolean;
const xRepeat: F = (num: number): string => "x".repeat(num);
// 以下のように型に合わない関数を変数に代入するのはエラーになる。
// const xRepeat2: F2 = (num: number): string => "x".repeat(num);
console.log(xRepeat(5)); // xxxxx

type MyFunc = {
    isUsed: boolean;
    (arg: number): void;
};

const double: MyFunc = (arg: number) => {
    console.log(arg * 2);
};

double.isUsed = true; // これはOK
console.log(double.isUsed); // true