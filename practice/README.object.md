# オブジェクトの基本と型

TypeScriptではただのオブジェクトが幅広く使用されている。クラスが使われないことも多い。

## オブジェクトの型

```typescript
// オブジェクトの型
const obj: {
    name: string,
    age: number
} = {
    name: 'take',
    age: 38
}

// これはエラーになる
// const obj2: {
//     name: string,
//     age: number
// } = {
//     name: 'take',
//     age: true
// }
```

## type文で型に別名をつける

```typescript
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
```

### type文の特徴
1. type文はどんな型にも別名をつけることができる
2. あくまで型に別名をつけるだけである(すでにある型に別名をつけるだけのものである)

## interfaceで型を定義する

```typescript
interface FooBarObj2 {
    foo: number;
    bar: string;
}

const objFooBar2: FooBarObj2 = {
    foo: 0,
    bar: 'string'
}
```

### interfaceの特徴
- オブジェクト型のみ扱える

ほとんどの場合、interface宣言はtype文で代用できる。interface宣言は使用せず、type文のみを使用するという流儀もある。


## オプショナルなプロパティ

あってもなくてもよいプロパティを定義するには、プロパティ名の後ろに `?` をつけます。

```typescript
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
```

## 読み取り専用プロパティ

`readonly` をつけるとプロパティが読み取り専用になります。プロパティを変更する必要がない場合は `readonly` を使うとよいです。

```typescript
interface User2 {
    readonly name: string;
    age: number;
}

const userC: User2 = {
    name: 'Taro',
    age: 25
};

// userC.name = 'Jiro'; // エラー
```

## typeofキーワードで変数の型を得る

`typeof` キーワードを使うと、変数の型を取得できます。

```typescript
const obj = {
    foo: 123,
    bar: 'hello'
};

type T = typeof obj;
const obj2: T = {
    foo: 123,
    bar: 'hello'
};
```

通常は型が最上位の事実となるため、`type 変数名 = {変数名: 型}` として型を定義します。型は設計を表すものなので、実装に関しては型よりも下位にくることになります（設計に依存して書かれているため）。`typeof` を使用する場面は、値が最上位に来るケースです。

```typescript
const commandList = ["attack", "defend", "run"] as const;
type Command = typeof commandList[number];
```

