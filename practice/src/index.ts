// 型引数

// 型引数は type文(またはinterface文)で型を作成する時に宣言する
// 「User<T>型はnameプロパティがstring型で、childプロパティがT型であるオブジェクトの型」ということになる

// 似たような構造を持つ方を色々と使用したい場合に型引数を使用する
type User<T> = {
    name: string;
    child: T;
};

const user: User<number> = {
    name: "John",
    child: 1000,
};

// 型引数を持つ型はジェネリック型と呼ばれる
type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
};
const obj: Family<number, boolean> = {
    mother: 0,
    father: 1,
    child: true,
};


