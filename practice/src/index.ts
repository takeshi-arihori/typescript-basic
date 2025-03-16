// 数値リテラル

const binary = 0b1010; // 2進数リテラル
const octal = 0o755; // 8進数リテラル
const hexadecimal = 0xff; // 16進数リテラル

console.log(binary, octal, hexadecimal); // 10

const big = 1e8; // 指数表記
const small = 4e-5; // 指数表記
const million = 1_000_000; // アンダースコアで区切ることができる
console.log(big, small, million); // 100000000 0.00004 1000000

// IEEE 754形式の浮動小数点数
const float = 0.1 + 0.2;
console.log(float); // 0.30000000000000004
// 数値(仮数部)の精度が有限(53bit)であるため、計算誤差が発生する
console.log(9007199254740992 === 9007199254740993); // true

// 任意精度整数 BigInt(ES2020)
const bigNum: bigint = (123n + 456n) * 2n;
console.log(bigNum); // 1158n

// BigIntは整数のみしか扱えないので、徐算の結果は整数に丸められる
console.log(10n / 3n); // 3n

// BigIntは普通の数値と混ぜて使うことはできない
// const wrong = 100n + 50; // Error: Type 'number' is not assignable to type 'bigint'
