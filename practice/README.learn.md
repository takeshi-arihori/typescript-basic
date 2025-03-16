# 文と式

## 文と式の違い
- 式: プログラムの実際の計算を行うため結果がある
```zsh
1 + 1
```
- 文: プログラムの構造を決めるためのもので、結果がない
```zsh
const target = "world!";
```
変数宣言は、const = 変数名 = 式(ここでは文字列リテラル) という形の文で表される。  

- 式文: 式と文の両方の性質を持つもので最後にセミコロンがつく
```zsh
console.log("Hello, " + target);
```
式分は式を実行したいが結果は必要ない場合に使える文。  
例: `console.log()`はコンソールに文字列を表示したいだけで、何らかの結果を得たいわけではない。  

## 数値リテラル
```zsh
/**
 * 2進数リテラル
 * @constant {number}
 */
const binary = 0b1010;

/**
 * 8進数リテラル
 * @constant {number}
 */
const octal = 0o755;

/**
 * 16進数リテラル
 * @constant {number}
 */
const hexadecimal = 0xff;

console.log(binary, octal, hexadecimal); // 10

/**
 * 指数表記
 * @constant {number}
 */
const big = 1e8;

/**
 * 指数表記
 * @constant {number}
 */
const small = 4e-5;

/**
 * アンダースコアで区切ることができる
 * @constant {number}
 */
const million = 1_000_000;

console.log(big, small, million); // 100000000 0.00004 1000000

/**
 * IEEE 754形式の浮動小数点数
 * 数値(仮数部)の精度が有限(53bit)であるため、計算誤差が発生する
 * @constant {number}
 */
const float = 0.1 + 0.2;

console.log(float); // 0.30000000000000004
console.log(9007199254740992 === 9007199254740993); // true

/**
 * 任意精度整数 BigInt(ES2020)
 * @constant {bigint}
 */
const bigNum: bigint = (123n + 456n) * 2n;

console.log(bigNum); // 1158n

/**
 * BigIntは整数のみしか扱えないので、徐算の結果は整数に丸められる
 */
console.log(10n / 3n); // 3n

/**
 * BigIntは普通の数値と混ぜて使うことはできない
 * @example
 * // const wrong = 100n + 50; // Error: Type 'number' is not assignable to type 'bigint'
 */
```

## nullとundefined
- null: 値が存在しないことを表す
- undefined: 値が代入されていないことを表す
TypeScriptでは、サポートが厚いundefinedを推奨。