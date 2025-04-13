/**
 * 型引数
 */

// 型引数は type文(またはinterface文)で型を作成する時に宣言する
// 「User<T>型はnameプロパティがstring型で、childプロパティがT型であるオブジェクトの型」ということになる

// 似たような構造を持つ方を色々と使用したい場合に型引数を使用する
// type User<T> = {
//     name: string;
//     child: T;
// };

// const user: User<number> = {
//     name: "John",
//     child: 1000,
// };

// 型引数を持つ型はジェネリック型と呼ばれる
// Familyは具体的な型に言及せず、「構造」のみに言及している -> 型の抽象化
// 高度に抽象化されたプログラムを書くためには型引数を持つ型が不可欠となる
// type Family<Parent, Child> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// };
// const obj: Family<number, boolean> = {
//     mother: 0,
//     father: 1,
//     child: true,
// };

// 型引数を定義せず使用するとエラーになる
// const obj2: Family = {
//     mother: 0,
//     father: 1,
//     child: true,
// };

/**
 * 部分型関係による型引数の制約
 */

// extends: この型引数は常に型の部分型でなければならないという制約
// type HasName = {
//     name: string;
// };

// type Family<Parent extends HasName, Child extends HasName> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// };

// 次のようなものは制約を満たしていないためエラーとなる
// type T = Family<number, string>;


// 次のようなものは制約を満たしているためOK
// type Animal = {
//     name: string;
// };

// type Human = {
//     name: string;
//     age: number;
// };

// type T = Family<Animal, Human>;


// extendsの右に書く制約は他の型引数も使用できる
// type Family<Parent extends HasName, Child extends Parent> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// };

// type S = Family<Animal, Human>;
// Parentに渡される型はHasNameの部分型でなくてはならず、ChildはParentの部分型でなければならない
// そのため、次のようなものはエラーとなる(ChildはAnimalの部分型ではないため)
// type T = Family<Human, Animal>;


/**
 * オプショナルな型引数
 */
// 基本はデフォルト値を定義するためだが、たまに型の中身をカスタマイズしたいときに使用される
// 型引数の後ろに　 = 型 を付与するとその型が省略された場合のデフォルト値として扱われる(オプショナルな型引数)
// type HasName = {
//     name: string;
// };
// type Animal = {
//     name: string;
// };
// type Family<Parent = Animal, Child = Animal> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// };

// // 通常通りの使い方
// type S = Family<string, string>;
// // TはFamily<Animal, Animal>型と同じ
// type T = Family<string>;
// // UはFamily<string, Animal>型と同じ
// type U = Family<string>;

// type Family2<Parent, Child = Parent> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// };

// type Family3<Parent extends HasName, Child extends HasName = Animal> = {
//     mother: Parent;
//     father: Parent;
//     child: Child;
// };
