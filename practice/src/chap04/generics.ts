/**
 * ジェネリクス
 */

// 型引数: type文と組み合わせて使用できるもの
type User<N> = {
    name: N;
};

// ジェネリクスは関数が型引数を持ち、型引数に何が入るのかは関数を呼び出す際に決まる。
function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat("x", 5)); // [ 'x', 'x', 'x', 'x', 'x' ]
console.log(repeat(123, 3)); // [ 123, 123, 123 ]