// オプショナルなプロパティ
// あってもなくてもよいプロパティ

interface User {
    name: string;
    age?: number;
}

const userA: User = {
    name: 'Taro',
    age: 25
};

const userB: User = {
    name: 'Jiro'
};

// 読み取り専用プロパティ
// readonlyをつけるとプロパティが読み取り専用になる
// プロパティを変更する必要がない場合はreadonlyを使うとよい
interface User2 {
    readonly name: string;
    age: number;
}

const userC: User2 = {
    name: 'Taro',
    age: 25
};

// userC.name = 'Jiro'; // エラー

// typeofキーワードで変数の方を得る
// const num: number = 0;
// type T = typeof num;
// const foo: T = 123;

const obj = {
    foo: 123,
    bar: 'hello'
};

type T = typeof obj;
const obj2: T = {
    foo: 123,
    bar: 'hello'
};

// 通常は型が最上位の事実となるため、type 変数名 = {変数名: 型} として型を定義する
// 型は設計を表すものなので、実装に関しては型よりも下位にくることになる(設計に依存して書かれているため)
// typeofを使用する場面は、値が最上位に来るケース。
const commandList = ["attack", "defend", "run"] as const;
type Command = typeof commandList[number];
