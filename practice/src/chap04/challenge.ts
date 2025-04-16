/**
 * 練習問題 4.6.1
 */
// 関数の作成
// const getFizzBuzzString = (num: number): string => {
//     if (num % 15 === 0) {
//         return 'FizzBuzz';
//     } else if (num % 3 === 0) {
//         return 'Fizz';
//     } else if (num % 5 === 0) {
//         return 'Buzz';
//     } else {
//         return num.toString();
//     }
// }

// 数列を生成する関数
// const sequense = (start: number, end: number): number[] => {
//     const result: number[] = [];
//     for (let i = start; i <= end; i++) {
//         result.push(i);
//     }
//     return result;
// }

// for分の中を関数に抜き出す
// for (const i of sequense(1, 100)) {
//     const message = getFizzBuzzString(i);
//     console.log(message);
// }

/**
 * 練習問題 4.6.3 コールバック
 */
type Callback<T, U> = (value: T) => U;
function map<T, U>(array: T[], callback: Callback<T, U>): U[] {
    const result: U[] = [];
    for (const num of array) {
        result.push(callback(num));
    }
    return result;
}

const data = [1, 1, 2, 4, 6, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result); // [10, 10, 20, 40, 60, 80, 130]