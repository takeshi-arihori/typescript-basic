// function range(min: number, max: number): number[] {
//     const result = [];
//     for (let i = min; i < max; i++) {
//         result.push(i);
//     }
//     return result;
// }

// const a = range(1, 10);
// console.log(a);

// エラーテスト
// const b = range(1, 10, 2);
// const c = range("1", 10);


/**
 * セミコロン省略の罠
 */
// function toSeconds(hours: number, minutes: number, seconds: number): number {
//     return hours * 3600 + minutes * 60 + seconds;

// 改行を行うと、return;と同じ意味になる
// return
//     hours * 3600
//         + minutes * 60
//         + seconds;
// }

/**
 * 関数式
 */
// type Human = {
//     height: number,
//     weight: number,
// };

// Human型はnumber型のheightとweightを持つオブジェクトの型である。
// const calcBMI = function (human: Human): number {
//     return human.weight / human.height ** 2;
// };

// 分割代入でも可能
// const calcBMI = function ({ height, weight }: Human): number {
//     return weight / height ** 2;
// };

// const uhyo: Human = {
//     height: 1.84,
//     weight: 72,
// };

// const bmi = calcBMI(uhyo);
// console.log(bmi);


/**
 * オプショナル引数の宣言
 */
// const toLowerOrUpper = (str: string, upper?: boolean) => {
//     if (upper) {
//         return str.toUpperCase();
//     } else {
//         return str.toLowerCase();
//     }
// };

// console.log(toLowerOrUpper("foo")); // "foo"
// console.log(toLowerOrUpper("foo", true)); // "FOO"
// console.log(toLowerOrUpper("foo", false)); // "foo"

/**
 * コールバック関数
 */

type User = {
    name: string,
    age: number,
}
const users: User[] = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 17 },
];

// usersはUser型の要素を持つ配列だったので、users.mapに渡される関数getNameは引数としてUser型を受け取る関数でなければならない。
// mapのコールバック関数については返り値の型については特に制限がない。
// 関数式に直接引数として与える
const getAge = (u: User): number => u.age;
const getName = (u: User): string => u.name;

// const names = users.map(getName);
// console.log(names); // ["uhyo", "John Smith"]
// const ages = users.map(getAge);
// console.log(ages); // [26, 17]

// filterメソッド
const adultUsers = users.filter((u: User) => u.age >= 20);

// findメソッド
const john = users.find((u: User) => u.name.startsWith("John"));

// someメソッド
const seniorExists = users.some((u: User) => u.age >= 60);

// everyメソッド
const allAdult = users.every((u: User) => u.age >= 20);

console.log(adultUsers); // [{ name: "uhyo", age: 26 }]
console.log(john); // { name: "John Smith", age: 17 }
console.log(seniorExists); // false
console.log(allAdult); // false