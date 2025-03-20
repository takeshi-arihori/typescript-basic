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
1. オブジェクト型のみ扱える

ほとんどの場合、interface宣言はtype文で代用できる。interface宣言は使用せず、type文のみを使用するという流儀もある。

