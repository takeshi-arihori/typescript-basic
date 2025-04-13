// 部分型関係
// 部分型はTypeScriptの方システムの根幹をなす要素の一つで、2つの型の互換性を表す概念。
// 型Sが型Tの部分型であるとは、S型の値はT型の値として扱えることを意味する。
// 上位互換であることを型システムの用語で部分型であると言う。
// TypeScriptの部分型関係は構造的部分型(structural subtyping)と呼ばれ、実用プログラミング言語の中では珍しい。
// 構造的部分型: オブジェクト型のプロパティを実際に比較して部分型かどうか決める方式を指す。(一般的に見られるオブジェクト指向プログラミング言語では「この型はこの型の部分型であると明示的に宣言されたものだけが部分型と見なされる(継承などの構文を用いて部分型関係を宣言できる)」名前的部分型がよく見られる。)

// 1. 返り値の方による部分型関係
type HasName = {
    name: string;
};

// HasNameの部分型であるHasNameAndAgeを定義
type HasNameAndAge = {
    name: string;
    age: number;
};

// HasNameAndAge型は、HasName型のすべての要件（name: string）を満たし、
// さらにage: numberも持つため、HasNameの部分型です
const fromAge = (age: number): HasNameAndAge => ({
    name: "John Smith",
    age,
});

// 関数型の互換性: (age: number) => HasNameAndAge は (age: number) => HasName の部分型
const f: (age: number) => HasName = fromAge;

// f(100)はHasName型の値を返すことが期待されており、
// 実際にはHasNameAndAge型（HasNameのすべての要件を満たす）の値が返されるので問題ありません
const obj: HasName = f(100);

// 引数の方が同じでなければこの理屈は通じない

console.log(obj); // { name: 'John Smith', age: 100 }
// なぜageが表示されるのか？
// 理由は f と fromAge は異なる型の変数だが、その中身は同じ関数オブジェクトだから。そのため、今回の関数オブジェクトの実装は、name と age を持つオブジェクトを返すようになっている。
// f(100)と言う関数呼び出しにおいてobjには両方のプロパティを持つオブジェクトが入る。

// 2. 返り値の部分型関係に関しては、void型が少し特殊な振る舞いをする
// どんな型を返す関数型も、void型を返す関数型の部分型として扱われる。
const f2 = (name: string) => ({ name });
const g: (name: string) => void = f2;

/**
 * 引数の方による部分型関係
 */
const showName = (obj: HasName) => {
    console.log(obj.name);
};
// 変数g2が実際に受け取る関数は、HasNameAndAge型の引数を受け取る関数であるため、HasName型の引数を受け取る関数としても扱える。
const g2: (obj: HasNameAndAge) => void = showName;

g2({
    name: "uhyo",
    age: 26,
});

/**
 * 引数の数による部分型関係
 */
type UnaryFunc = (args: number) => number;
type BinaryFunc = (left: number, right: number) => number;

const double: UnaryFunc = arg => arg * 2;
const add: BinaryFunc = (left, right) => left + right;

// UnaryFuncをBinaryFuncとして扱うことはできる
const bin: BinaryFunc = double;
// binに入っているのは arg => arg * 2 という関数オブジェクトのため 20 が出力される
console.log(bin(10, 100)); // 20が出力される